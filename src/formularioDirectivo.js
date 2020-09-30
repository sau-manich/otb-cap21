

const datosContactos = [
    {
        "img": "../../assets/img/usuarios/man.png",
        "nombre": "Fulano Villa Jacobs",
        "rol": "Directiva",
        "telefono": "60866165"
    },
    {
        "img": "../../assets/img/usuarios/boy-1.png",
        "nombre": "Fulano Villa Jacobs",
        "rol": "Directiva",
        "telefono": "798522165"
    },
    {
        "img": "../../assets/img/usuarios/girl-7.png",
        "nombre": "Fulano Villa Jacobs",
        "rol": "Directiva",
        "telefono": "61116165"
    },
     {
         "img": "../../assets/img/usuarios/boy-1.png",
        "nombre": "Fulano Villa Jacobs",
         "rol": "Directiva",
         "telefono": "798522165"
     },
];


const datosMensajeNotificacions = [
    {
        "img": "../../assets/img/usuarios/boy-3.png",
        "title": "Mensaje CAP-21",
        "nombre": "Fulano Villa Jacobs"
    },
    {
        "img": "../../assets/img/usuarios/boy-4.png",
        "title": "Mensaje CAP-21",
        "nombre": "Fulano Villa Jacobs"
    },
    {
        "img": "../../assets/img/usuarios/girl.png",
        "title": "Mensaje CAP-21",
        "nombre": "Fulano Villa Jacobs"
    },
];


const datosMensajeModals = [
    {
        "title": " Mensaje CAP-21",
        "sub_title": "Enviado desde la central - 11 Julio 2015 at 09:10 AM",
        "anuncio": "Aviso sobre el pago de la canasta familiar"
    },
    {
        "title": " Mensaje CAP-21",
        "sub_title": "Enviado desde la central - 01 Abril 2016 at 19:28 PM",
        "anuncio": "Aviso sobre el pago de la canasta familiar"
    },
    {
        "title": " Mensaje CAP-21",
        "sub_title": "Enviado desde la central - 21 Enero 2020 at 11:00 AM",
        "anuncio": "Aviso sobre el pago de la canasta familiar"
    },
];



const datosAvisoss = [
    {
        "title": " Mensaje CAP-21",
        "sub_title": "Enviado por el administrador el 08 Enero 2020 a horas 09:10 AM",
        "anuncio": "Estimados Socios de la OTB Villa 21 de Septiembre, se les comunica que el día Domingo 05 Abril 2019 se realizara el cobro de agua a partir de 08:00am a 11:00am, recordarles que pasando la hora no se llevará a cabo ni una atención, se les ruega puntualidad y compromiso, saludos"
    },
];



const datosMontos = [
    {
        "consumo": "Bs.- 17",
        "multa": "Bs. 30.00",
        "mes": "FEBRERO - 2020 ",
        "anuncio": "Señor socio, acaba de salir su recibo del mes correspondiente, recuerda que llegando al 3º mes de no pagar, el sistema le sumara un monto de Bs.- 30.00 extra a su cuenta. Le rogamos compromiso con el pago de sus cuotas.",
        "lectura": "Lectura medidor: 864"
    },
];


const datosRecivos = [
    {
        "consumo": "Bs.- 17",
        "multa": "Bs. 0.00",
        "mes": "ABRIL - 2020 ",
        "anuncio": "El pago del consumo de agua con Número de Recibo: <code>00034481</code> fue realizado exitosamente. Gracias por su compromiso.",
        "lectura": "Lectura medidor: 864",
        "pagado": true
    },
    {
        "consumo": "Bs.- 10",
        "multa": "Bs. 0.00",
        "mes": "MARZO - 2020 ",
        "anuncio": "El pago del consumo de agua con Número de Recibo: <code>00034481</code> fue realizado exitosamente. Gracias por su compromiso.",
        "lectura": "Lectura medidor: 844",
        "pagado": true
    },
    {
        "consumo": "Bs.- 17",
        "multa": "Bs. 30.00",
        "mes": "FEBRERO - 2020 ",
        "anuncio": "El pago del consumo de agua con Número de Recibo: <code>00034481</code> fue realizado exitosamente. Gracias por su compromiso.",
        "lectura": "Lectura medidor: 824",
        "pagado": true
    },
    {
        "consumo": "Bs.- 12",
        "multa": "Bs. 0.00",
        "mes": "ENERO - 2020 ",
        "anuncio": "El pago del consumo de agua con Número de Recibo: <code>00034481</code> fue realizado exitosamente. Gracias por su compromiso.",
        "lectura": "Lectura medidor: 814",
        "pagado": false
    },
];





const datosCompraAccions = [
    {
        "cambio": "$597",
        "efectivo": "Bs. 4000.00",
        "title": "COMPRA DE ACCIÓN",
        "mensaje": "La compra de acción fue realizada correctamente, su compra será almacenada en nuestra base de datospara protección del recibo físico que se le fue entregado.",
        "fecha": "01 Abril 2012",
        "pagado": true
    },
    {
        "cambio": "$597",
        "efectivo": "Bs. 2000.00",
        "title": "COMPRA DE ACCIÓN",
        "mensaje": "La compra de acción fue realizada correctamente, su compra será almacenada en nuestra base de datospara protección del recibo físico que se le fue entregado.",
        "fecha": "01 Abril 2012",
        "pagado": true
    },
];


const datosCambioNombres = [
    {
        "cambio": "$75",
        "efectivo": "Bs. 500.00",
        "title": "CAMBIO DE NOMBRE",
        "mensaje": "El cambio de nombre fue efectuado correctamente, su cambio de nombre será almacenada en nuestra base de datospara protección del recibo físico que se le fue entregado.",
        "fecha": "08 Diciembre 2015",
        "pagado": true
    },
    {
        "cambio": "$75",
        "efectivo": "Bs. 200.00",
        "title": "CAMBIO DE NOMBRE",
        "mensaje": "El cambio de nombre fue efectuado correctamente, su cambio de nombre será almacenada en nuestra base de datospara protección del recibo físico que se le fue entregado.",
        "fecha": "08 Diciembre 2015",
        "pagado": false
    },
];



const datosAportePozos = [
    {
        "cambio": "$14",
        "efectivo": "Bs. 200.00",
        "title": "APORTE POZO",
        "mensaje": "El pago de su aporte para el nuevo pozo fue realizado correctamente, dse le agradece de parte de la OTB 21 de Septiembre",
        "fecha": "15 Diciembre 2019",
        "pagado": true
    },
    {
        "cambio": "$14",
        "efectivo": "Bs. 100.00",
        "title": "APORTE POZO",
        "mensaje": "El pago de su aporte para el nuevo pozo fue realizado correctamente, dse le agradece de parte de la OTB 21 de Septiembre",
        "fecha": "15 Diciembre 2019",
        "pagado": false
    },
];


$(document).ready(() => {
    // procesarAviso();
    datosAvisos(datosAvisoss);
    datosMonto(datosMontos);
    // datosAsamblea(datosAsambleas);
    datosRecivo(datosRecivos);
    // datosPerfil(datosPerfils);
    datosCompraAccion(datosCompraAccions);
    datosCambioNombre(datosCambioNombres);
    datosAportePozo(datosAportePozos);
    datosContacto(datosContactos);
    datosMensajeNotificacion(datosMensajeNotificacions);
    datosMensajeModal(datosMensajeModals);
});


// const array1 = ['a', [], {}, 4];

// array1.forEach( (elementito, i) => {
//     console.log(elementito);
// });


// {
//     "img": "../../assets/img/usuarios/man.png",
//     "nombre": "Fulano Villa Jacobs",
//     "rol": "Directiva",
//     "telefono": "60866165"
// },


function datosContacto(data){
    var panelContacto = $('#contacto');
    data.forEach(contacto => { 
        var list_group = $('<div></div>');
        var a = $('<a></a>');
        var pull = $('<div></div>');
        var img = $('<img>');
        var a = $('<a></a>');
        var media_body = $('<div></div>');
        var list_group__heading = $('<div></div>');
        var small = $('<small></small>');
        
        small.addClass('list-group__text',contacto.telefono);
        list_group__heading.addClass('list-group__heading',contacto.nombre);
        media_body.addClass('media-body');
        img.attr('alt','Icono_Contacto');
        img.css('src', contacto.img);
        img.addClass('avatar-img');
        pull.addClass('pull-left');
        a.addClass('media');
        a.addClass('list-group-item');
        list_group.addClass('list-group');
        
        list_group.append(a);
        list_group.append(pull);
        list_group.append(img);
        list_group.append(a);
        list_group.append(media_body);
        list_group.append(list_group__heading);
        list_group.append(small);
        panelContacto.append(list_group);
        console.log(contacto);
        // $('#contacto').append(panelContacto);
    });
}


function datosMensajeNotificacion(data){
    var panelMensajeNotificacion = $('#mensajeNotificacion');
    data.forEach(dataMensajeNotificacion => { 
        var list_group = $('<div></div>');
        var a = $('<a></a>');
        var pull = $('<div></div>');
        var img = $('<img>');
        var a = $('<a></a>');
        var media_body = $('<div></div>');
        var list_group__heading = $('<div></div>');
        var small = $('<small></small>');
        
        small.addClass('list-group__text');
        list_group__heading.addClass('list-group__heading');
        media_body.addClass('media-body');
        img.attr('alt','Icono_Contacto');
        img.css('src','../../assets/img/usuarios/man.png');
        img.addClass('avatar-img');
        pull.addClass('pull-right');
        a.attr('href','#modal--large');
        a.attr('data-toggle','modal');
        a.addClass('media');
        a.addClass('list-group-item');
        list_group.addClass('list-group');

        list_group.append(a);
        list_group.append(pull);
        list_group.append(img);
        list_group.append(a);
        list_group.append(media_body);
        list_group.append(list_group__heading);
        list_group.append(small);
        panelMensajeNotificacion.append(list_group);

        console.log(dataMensajeNotificacion);
        // $('#mensajeNotificacion').append(panelMensajeNotificacion);
    
    });
}



// Es del modal Large no del modal Small
function datosMensajeModal(data){
    var panelMensajeModal = $('#mensajeModal');
    data.forEach(dataMensajeModal => { 
        var modal = $('<div></div>');
        var card = $('<div></div>');
        var card__header = $('<div></div>');
        var card__header2 = $('<div></div>');
        var h2 = $('<h2></h2>');
        var small = $('<small></small>');
        var cardB = $('<div></div>');
        var p = $('<p></p>');
        var button = $('<button></button>');
        var i = $('<i></i>');

        i.addClass('zmdi-close');
        i.addClass('zmdi');
        button.attr('data-dismiss','modal');
        button.addClass('btn--icon');
        button.addClass('btn-info');
        button.addClass('btn');
        button.attr('align','center');
        cardB.addClass('card__body');
        card__header2.addClass('text-center');
        card__header2.addClass('card__header');
        card__header.css('height','250px');
        card__header.css('background-image','url(../../assets/img/anim.png)');
        card__header.addClass('card__header--img');
        card__header.addClass('card__header');
        card.css('background-color','#22313A');
        card.addClass('card');
        modal.addClass('modal-lg');
        modal.addClass('modal-dialog');

        modal.append(card);
        modal.append(card__header);
        modal.append(card__header2);
        modal.append(h2);
        modal.append(small);
        modal.append(cardB);
        modal.append(p);
        modal.append(button);
        modal.append(i);
        panelMensajeModal.append(modal);

        console.log(dataMensajeModal);
        // $('#mensajeModal').append(panelMensajeModal);
    
    });
}
 // foreach con javaeach 



function datosAvisos(data){
    var panelAviso = $('#mensajePreview');
    data.forEach(dataAvisos => { 
        var col1 = $('<div></div>');
        var card = $('<div></div>');
        var cardImg = $('<div></div>');
        var cardA = $('<div></div>');
        var small = $('<small></small>');
        var cardB = $('<div></div>');
        var p = $('<p></p>');
        var aH = $('<a></a>');
        var i = $('<i></i>');

        i.addClass('zmdi-check');
        i.addClass('zmdi');
        aH.addClass('text-center');  
        aH.addClass('view-more');
        aH.attr('href','#');
        p.attr('alegn','center')
        cardB.addClass('card__body');
        cardA.addClass('alert');
        cardA.addClass('alert-success');
        cardA.addClass('align','center');
        cardImg.addClass('card__header');
        cardImg.addClass('card__header--img');
        cardImg.css('background-image','url(../../assets/img/5.png)');//
        cardImg.css('height','270px');
        card.addClass('card');
        col1.addClass('col-sm-4');

        col1.append(card);
        col1.append(cardImg);
        col1.append(cardA);
        col1.append(small);
        col1.append(cardB);
        col1.append(p);
        col1.append(aH);
        col1.append(i);
        panelAviso.append(col1);

        console.log(dataAvisos);
        $('#mensajePreview').append(panelAviso);
    
    });
}


function datosMonto(data){
    var panelMonto = $('#montoActual');
    data.forEach(dataMonto => { 
        var col2 = $('<div></div>');
        var pricing_table__item = $('<div></div>');
        var pricing_table__header = $('<div></div>');
        var h2 = $('<h2></h2>');
        var small = $('<small></small>');
        var cardA = $('<div></div>');
        var pricing_table__body = $('<div></div>');
        var pricing_table__list = $('<div></div>');
        var a = $('<a></a>');
        var i = $('<i></i>');

        i.addClass('zmdi-brushd');
        i.addClass('zmdi');
        a.addClass('text-center');
        a.addClass('view-more');
        pricing_table__list.addClass('pricing-table__list');
        pricing_table__body.addClass('pricing-table__body');
        cardA.addClass('alert-warning');
        cardA.addClass('alert');
        pricing_table__header.addClass('pricing-table__header');
        pricing_table__item.addClass('pricing-table__item');
        col2.addClass('col-sm-4');

        col2.append(pricing_table__item);
        col2.append(pricing_table__header);
        col2.append(h2);
        col2.append(small);
        col2.append(cardA);
        col2.append(pricing_table__body);
        col2.append(pricing_table__list);
        col2.append(a);
        col2.append(i);
        panelMonto.append(col2);


        console.log(dataMonto);
        $('#montoActual').append(panelMonto);
    
    });
}



// function datosAsamblea(data){
//     var panelAsamblea = $('#montoAsamblea');
//     data.forEach(dataAsamblea => { 
//         var col3 = $('<div></div>');
//         var card = $('<div></div>');
//         var card__header = $('<div></div>');
//         var h2 = $('<h2></h2>');
//         var actions = $('<div></div>');
//         var dropdown = $('<div></div>');
//         var a = $('<a></a>');
//         var i = $('<i></i>');
//         var ul = $('<ul></ul>');
//         var li = $('<li></li>');
//         var a_li = $('<a></a>');
//         var widget_rating__star = $('<div></div>');
//         var i_w = $('<i></i>');
//         var list_group = $('<div></div>');
//         var list = $('<div></div>');
//         var pull = $('<div></div>');
//         var pull2 = $('<div></div>');
//         var media = $('<div></div>');
//         var progress = $('<div></div>');
//         var progress_bar = $('<div></div>');

        

//         progress_bar.css('width','100px');
//         progress_bar.addClass('progress-bar');
//         progress.addClass('progress');
//         media.addClass('media-body');
//         pull2.addClass('pull-right');
//         pull.addClass('pull-left');
//         list.addClass('media');
//         list.addClass('list-group-item');
//         list_group.addClass('list-group');
//         i_w.addClass('active');
//         i_w.addClass('zmdi-home');
//         i_w.addClass('zmdi');
//         widget_rating__star.addClass('widget-rating__star');
//         a_li.attr('align','center'); 
//         a_li.attr('href','#');
//         ul.addClass('pull-right'); 
//         ul.addClass('dropdown-menu');
//         i.addClass('zmdi-more-vert');
//         i.addClass('zmdi');
//         a.attr('data-toggle','dropdown'); 
//         a.attr('href','#');
//         dropdown.addClass('dropdown');
//         actions.addClass('actions');
//         card__header.addClass('text-center');
//         card__header.addClass('card__header');
//         card.addClass('widget-rating');
//         card.addClass('card');
//         col3.addClass('col-sm-4');
//         console.log(dataAsamblea);
//         $('#montoAsamblea').append(panelAsamblea);
    
//     });
// }


// const datosAsamblea = [
//     {
//         "title": "Asambleas del Año",
//         // Preguntar al chango de changos
//     },
// ];



function datosRecivo(data){
    var panelRecivo = $('#recivos');
    data.forEach(dataRecivo => { 
        var col = $('<div></div>');
        var pricing_table__item = $('<div></div>');
        var pricing_table__header = $('<div></div>');
        var h2 = $('<h2></h2>');
        var small = $('<small></small>');
        var alert = $('<div></div>');
        var pricing_table__body = $('<div></div>');
        var pricing_table__list = $('<div></div>');
        var a = $('<a></a>');
        var i = $('<i></i>');

        i.addClass('zmdi-thumb-up');
        i.addClass('zmdi');
        a.addClass('text-center');
        a.addClass('view-more');
        pricing_table__list.addClass('pricing-table__list');
        pricing_table__body.addClass('pricing-table__body');
        alert.addClass('alert-success');
        alert.addClass('alert');
        pricing_table__header.addClass('pricing-table__header');
        pricing_table__item.addClass('pricing-table__item');
        col.addClass('col-sm-3');

        col.append(pricing_table__item);
        col.append(pricing_table__header);
        col.append(h2);
        col.append(small);
        col.append(alert);
        col.append(pricing_table__body);
        col.append(pricing_table__list);
        col.append(a);
        col.append(i);
        panelRecivo.append(col);

        console.log(dataRecivo);
        $('#recivos').append(panelRecivo);
    
    });
}




// function datosPerfil(data){
//     var panelPerfil = $('#perfil');
//     data.forEach(dataPerfil => { 
//         var col12 = $('<div></div>');
//         var content = $('<div></div>');
//         var profile = $('<div></div>');
//         var profile__img = $('<div></div>');
//         var img = $('<img>');
//         var a = $('<a></a>');
//         var profile__info = $('<div></div>');
//         var h2 = $('<h2></h2>');
//         var p = $('<p></p>');
//         var ul = $('<ul></ul>');
//         var li = $('<li></li>');
//         var i_p = $('<i></i>');
//         var i_e = $('<i></i>');
//         var i_h = $('<i></i>');
//         var i_d = $('<i></i>');

//         i_d.addClass('zmdi-pin');
//         i_d.addClass('zmdi');
//         i_h.addClass('zmdi-home');
//         i_h.addClass('zmdi');
//         i_e.addClass('zmdi-email');
//         i_e.addClass('zmdi');
//         i_p.addClass('zmdi-phone');
//         i_p.addClass('zmdi');
//         ul.attr('align','left');
//         ul.addClass('icon-list');
//         profile__info.addClass('text-center');
//         profile__info.addClass('profile__info');
//         a.addClass('profile__img__edit');
//         a.addClass('zmdi-camera');
//         a.addClass('zmdi');
//         img.attr('alt','Icono_socio');
//         img.css('src','../../assets/img/usuarios/m5.png');
//         profile__img.addClass('profile__img');
//         profile.addClass('card');
//         content.addClass('content--boxed-sm');
//         col12.addClass('col-sm-12');
//         console.log(dataPerfil);
//         $('#perfil').append(panelPerfil);
    
//     });
// }


// const datosPerfil = [
//     {
//         "consumo": "Bs.- 17",
//         "multa": "Bs. 0.00",
//         "mes": "DICIEMBRE - 2019 ",
//         "anuncio": "El pago del consumo de agua al mes correspondiente no fue cancelado. Rogamos cancelar lo mas antes posible",
//         "lectura": "Lectura medidor: 794"
//     },
// ];


function datosCompraAccion(data){
    var panelCompraAccion = $('#compraAccion');
    data.forEach(dataCompraAccion => { 
        var col = $('<div></div>');
        var pricing_table__item = $('<div></div>');
        var pricing_table__header = $('<div></div>');
        var h2 = $('<h2></h2>');
        var small = $('<small></small>');
        var alert = $('<div></div>');
        var pricing_table__body = $('<div></div>');
        var pricing_table__list = $('<div></div>');
        var pricing_table__list2 = $('<div></div>');

        pricing_table__list2.addClass('pricing-table__list');
        pricing_table__list.addClass('pricing-table__list');
        pricing_table__body.addClass('pricing-table__body');
        alert.addClass('alert-success');
        alert.addClass('alert');
        pricing_table__header.addClass('pricing-table__header');
        pricing_table__item.addClass('pricing-table__item');
        col.addClass('col-sm-4');

        col.append(pricing_table__item);
        col.append(pricing_table__header);
        col.append(h2);
        col.append(small);
        col.append(alert);
        col.append(pricing_table__body);
        col.append(pricing_table__list);
        col.append(pricing_table__list2);
        panelCompraAccion.append(col);

        console.log(dataCompraAccion);
        $('#compraAccion').append(panelCompraAccion);
    
    });
}




function datosCambioNombre(data){
    var panelCambioNombre = $('#cambioNombre');
    data.forEach(dataCambioNombre => { 
        var col = $('<div></div>');
        var pricing_table__item = $('<div></div>');
        var pricing_table__header = $('<div></div>');
        var h2 = $('<h2></h2>');
        var small = $('<small></small>');
        var alert = $('<div></div>');
        var pricing_table__body = $('<div></div>');
        var pricing_table__list = $('<div></div>');
        var pricing_table__list2 = $('<div></div>');

        pricing_table__list2.addClass('pricing-table__list');
        pricing_table__list.addClass('pricing-table__list');
        pricing_table__body.addClass('pricing-table__body');
        alert.addClass('alert-success');
        alert.addClass('alert');
        pricing_table__header.addClass('pricing-table__header');
        pricing_table__item.addClass('pricing-table__item');
        col.addClass('col-sm-4');

        col.append(pricing_table__item);
        col.append(pricing_table__header);
        col.append(h2);
        col.append(small);
        col.append(alert);
        col.append(pricing_table__body);
        col.append(pricing_table__list);
        col.append(pricing_table__list2);
        panelCambioNombre.append(col);

        console.log(dataCambioNombre);
        $('#cambioNombre').append(panelCambioNombre);
    
    });
}




function datosAportePozo(data){
    var panelAportePozo = $('#aportePozo');
    data.forEach(dataAportePozo => { 
        var col = $('<div></div>');
        var pricing_table__item = $('<div></div>');
        var pricing_table__header = $('<div></div>');
        var h2 = $('<h2></h2>');
        var small = $('<small></small>');
        var alert = $('<div></div>');
        var pricing_table__body = $('<div></div>');
        var pricing_table__list = $('<div></div>');
        var pricing_table__list2 = $('<div></div>');

        pricing_table__list2.addClass('pricing-table__list');
        pricing_table__list.addClass('pricing-table__list');
        pricing_table__body.addClass('pricing-table__body');
        alert.addClass('alert-success');
        alert.addClass('alert');
        pricing_table__header.addClass('pricing-table__header');
        pricing_table__item.addClass('pricing-table__item');
        col.addClass('col-sm-4');

        col.append(pricing_table__item);
        col.append(pricing_table__header);
        col.append(h2);
        col.append(small);
        col.append(alert);
        col.append(pricing_table__body);
        col.append(pricing_table__list);
        col.append(pricing_table__list2);
        panelAportePozo.append(col);

        console.log(dataAportePozo);
        $('#aportePozo').append(panelAportePozo );
    
    });
}




