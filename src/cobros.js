let listaSocios = [];

$('#mensaje_data').html('Cargando datos');
var intervalLoading = setInterval(() => {
    $('#mensaje_data').append('.');
}, 500);

$(document).ready( () => {
    getSocios();
    listenSearch();
    closeModal();
});

function closeModal()
{
    $('#modal-full-close').click(() => {
        $('#modal-full-set').css('width', '0%');
    });
}

function getSocios() 
{
    $.ajax({
        url: ENDPOINT + 'partners',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localData.token
        },
        success: (data) => {
            clearInterval(intervalLoading);
            listaSocios = data;
            setCardReadings();            
        },
        error: (e) => {
            $('#modal-text').html('<h3 style="color:red">Error al conectar con el servidor</h3>');
        }
    });
}

function setCardReadings()
{
    var div_cards_readings = $('#cards-socios-reading');
    div_cards_readings.html(null);
    $('#mensaje_data').html('Renderizando');
    intervalLoading = setInterval(() => {
        $('#mensaje_data').append('.');
    }, 1000);
    setTimeout(() => {
        listaSocios.forEach((socio) => {
            var card_socio = renderToReadings(socio);
            div_cards_readings.append(card_socio);
        });
        $('#mensaje_data').html('Listo.');
        clearInterval(intervalLoading);
        setTimeout(() => {
            $('#mensaje_data').html(null);
            $('#busqueda-socio').attr('disabled', false)
            clickLecturas();
        }, 1000);
    }, 3000);
}

function loadingSpinner()
{
    var i_loading = $('<i></i>');
    i_loading.addClass('zmdi');
    i_loading.addClass('zmdi-spinner');
    i_loading.addClass('zmdi-hc-spin');
    i_loading.css('font-size', '15rem');
    return i_loading;
}

function clickLecturas()
{
    $('.up__modal').click( (partner) => {
        $('#modal-full-set-content').html(loadingSpinner());
        asyncGetPartner(partner);
    });
}

async function asyncGetPartner(partner)
{
    $('#modal-full-set').css('width', '100%');
    try {
        const getData = await getTransactions(partner.target.id);
        $('#modal-full-set-content').html(renderTransactionHeading(getData));
        submitSavingSale();
    } catch (error) {
        console.log(error);
    }
}

async function getTransactions(uid)
{
    return await $.ajax({
        url: `${ENDPOINT}partner/${uid}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localData.token
        }
    });
}

function listenSearch()
{
    $('#busqueda-socio').keyup((e) => {
        listaSocios.forEach( s => {
            if (
                s.fullName.toLowerCase().includes(e.target.value.toLowerCase()) ||
                s.shortName.toLowerCase().includes(e.target.value.toLowerCase())
            )
                $('#' + s.uid).parent().parent().css('display', 'block');
            else
                $('#' + s.uid).parent().parent().css('display', 'none');
        });
    });
}

function renderToReadings(socio)
{
    var a_link_container = $('<a></a>');
    a_link_container.addClass('list-group-item');
    a_link_container.addClass('media');    
    var div_pull_left = $('<div></div>');
    div_pull_left.addClass('pull-left');
    var img_ico = $('<img/>');
    img_ico.addClass('avatar-img');
    switch (socio.ico) 
    {
        case 'Varon_1': img_ico.attr('src', '../../assets/img/usuarios/v3.png'); break;
        case 'Varon_2': img_ico.attr('src', '../../assets/img/usuarios/v5.png'); break;
        case 'Mujer_1': img_ico.attr('src', '../../assets/img/usuarios/m2.png'); break;
        case 'Mujer_2': img_ico.attr('src', '../../assets/img/usuarios/m5.png'); break;
    }
    img_ico.attr('alt', socio.fullName);
    div_pull_left.append(img_ico);
    var div_media_body = $('<div></div>');
    div_media_body.addClass('media-body');
    var div_list_heading = $('<div></div>');
    div_list_heading.addClass('list-group__heading');
    div_list_heading.addClass('up__modal');
    div_list_heading.css('cursor', 'pointer');
    div_list_heading.attr('id', socio.uid);
    div_list_heading.html(socio.fullName);
    var small_text = $('<small></small>');
    small_text.addClass('list-group__text');
    small_text.html(`${socio.gauges} accione(s) registrada(s).`);
    div_media_body.append(div_list_heading);
    div_media_body.append(small_text);
    a_link_container.append(div_pull_left);
    a_link_container.append(div_media_body);
    return a_link_container;
}

function renderTransactionHeading(gauges)
{
    var div_card = $('<div></div>');
    div_card.addClass('card');

    var br = $('<br/>');
    
    var div_wizard = $('<div></div>');
    div_wizard.addClass('tab-wizard');
    
    var ul_tab = $('<ul></ul>')
    ul_tab.addClass('tab-nav');
    ul_tab.addClass('tab-nav--centered');
    ul_tab.addClass('tab-wizard__nav');
    
    gauges.forEach( (gauge, i) => {
        var li = $('<li></li>');
        if(i==0){
            li.addClass('active');
        }
        var a = $('<a></a>')
        a.css('font-size', '14px')
        a.attr('href', `#${gauge.numeroMedidor}`);
        a.attr('data-toggle', 'tab');
        a.attr('aria-expanded', 'true')
        a.append(`Nº ${gauge.numeroMedidor} [ <span style="color:orange;">${gauge.ordenMedidor}</span> ]`);
        li.append(a);
        ul_tab.append(li);
    });

    var div_tab_content = $('<div></div>');
    div_tab_content.addClass('tab-content');

    gauges.forEach((gauge, i) => {
        var div_tab_fade = $('<div></div>');
        div_tab_fade.addClass('tab-pane');
        div_tab_fade.addClass('fade');
        if (i == 0) {
            div_tab_fade.addClass('active');
            div_tab_fade.addClass('in');
        }
        div_tab_fade.attr('id', gauge.numeroMedidor);
        div_tab_fade.append(renderTransactionGaugeHeading(gauge));
        div_tab_content.append(div_tab_fade);
    });

    div_wizard.append(ul_tab);
    div_wizard.append(div_tab_content);
    div_card.append(br);
    div_card.append(div_wizard);
    return div_card;
}

function renderTransactionGaugeHeading(gauge) {
    var div_card = $('<div></div>');
    div_card.addClass('card');

    var br = $('<br/>');

    var div_wizard = $('<div></div>');
    div_wizard.addClass('tab-wizard');

    var ul_tab = $('<ul></ul>')
    ul_tab.addClass('tab-nav');
    ul_tab.addClass('tab-nav--centered');
    ul_tab.addClass('tab-wizard__nav');

    var tabs_collections_fines_contributions = [
        {
            "name": "CONSUMO DE AGUA",
            "key": "water_consumption_01"
        },
        {
            "name": "MULTAS ASAMBLEAS",
            "key": "assembly_fines_02"
        },
        {
            "name": "APORTES",
            "key": "contributions_03"
        }
    ];

    tabs_collections_fines_contributions.forEach((item, i)=> {
        var li = $('<li></li>');
        if (i == 0) {
            li.addClass('active');
        }
        var a = $('<a></a>')
        a.css('font-size', '14px')
        a.attr('href', `#${item.key}`);
        a.attr('data-toggle', 'tab');
        a.attr('aria-expanded', 'true')
        a.append(`${item.name}`);
        li.append(a);
        ul_tab.append(li);
    });

    var div_tab_content = $('<div></div>');
    div_tab_content.addClass('tab-content');

    tabs_collections_fines_contributions.forEach((tab, i) => {
        var div_tab_fade = $('<div></div>');
        div_tab_fade.addClass('tab-pane');
        div_tab_fade.addClass('fade');
        div_tab_fade.attr('id', tab.key);
        if (i == 0) {
            div_tab_fade.addClass('active');
            div_tab_fade.addClass('in');
            div_tab_fade.append(renderTransactionsGaugeTable(gauge.lecturas));
        }
        div_tab_content.append(div_tab_fade);
    });

    div_wizard.append(ul_tab);
    div_wizard.append(div_tab_content);
    div_card.append(br);
    div_card.append(div_wizard);
    return div_card;
}

function renderTransactionsGaugeTable(readings)
{
    var div_card = $('<div></div>');
    div_card.addClass('card');

    var div_card_header = $('<div></div>');
    div_card_header.addClass('content__header');

    var div_card_body = $('<div></div>');
    div_card_body.addClass('card__body');

    var div_table_responsive = $('<div></div>');
    div_table_responsive.addClass('table-responsive');

    var table_striped = $('<table></table>');
    table_striped.addClass('table');
    table_striped.addClass('table-striped');
    table_striped.addClass('table-hover');

    var t_head = $('<thead></thead>');
    var t_body = $('<tbody></tbody>');

    var tr_head = $('<tr></tr>');
    
    var th_number = $('<th></th>');
    th_number.append('Nº');
    var th_mes = $('<th></th>');
    th_mes.append('MES');
    var th_lectura = $('<th></th>');
    th_lectura.append('LECTURA');
    var th_pago = $('<th></th>');
    th_pago.append('PAGO');
    var th_monto_consumo = $('<th></th>');
    th_monto_consumo.append('MONTO COMSUMO');
    var th_saldo = $('<th></th>');
    th_saldo.append('SALDO');
    var th_multa = $('<th></th>');
    th_multa.append('MULTA');
    var th_accion = $('<th></th>');
    th_accion.append('ACCIÓN')

    tr_head.append(th_number);
    tr_head.append(th_mes);
    tr_head.append(th_lectura);
    tr_head.append(th_pago);
    tr_head.append(th_monto_consumo);
    tr_head.append(th_saldo);
    tr_head.append(th_multa);
    tr_head.append(th_accion);

    t_head.append(tr_head);

    var readingsInverse = readings.reverse();
    readingsInverse.forEach((reading, i) => {
        var returnToRender = renderToBodyData(reading, i + 1);
        t_body.append(returnToRender[0]);
        var tr_history = $('<tr></tr>');
        var td_history = $('<td></td>');
        var tr_sale_history = $('<tr></tr>');
        var td_sale_history = $('<td></td>');
        td_history.attr('colspan', '8');
        td_sale_history.attr('colspan', '8');
        td_history.append(returnToRender[1]);
        td_sale_history.append(returnToRender[2]);
        tr_history.append(td_history);
        tr_sale_history.append(td_sale_history);
        t_body.append(tr_history);
        t_body.append(tr_sale_history);
    });

    table_striped.append(t_head);
    table_striped.append(t_body);

    div_table_responsive.append(table_striped);

    div_card_body.append(div_table_responsive);

    div_card.append(div_card_header);
    div_card.append(div_card_body);
    return div_card;
}

function renderToBodyData(reading, n)
{
    var form_transaction = null;

    var tr_reading = $('<tr></tr>');

    var tr_number = $('<td></td>');
    tr_number.append(n);

    var tr_mes = $('<td></td>');
    
    var div_tr_collapse_history = $('<div></div>');
    div_tr_collapse_history.addClass('alert');
    div_tr_collapse_history.addClass('alert--light');
    div_tr_collapse_history.css('padding', '2px');
    div_tr_collapse_history.attr('role', 'button');
    div_tr_collapse_history.attr('title', 'VER MOVIMIENTOS');
    div_tr_collapse_history.attr('data-toggle', 'collapse');
    div_tr_collapse_history.attr('data-target', `#${reading.idLectura}`);

    tr_mes.append(div_tr_collapse_history.append(GetDate(null, new Date(reading.fechaMedicion), true, null, true, true)));

    var tr_lectura = $('<td></td>');
    tr_lectura.append(reading.medida);
    
    var tr_pago = $('<td></td>');
    
    var tr_monto_consumo = $('<td></td>');

    var tr_saldo = $('<td></td>');
    
    var tr_multa = $('<td></td>');
    
    var tr_accion = $('<td></td>');

    var div_accion_collapse = $('<button></button>');
    div_accion_collapse.addClass('btn');
    div_accion_collapse.addClass('btn-success');
    div_accion_collapse.addClass('btn--icon');
    div_accion_collapse.attr('title', 'PAGAR')
    div_accion_collapse.attr('data-toggle', 'collapse');
    div_accion_collapse.attr('data-target', `#transaction_${reading.idLectura}`);

    var i_accion = $('<i></i>');
    i_accion.addClass('zmdi');
    i_accion.addClass('zmdi-card');

    div_accion_collapse.append(i_accion);

    var div_alert = $('<div></div>');
    div_alert.addClass('alert');

    var div_alert_monto = $('<div></div>');
    div_alert_monto.addClass('alert');

    var div_alert_multa = $('<div></div>');
    div_alert_multa.addClass('alert');

    var div_alert_saldo = $('<div></div>');
    div_alert_saldo.addClass('alert');

    var estado = 1, monto = 0.00, multa = 0.00, saldo = 0.00;
    
    reading.historialLectura.forEach((history, i) => {

        monto = history.subTotal;

        switch (history.estadoMedicion)
        {
            case 'PENDING': estado = 1; saldo =  history.subTotal - history.montoCancelado; break;
            case 'IN_PROCESS': estado = 2; saldo =  history.subTotal - history.montoCancelado; break;
            case 'COMPLETED': estado = 3; break;
            case 'CANCELLED': estado = 4; break;
        }

        if (history.diferenciaMedida === 0 && history.precioUnidad === 0) {
            multa = history.subTotal;
        }
        
    });

    if (reading.estado === 'NORMAL')
    {
        switch (estado) {
            case 1:
                div_alert.addClass('alert-warning');
                div_alert_monto.addClass('alert-warning');
                div_alert_monto.css('padding', '5px');
                if(multa !== 0) { div_alert_multa.addClass('alert-warning'); }
                div_alert.css('padding', '5px');
                div_alert.append('NO');
                form_transaction = formularioCancelacion(reading, monto, multa, saldo);
                break;
            case 2:
                div_alert.addClass('alert-info');
                div_alert_monto.addClass('alert-warning');
                div_alert_monto.css('padding', '5px');
                if(multa !== 0) { div_alert_multa.addClass('alert-warning');}
                if(saldo !== 0) { div_alert_saldo.addClass('alert-warning');}
                div_alert.css('padding', '5px');
                div_alert.append('EN PROCESO');
                form_transaction = formularioCancelacion(reading);
                break;
            case 3:
                div_alert.addClass('alert--light');
                div_alert.css('padding', '5px');
                div_alert.append('SI');
                div_accion_collapse.attr('disabled', 'disabled');
                break;
            case 4:
                div_alert.addClass('alert-danger');
                div_alert.css('padding', '5px');
                div_alert.append('CANCELADO');
                div_accion_collapse.attr('disabled', 'disabled');
                break;
        }
    }

    div_alert_monto.append(`Bs. ${monto.toFixed(2)}`);

    div_alert_saldo.append(`Bs. ${saldo.toFixed(2)}`);

    div_alert_multa.append(`Bs. ${multa.toFixed(2)}`);

    tr_monto_consumo.append(div_alert_monto);

    tr_saldo.append(div_alert_saldo);

    tr_multa.append(div_alert_multa);
    
    tr_pago.append(div_alert);

    tr_accion.append(div_accion_collapse);

    tr_reading.append(tr_number);
    tr_reading.append(tr_mes);
    tr_reading.append(tr_lectura);
    tr_reading.append(tr_pago);
    tr_reading.append(tr_monto_consumo);
    tr_reading.append(tr_saldo);
    tr_reading.append(tr_multa);
    tr_reading.append(tr_accion);

    var div_collapse_history = $('<div></div>');
    div_collapse_history.addClass('collapse');
    div_collapse_history.attr('id', reading.idLectura);

    var div_card_collapse = $('<div></div>');
    div_card_collapse.addClass('panel');
    div_card_collapse.addClass('panel-warning');

    var div_card_head_collapse = $('<div></div>');
    div_card_head_collapse.addClass('panel-heading');
    div_card_head_collapse.css('color', 'white');
    div_card_head_collapse.css('padding', '1rem');
    div_card_head_collapse.append('Histórico de movimientos');

    var div_card_body_collapse = $('<div></div>');
    div_card_body_collapse.addClass('panel-body');

    var div_list_group_collapse = $('<ul></ul>');
    div_list_group_collapse.addClass('list-group');

    reading.historialLectura.reverse().forEach((history, i) => {
        var div_list_group_item = $('<li></li>');
        div_list_group_item.addClass('list-group-item');
        div_list_group_item.append(`<p> ${i+1} . -    SubTotal bs. <span style="color:orange">${history.subTotal}</span>,   cancelado bs. <span style="color:orange">${history.montoCancelado} </span>.   <span style="padding: 2px;" class="alert alert-warning">${history.estadoMedicion}</span></p>`);
        div_list_group_collapse.append(div_list_group_item);
    });

    if (reading.historialLectura.length === 0) {
        var div_list_group_item = $('<li></li>');
        div_list_group_item.addClass('list-group-item');
        div_list_group_item.append(`<p> <span style="color:orange">NO EXISTEN MOVIMIENTOS.</span></p>`);
        div_list_group_collapse.append(div_list_group_item);
        div_accion_collapse.attr('disabled', 'disabled');
        div_accion_collapse.attr('title', 'NO SE PERMITEN ACCIONES');
    }

    div_card_body_collapse.append(div_list_group_collapse);

    div_card_collapse.append(div_card_head_collapse);
    div_card_collapse.append(div_card_body_collapse);

    div_collapse_history.append(div_card_collapse);

    return [tr_reading, div_collapse_history, form_transaction];
}

function formularioCancelacion(reading, monto, multa, saldo)
{
    var div_card = $('<div></div>');
    div_card.addClass('panel');
    div_card.addClass('collapse');
    div_card.addClass('panel-success');
    div_card.css('width', '350px');
    div_card.css('margin', 'auto');
    div_card.attr('id', `transaction_${reading.idLectura}`);

    var div_card_heading = $('<div></div>');
    div_card_heading.addClass('panel-heading');
    div_card_heading.append('PAGAR LECTURA');
    div_card_heading.css('color', 'white');
    div_card_heading.css('padding', '1rem');

    var div_card_body = $('<div></div>');
    div_card_body.addClass('panel-body');

    var form_card = $('<form></form>');
    form_card.addClass('transaction_form_sale');    
    form_card.attr('id', `transaction_form_${reading.idLectura}`);

    var div_form_group = $('<div></div>');
    div_form_group.addClass('form-group');

    var div_moneda_form_group = $('<div></div>');
    div_moneda_form_group.addClass('form-group');

    var div_tipo_form_group = $('<div></div>');
    div_tipo_form_group.addClass('form-group');
    
    var label_monto_form_group = $('<p></p>');
    var label_saldo_form_group = $('<p></p>');
    var label_multa_form_group = $('<p></p>');
    var label_form_group = $('<label></label>');

    var br = $('<br/>');

    var span_monto_form_group = $('<span></span>');
    span_monto_form_group.css('color', 'orange');
    span_monto_form_group.append(monto);

    var span_saldo_form_group = $('<span></span>');
    span_saldo_form_group.css('color', 'red');
    span_saldo_form_group.append(saldo);

    var span_multa_form_group = $('<span></span>');
    span_multa_form_group.css('color', 'yellow');
    span_multa_form_group.append(multa);

    label_monto_form_group.append('Precio de lectura Bs. ');
    label_monto_form_group.append(span_monto_form_group);
    label_saldo_form_group.append('Saldo Bs. ');
    label_saldo_form_group.append(span_saldo_form_group);
    label_multa_form_group.append('Multa Bs. ');
    label_multa_form_group.append(span_multa_form_group);
    label_form_group.append('Monto a cancelar');

    var input_cancelacion = $('<input/>')
    input_cancelacion.addClass('form-control');
    input_cancelacion.attr('type', 'number');
    input_cancelacion.attr('placeholder', 'Monto a cancelar');
    input_cancelacion.attr('id', `input-sale-${reading.idLectura}`);
    input_cancelacion.attr('name', 'precio');
    input_cancelacion.attr('value', saldo);
    input_cancelacion.attr('required', true);
    input_cancelacion.css('border', '1px solid cornsilk');
    input_cancelacion.css('border-radius', '2rem');
    input_cancelacion.css('padding', '2rem');

    var select_cancelacion = $('<select></select>');
    select_cancelacion.addClass('form-control');
    select_cancelacion.attr('id', `input-moneda-${reading.idLectura}`);
    select_cancelacion.attr('name', 'moneda');
    select_cancelacion.attr('required', true);
    select_cancelacion.css('border', '1px solid cornsilk');
    select_cancelacion.css('border-radius', '2rem');
    select_cancelacion.css('padding-left', '2rem');

    var option_bol_cancelacion = $('<option></option>');
    option_bol_cancelacion.attr('value', 'BOLIVIANOS');
    option_bol_cancelacion.append('BOLIVIANOS');
    var option_dola_cancelacion = $('<option></option>');
    option_dola_cancelacion.attr('value', 'DOLARES');
    option_dola_cancelacion.append('DOLARES');
    var option_eur_cancelacion = $('<option></option>');
    option_eur_cancelacion.attr('value', 'EUROS');
    option_eur_cancelacion.append('EUROS');

    select_cancelacion.append(option_bol_cancelacion);
    select_cancelacion.append(option_dola_cancelacion);
    select_cancelacion.append(option_eur_cancelacion);

    var select_tipo_cancelacion = $('<select></select>');
    select_tipo_cancelacion.addClass('form-control');
    select_tipo_cancelacion.attr('id', `input-tipo-${reading.idLectura}`);
    select_tipo_cancelacion.attr('name', 'tipo');
    select_tipo_cancelacion.attr('required', true);
    select_tipo_cancelacion.css('border', '1px solid cornsilk');
    select_tipo_cancelacion.css('border-radius', '2rem');
    select_tipo_cancelacion.css('padding-left', '2rem');

    var option_efec_cancelacion_tipo = $('<option></option>');
    option_efec_cancelacion_tipo.attr('value', 'EFECTIVO');
    option_efec_cancelacion_tipo.append('EFECTIVO');
    var option_depo_cancelacion_tipo = $('<option></option>');
    option_depo_cancelacion_tipo.attr('value', 'DEPOSITO');
    option_depo_cancelacion_tipo.append('DEPOSITO');
    var option_chequ_cancelacion_tipo = $('<option></option>');
    option_chequ_cancelacion_tipo.attr('value', 'CHEQUE');
    option_chequ_cancelacion_tipo.append('CHEQUE');
    var option_web_cancelacion_tipo = $('<option></option>');
    option_web_cancelacion_tipo.attr('value', 'WEB');
    option_web_cancelacion_tipo.append('WEB');

    select_tipo_cancelacion.append(option_efec_cancelacion_tipo);
    select_tipo_cancelacion.append(option_depo_cancelacion_tipo);
    select_tipo_cancelacion.append(option_chequ_cancelacion_tipo);
    select_tipo_cancelacion.append(option_web_cancelacion_tipo);

    var buton_submit_sale = $('<button></button>');
    buton_submit_sale.addClass('btn');
    buton_submit_sale.addClass('btn-success');
    buton_submit_sale.attr('type', 'submit');
    buton_submit_sale.append('PAGAR');

    div_form_group.append(label_monto_form_group);
    div_form_group.append(br);
    div_form_group.append(label_saldo_form_group);
    div_form_group.append(br);
    div_form_group.append(label_multa_form_group);
    div_form_group.append(br);
    div_form_group.append(label_form_group);
    div_form_group.append(input_cancelacion);

    div_moneda_form_group.append(`<labe>Moneda</labe>`);
    div_moneda_form_group.append(select_cancelacion);

    div_tipo_form_group.append(`<label>Tipo de cancelación</label>`);
    div_tipo_form_group.append(select_tipo_cancelacion);

    form_card.append(div_form_group);
    form_card.append(div_moneda_form_group);
    form_card.append(div_tipo_form_group);
    form_card.append(buton_submit_sale);

    div_card_body.append(form_card);

    div_card.append(div_card_heading);
    div_card.append(div_card_body);

    return div_card;
}

function submitSavingSale(){
    $('.transaction_form_sale').submit((e) => {
        e.preventDefault();
        var id = $('.transaction_form_sale').attr('id').split('transaction_form_')[1];
        var objSale = {
            "key": id,
            "monto": $('#input-sale-' + id).val(),
            "moneda": $('#input-moneda-' + id).val(),
            "tipo": $('#input-tipo-' + id).val(),
        };

    });
}

const AddZeroDate = (val) => {
    if (val < 10)
        return val = '0' + val;
    return val
}

const GetDate = (format, fechaEspecifica, diaMes, hr, mMenor, mesAnho) => {
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var f = (fechaEspecifica === undefined || fechaEspecifica === null) ? new Date() : new Date(fechaEspecifica);
    var ano = f.getFullYear();
    var mes = (mMenor === undefined || mMenor === null) ? f.getMonth() + 1 : f.getMonth();
    var dia = f.getDate();
    var day = f.getDay();
    var hora = AddZeroDate(f.getHours());
    var minuto = AddZeroDate(f.getMinutes());
    var segundo = AddZeroDate(f.getSeconds());
    var diaC = AddZeroDate(dia);
    var mesC = AddZeroDate(mes);

    format = (format === undefined || format === null) ? '/' : format;

    if (fechaEspecifica === undefined || fechaEspecifica === null) {
        if (diaMes === undefined || diaMes === null) {
            if (hr === undefined || hr === null) {
                return diaC + format + mesC + format + ano;
            } else {
                return hora + ':' + minuto + ':' + segundo + '  ' + diaC + format + mesC + format + ano;
            }
        } else {
            if (hr === undefined || hr === null) {
                return (mesAnho === true) ? meses[mes] + ' de ' + ano : diasSemana[day] + ', ' + diaC + ' de ' + meses[mes] + ' de ' + ano;
            } else {
                return (mesAnho === true) ?  hora + ':' + minuto + ':' + segundo + ' , ' + meses[mes] + ' de ' + ano : hora + ':' + minuto + ':' + segundo + ' , ' + diasSemana[day] + ', ' + diaC + ' de ' + meses[mes] + ' de ' + ano;
            }
        }
    } else {
        if (diaMes === undefined || diaMes === null) {
            if (hr === undefined || hr === null) {
                return diaC + format + mesC + format + ano;
            } else {
                return hora + ':' + minuto + ':' + segundo + '  ' + diaC + format + mesC + format + ano;
            }
        } else {
            if (hr === undefined || hr === null) {
                return (mesAnho === true) ? meses[mes] + ' de ' + ano : diasSemana[day] + ', ' + diaC + ' de ' + meses[mes] + ' de ' + ano;
            } else {
                return (mesAnho === true) ?  hora + ':' + minuto + ':' + segundo + ' , ' + meses[mes] + ' de ' + ano : hora + ':' + minuto + ':' + segundo + ' , ' + diasSemana[day] + ', ' + diaC + ' de ' + meses[mes] + ' de ' + ano;
            }
        }
    }

}