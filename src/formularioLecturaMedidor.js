let listaSocios = [];
$('#mensaje_data').html('Cargando datos');
var intervalLoading = setInterval(() => {
    $('#mensaje_data').append('.');
}, 500);
$(document).ready(() => {
    procesarLecturaMedidor();
    getLectura();
    listenSearch();
    closeModal();
});

function closeModal() {
    $('#modal-full-close').click(() => {
        $('#modal-full-set').css('width', '0%');
    });
}

function listenKeyLectura() {
    $('.control-keyup-lectura').keydown((e) => {
        if(
            parseInt(e.target.value) > parseInt($(`#${e.target.id}`).attr('data-medida'))
        ) {
            $(`#${e.target.id}`).val(parseInt(e.target.value));
        } else {
            $(`#${e.target.id}`).val(parseInt($(`#${e.target.id}`).attr('data-medida')));
        }
    });
    $('.control-keyup-lectura').keyup((e) => {
        $(`#${e.target.id}`).val(parseInt(e.target.value));
    });
}

function listenSearch() {
    $('#busqueda-socio').keyup((e) => {
        listaSocios.forEach(s => {
            s.medidores.forEach((medidor) => {
                if (
                    s.persona.fullName.toLowerCase().includes(e.target.value.toLowerCase()) ||
                    s.persona.ci.toLowerCase().includes(e.target.value.toLowerCase()) ||
                    medidor.numero.toLowerCase().includes(e.target.value.toLowerCase()) ||
                    medidor.orden.toLowerCase().includes(e.target.value.toLowerCase())
                )
                    $('#' + medidor.numero).css('display', 'block');
                else    
                    $('#' + medidor.numero).css('display', 'none');
            });            
        });
    });
}

function procesarLecturaMedidor(){
    $('#formularioLecturaMedidor').submit( (e) => {
        var error = false;
        e.preventDefault();
        $('#modal-full-set-content').html(null);
        let formularioLecturaMedidor = $('#formularioLecturaMedidor').serialize();
        let objAdmin = serializeToObject(formularioLecturaMedidor);
        let objToSending = {};
        let dateTransaction = new Date();
        Object.keys(objAdmin).forEach( key_m => {
            objToSending = {
                ...objToSending,
                [`medidor_${$('#' + key_m).attr('data-numero')}`]: {
                    "UID": $('#' + key_m).attr('data-uid'),
                    "key": $('#' + key_m).attr('data-key'),
                    "key_lectura": $('#' + key_m).attr('data-key-l'),
                    "orden": $('#' + key_m).attr('data-orden'),
                    "numero": $('#' + key_m).attr('data-numero'),
                    "medida": $('#' + key_m).val(),
                    "medida_prev": $('#' + key_m).attr('data-medida'),
                    "estado_medicion": $('#' + key_m).attr('data-state-m'),
                    "fecha_lectura_anterior": $('#' + key_m).attr('data-date-m'),
                    "estado_medidor": $('#' + key_m).attr('data-state'),
                    "fecha_lectura_registro": `${dateTransaction.getMonth() + 1}/${dateTransaction.getDate()}/${dateTransaction.getFullYear()}`,
                }
            }
            if (parseInt($('#' + key_m).val()) < parseInt($('#' + key_m).attr('data-medida'))) {
                $('#modal-full-set-content').append(`
                    <a href="#">${$('#' + key_m).attr('data-name')}. Nº ${key_m.split('_')[1]}</a>
                `);
                error = true;
            }
        });
        if (error) {
            $('#modal-full-set-content').append(`
                <a href="#" style="color:orange">Medidor(es) con lecturas erronea(s)</a>
            `);
            $('#modal-full-set').css('width', '100%');
        } else {
            registeredReadings(objToSending);
            
        }        
    });
}

async function registeredReadings(objToSending)
{
    try {
        const responseReadings = await submitCurrentReadings(objToSending);
        console.log(responseReadings);
    } catch (error) {
        console.log(error);
    }
}

async function submitCurrentReadings (readings)
{
    return await $.ajax({
        url: ENDPOINT + 'reading',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localData.token
        },
        data: JSON.stringify(readings),
    });
}
// este emtodo convierte de serialize a objetos
function serializeToObject (val) {
    var valores = val.split("&");
    let obj = {}
    valores.forEach(valor => {
        obj = {
            ...obj, // una funcion de edtascript6 para conbinar objetos
            [valor.split("=")[0]]: valor.split("=")[1], // partiendo el valor de foreach en clave valor separado por 2 puntos 
        }
    });
    return obj;
}


function getLectura() {
    //errores al invocar endpoint [endpoint invalido => y autorizacion del portador [token]] 
    $.ajax({
        url: ENDPOINT + 'reading',
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
            console.log(e);
            $('#modal-text').html('<h3 style="color:red">Error al conectar con el servidor</h3>');
        }
    });
}

function setCardReadings() {
    var div_cards_readings = $('#cards-socios-reading');
    div_cards_readings.html(null);
    $('#mensaje_data').html('Renderizando');
    intervalLoading = setInterval(() => {
        $('#mensaje_data').append('.');
    }, 1000);    
    setTimeout(() => {
        listaSocios.forEach((socio) => {
            socio.medidores.forEach((medidor) => {
                var card_socio = renderToReadings({
                    "UID": socio.user,
                    "icoType": socio.ico,
                    "fullName": socio.persona.fullName,
                    "shortName": socio.persona.shortName,
                    "ci": socio.persona.ci,
                    "medidor": {
                        "direccion": medidor.direccion,
                        "numero": medidor.numero,
                        "orden": medidor.orden,
                        "medida": medidor.lectura.medida,
                        "lectura_key": medidor.lectura.key_lectura,
                        "estado_medidor": medidor.estado,
                        "estado_medicion": medidor.lectura.estado,
                        "fecha_medicion": medidor.lectura.fechaMedicion,
                    }
                });
                div_cards_readings.append(card_socio);
            });
        });
        $('#mensaje_data').html('Listo.');
        clearInterval(intervalLoading);
        setTimeout(() => {
            $('#mensaje_data').html(null);
            listenKeyLectura();
        }, 1000);
    }, 3000);
}

function renderToReadings(socio) {
    var div_col_2_4 = $('<div></div>');
    div_col_2_4.addClass('col-md-2');
    div_col_2_4.addClass('col-sm-4');
    div_col_2_4.attr('id', socio.medidor.numero);
    var div_contacts = $('<div></div>');
    div_contacts.addClass('contacts__item');
    var a_contacts_img = $('<a></a>');
    a_contacts_img.attr('title', `${socio.fullName} [ ${socio.medidor.numero} ]`)
    a_contacts_img.addClass('contacts__img');
    var img_ico = $('<img/>');
    switch (socio.icoType) 
    {
        case 'Varon_1': img_ico.attr('src', '../../assets/img/usuarios/v3.png'); break;
        case 'Varon_2': img_ico.attr('src', '../../assets/img/usuarios/v5.png'); break;
        case 'Mujer_1': img_ico.attr('src', '../../assets/img/usuarios/m2.png'); break;
        case 'Mujer_2': img_ico.attr('src', '../../assets/img/usuarios/m5.png'); break;
    }
    img_ico.attr('alt', socio.fullName);
    a_contacts_img.append(img_ico);
    var div_contacts_info = $('<div></div>');
    div_contacts_info.addClass('contacts__info')
    var strong_name = $('<strong></strong>');
    strong_name.append(socio.shortName);
    div_contacts_info.append(strong_name);
    div_contacts_info.append(`[ ${socio.medidor.orden} ] ( ${socio.medidor.numero} )`);
    var br = $('<br/>');
    var div_input_group = $('<div></div>');
    div_input_group.addClass('input-group');
    var div_form_group_input_disabled_first = $('<div></div>');
    div_form_group_input_disabled_first.addClass('form-group')
    var span_input_group_addon = $('<div></div>');
    span_input_group_addon.addClass('input-group-addon');
    var div_form_group_input_disabled_i = $('<div></div>');
    var input_disabled_prev = $('<input/>');
    input_disabled_prev.addClass('form-control');
    input_disabled_prev.addClass('text-center');
    input_disabled_prev.attr('type', 'text');
    input_disabled_prev.attr('placeholder', socio.medidor.medida);
    input_disabled_prev.attr('disabled', true);
    var i_form_group_bar = $('<i></i>');
    i_form_group_bar.addClass('form-group__bar');
    div_form_group_input_disabled_i.append(input_disabled_prev);
    div_form_group_input_disabled_i.append(i_form_group_bar);
    div_form_group_input_disabled_first.append(span_input_group_addon);
    div_form_group_input_disabled_first.append(div_form_group_input_disabled_i);
    var span_input_group_addon_second = $('<span></span>');
    span_input_group_addon_second.addClass('input-group-addon')
    var i_zmdi_input_svideo = $('<i></i>');
    i_zmdi_input_svideo.addClass('zmdi');
    i_zmdi_input_svideo.addClass('zmdi-input-svideo');
    span_input_group_addon_second.append(i_zmdi_input_svideo);
    var div_form_group_input_third = $('<div></div>');
    div_form_group_input_third.addClass('form-group');
    var input_lectura_current = $('<input/>');
    input_lectura_current.addClass('form-control');
    input_lectura_current.addClass('text-center');
    input_lectura_current.addClass('control-keyup-lectura');
    input_lectura_current.attr('type', 'number');
    input_lectura_current.attr('placeholder', 'Lectura');
    input_lectura_current.attr('name', 'lectura_' + socio.medidor.numero);
    input_lectura_current.attr('id', 'lectura_' + socio.medidor.numero);
    input_lectura_current.attr('data-uid', socio.UID);
    input_lectura_current.attr('data-key', socio.ci);
    input_lectura_current.attr('data-name', socio.shortName);
    input_lectura_current.attr('data-key-l', socio.medidor.lectura_key);
    input_lectura_current.attr('data-orden', socio.medidor.orden);
    input_lectura_current.attr('data-numero', socio.medidor.numero);
    input_lectura_current.attr('data-state-m', socio.medidor.estado_medicion);
    input_lectura_current.attr('data-date-m', socio.medidor.fecha_medicion);
    input_lectura_current.attr('data-state', socio.medidor.estado_medidor);
    input_lectura_current.attr('data-medida', socio.medidor.medida);
    input_lectura_current.attr('required', true);
    input_lectura_current.attr('value', parseInt(socio.medidor.medida) + 50); // valor por defecto para evitar el required
    div_form_group_input_third.append(input_lectura_current);
    div_form_group_input_third.append(i_form_group_bar);
    div_input_group.append(div_form_group_input_disabled_first);
    div_input_group.append(span_input_group_addon_second);
    div_input_group.append(div_form_group_input_third);
    div_contacts.append(a_contacts_img);
    div_contacts.append(div_contacts_info);
    div_contacts.append(br);
    div_contacts.append(div_input_group);
    div_contacts.append(br);
    div_col_2_4.append(div_contacts);
    return div_col_2_4;
}