let listaSocios = [];
$('#mensaje_data').html('Cargando datos');
var intervalLoading = setInterval(() => {
    $('#mensaje_data').append('.');
}, 500);
$(document).ready(() => {
    formularioCobroFacturacion();
    getCobroFacturacion();
    listenSearch();    
});

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

function formularioCobroFacturacion(){
    $('#formularioCobroFacturacion').submit( (e) => {
        e.preventDefault();
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


function getCobroFacturacion() {
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
                    "icoType": socio.ico,
                    "fullName": socio.persona.fullName,
                    "shortName": socio.persona.shortName,
                    "ci": socio.persona.ci,
                    "medidor": {
                        "numero": medidor.numero,
                        "orden": medidor.orden,
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
    a_contacts_img.attr('title', `[ ${socio.medidor.orden} ] ${socio.fullName} [ ${socio.medidor.numero} ]`)
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
    strong_name.append(`[ ${socio.medidor.orden} ]`);
    div_contacts_info.append(strong_name);
    div_contacts_info.append(socio.shortName);
    var br = $('<br/>');


    var Cbutton = $('<button></button');
    Cbutton.addClass('contacts__btn');
    Cbutton.addClass('btn');
    Cbutton.addClass('btn--icon-text');
    Cbutton.addClass('btn--light');
    Cbutton.attr('data-modal','show');
    var i_zmdi_thumb_up = $('<i></i>');
    i_zmdi_thumb_up.addClass('zmdi');
    i_zmdi_thumb_up.addClass('zmdi-thumb-up');
    div_contacts.append(i_zmdi_thumb_up);


    var div_input_group = $('<div></div>');
    div_input_group.addClass('input-group');
    var div_form_group_input_disabled_first = $('<div></div>');
    div_form_group_input_disabled_first.addClass('form-group')
    var span_input_group_addon = $('<div></div>');
    span_input_group_addon.addClass('input-group-addon');
    var div_form_group_input_disabled_i = $('<div></div>');
    var i_form_group_bar = $('<i></i>');
    i_form_group_bar.addClass('form-group__bar');
    div_form_group_input_disabled_i.append(i_form_group_bar);
    div_form_group_input_disabled_first.append(span_input_group_addon);
    div_form_group_input_disabled_first.append(div_form_group_input_disabled_i);
    var span_input_group_addon_second = $('<span></span>');
    span_input_group_addon_second.addClass('input-group-addon')
    var div_form_group_input_third = $('<div></div>');
    div_form_group_input_third.addClass('form-group');
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