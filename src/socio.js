

$(document).ready(()=>{
    var targeta1 = $('#targeta1');
    var targeta2 = $('#targeta2');
    var targeta3 = $('#targeta3');
    var targeta4 = $('#targeta4');
    var targeta5 = $('#targeta5');
    var targeta6 = $('#targeta6');
    var targeta7 = $('#targeta7');
    var targeta8 = $('#targeta8');
    var targeta9 = $('#targeta9');
    var targeta10 = $('#targeta10');
    var targeta11 = $('#targeta11');
    var targeta12 = $('#targeta12');
    var targeta13 = $('#targeta13');
    var targeta14 = $('#targeta14');
    var targeta15 = $('#targeta15');

    
    var targetar0 = $('#targetar0');
    var targetar1 = $('#targetar1');
    var targetar2 = $('#targetar2');
    var targetar3 = $('#targetar3');

    
    var targetaa0 = $('#targetaa0');
    var targetaa1 = $('#targetaa1');
    var targetaa2 = $('#targetaa2');
    var targetaa3 = $('#targetaa3');

    targeta1.append(renderTargeta1());
    targeta2.append(renderTargeta2());
    targeta3.append(renderTargeta3());
    targeta4.append(renderTargeta4());
    targeta5.append(renderTargeta5());
    targeta6.append(renderTargeta6());
    targeta7.append(renderTargeta7());
    targeta8.append(renderTargeta8());
    targeta9.append(renderTargeta9());
    targeta10.append(renderTargeta10());
    targeta11.append(renderTargeta11());
    targeta12.append(renderTargeta12());
    targeta13.append(renderTargeta13());
    targeta14.append(renderTargeta14());
    targeta15.append(renderTargeta15());

    
    targetar0.append(renderTargetar0());
    targetar1.append(renderTargetar1());
    targetar2.append(renderTargetar2());
    targetar3.append(renderTargetar3());

    
    targetaa0.append(renderTargetaa0());
    targetaa1.append(renderTargetaa1());
    targetaa2.append(renderTargetaa2());
    targetaa3.append(renderTargetaa3());
});

// yhuanca
// n42x

function renderTargeta1(){
    var card = $('<div></div>');
    var card_header = $('<div></div>');
    var alert = $('<div></div>');
    var small = $('<small></small>');
    var card_body = $('<div></div>');
    var p = $('<p></p>');
    var a = $('<a></a>');
    var i = $('<i></i>');

    i.addClass('zmdi');
    i.addClass('zmdi-check');
    a.addClass('view-more');
    a.addClass('text-center');
    p.attr('align','center');
    card_body.addClass('card__body');
    small.html('Enviado por la centrar el 08 de Enero 2020');
    alert.addClass('alert');
    alert.addClass('alert-info');
    alert.attr('align','center');
    card_header.addClass('card__header');
    card_header.addClass('card__header--img');
    card_header.css('background-image','url(../../assets/img/t1.png)');
    card_header.css('height','250px');
    card.addClass('card');

    a.append(i);
    a.append('Marcar como leido');
    p.append(' Estimados Socios de la OTB Villa 21 de Septiembre, se les comunica que el día Domingo 05 Abril 2019 se realizara el cobro de agua a partir de 08:00am a 11:00am, recordarles que pasando la hora no se llevará a cabo ni una atención, se les ruega puntualidad y compromiso, saludos.');
    card_body.append(p);
    card_body.append(a);
    alert.append('Mensaje CAP-21');
    alert.append('<br/>');
    alert.append(small);
    card.append('<br/>');
    card.append(card_header);
    card.append(alert);
    card.append(card_body);
    return card;
}


function renderTargeta2(){
    var card = $('<div></div>');
    var card_header = $('<div></div>');
    var h2 = $('<h2></h2>');
    var img = $('<img></img>');
    var small = $('<small></small>');

    small.html('Revisa siempre la lectura de tu medidor y compárala con la del sistema. Si la lectura no es correcta, comunícate con nosotros lo más antes posible para corregirel error, Saludos.');
    h2.attr('align','center');
    img.addClass('avatar-img');
    img.css('src','url(../../assets/img/usuarios/ees.png)');
    card_header.addClass('card__header');
    card.addClass('card');

    h2.append(small);
    h2.append(img);
    h2.append('<br/><br/>');
    card_header.append(h2);
    card_header.append('Aviso Importante');
    card.append(h2);
    card.append(card_header);
    return card;
}


function renderTargeta3(){
    var card = $('<div></div>');
    var pricing_table__header = $('<div></div>');
    var alert = $('<div></div>');
    var card_body = $('<div></div>');
    var p = $('<p></p>');
    var a = $('<a></a>');
    var i = $('<i></i>');
    var h2 = $('<h2></h2>');
    var small = $('<small></small>');

    i.addClass('zmdi');
    i.addClass('zmdi-brush');
    a.addClass('view-more');
    a.addClass('text-center');
    p.attr('align','center');
    card_body.addClass('card__body');
    alert.addClass('alert');
    alert.addClass('alert-warning');
    alert.attr('align','center');
    h2.addClass('text-center');
    pricing_table__header.addClass('pricing-table__header');
    card.addClass('card');

    a.append(i);
    a.append('Lectura Medidor: 2553');
    p.append(' Estimado socio, acaba de salir su recibo del mes correspondiente, recuerda que llegando al 3º mes de no pagar, el sistema le sumara un monto de Bs.- 30.00 extra a su cuenta. Le rogamos compromiso con el pago de sus cuotas.');
    card_body.append(p);
    card_body.append(a);
    alert.append('JULIO - 2020');
    alert.append('<br/>');
    small.append(' | Bs. 30.00');
    h2.append('Bs.-17 ');
    h2.append(small);
    pricing_table__header.append(h2);
    card.append('<br/>');
    card.append(pricing_table__header);
    card.append(alert);
    card.append(card_body);
    return card;
}


function renderTargeta4(){
    var card = $('<div></div>');
    var pricing_table__header = $('<div></div>');
    var alert = $('<div></div>');
    var card_body = $('<div></div>');
    var p = $('<p></p>');
    var a = $('<a></a>');
    var i = $('<i></i>');
    var h2 = $('<h2></h2>');
    var small = $('<small></small>');

    i.addClass('zmdi');
    i.addClass('zmdi-brush');
    a.addClass('view-more');
    a.addClass('text-center');
    p.attr('align','center');
    card_body.addClass('card__body');
    alert.addClass('alert');
    alert.addClass('alert-danger');
    alert.attr('align','center');
    h2.addClass('text-center');
    pricing_table__header.addClass('pricing-table__header');
    card.addClass('card');

    a.append(i);
    a.append('Lectura Medidor: 2553');
    p.append(' Estimado socio, acaba de salir su recibo del mes correspondiente, recuerda que llegando al 3º mes de no pagar, el sistema le sumara un monto de Bs.- 30.00 extra a su cuenta. Le rogamos compromiso con el pago de sus cuotas.');
    card_body.append(p);
    card_body.append(a);
    alert.append('AGOSTO - 2020');
    alert.append('<br/>');
    small.append(' | Bs. 30.00');
    h2.append('Bs.-17 ');
    h2.append(small);
    pricing_table__header.append(h2);
    card.append('<br/>');
    card.append(pricing_table__header);
    card.append(alert);
    card.append(card_body);
    return card;
}


function renderTargeta5(){
    var card = $('<div></div>');
    var pricing_table__header = $('<div></div>');
    var alert = $('<div></div>');
    var card_body = $('<div></div>');
    var p = $('<p></p>');
    var a = $('<a></a>');
    var i = $('<i></i>');
    var h2 = $('<h2></h2>');
    var small = $('<small></small>');

    i.addClass('zmdi');
    i.addClass('zmdi-brush');
    a.addClass('view-more');
    a.addClass('text-center');
    p.attr('align','center');
    card_body.addClass('card__body');
    alert.addClass('alert');
    alert.addClass('alert-success');
    alert.attr('align','center');
    h2.addClass('text-center');
    pricing_table__header.addClass('pricing-table__header');
    card.addClass('card');

    a.append(i);
    a.append('Lectura Medidor: 2553');
    p.append(' Estimado socio, acaba de salir su recibo del mes correspondiente, recuerda que llegando al 3º mes de no pagar, el sistema le sumara un monto de Bs.- 30.00 extra a su cuenta. Le rogamos compromiso con el pago de sus cuotas.');
    card_body.append(p);
    card_body.append(a);
    alert.append('JULIO - 2020');
    alert.append('<br/>');
    small.append(' | Bs. 30.00');
    h2.append('Bs.-15 ');
    h2.append(small);
    pricing_table__header.append(h2);
    card.append('<br/>');
    card.append(pricing_table__header);
    card.append(alert);
    card.append(card_body);
    return card;
}


function renderTargeta6(){
    var card = $('<div></div>');
    var card_header = $('<div></div>');
    var alert = $('<div></div>');
    var small = $('<small></small>');

    small.html('No se registró su asistencia en el sistema');
    alert.addClass('alert');
    alert.addClass('alert--dark');
    alert.attr('align','center');
    card_header.addClass('card__header');
    card_header.addClass('card__header--img');
    card_header.css('background-image','url(../../assets/img/cerrar.png)');
    card_header.css('height','250px');
    card.addClass('card');

    alert.append('Costo de la multa | Bs.- 50.00');
    alert.append('<br/>');
    alert.append(small);
    card.append(card_header);
    card.append(alert);
    return card;
}

function renderTargeta7(){
    var card = $('<div></div>');
    var card_header = $('<div></div>');
    var alert = $('<div></div>');
    var small = $('<small></small>');

    small.html('Se registro correctamente su asistencia en el sistema');
    alert.addClass('alert');
    alert.addClass('alert--dark');
    alert.attr('align','center');
    card_header.addClass('card__header');
    card_header.addClass('card__header--img');
    card_header.css('background-image','url(../../assets/img/pin.png)');
    card_header.css('height','250px');
    card.addClass('card');

    alert.append('Costo de la multa | Bs.- 0.00');
    alert.append('<br/>');
    alert.append(small);
    card.append(card_header);
    card.append(alert);
    return card;
}



function renderTargeta8(){
    var card = $('<div></div>');
    var card_header = $('<div></div>');
    var alert = $('<div></div>');
    var small = $('<small></small>');
    var card_body = $('<div></div>');
    var p = $('<p></p>');
    var a = $('<a></a>');
    var i = $('<i></i>');

    i.addClass('zmdi');
    i.addClass('zmdi-check');
    a.addClass('view-more');
    a.addClass('text-center');
    p.attr('align','center');
    card_body.addClass('card__body');
    small.html('Enviado por la centrar el 08 de Enero 2020');
    alert.addClass('alert');
    alert.addClass('alert--dark');
    alert.attr('align','center');
    card_header.addClass('card__header');
    card_header.addClass('card__header--img');
    card_header.css('background-image','url(../../assets/img/ani.png)');
    card_header.css('height','270px');
    card.addClass('card');

    a.append(i);
    a.append('Marcar como leido');
    p.append(' Estimados Socios de la OTB Villa 21 de Septiembre, se les comunica que el día Domingo 05 Abril 2019 se realizara el cobro de agua a partir de 08:00am a 11:00am, recordarles que pasando la hora no se llevará a cabo ni una atención, se les ruega puntualidad y compromiso, saludos.');
    card_body.append(p);
    card_body.append(a);
    alert.append('Mensaje CAP-21');
    alert.append('<br/>');
    alert.append(small);
    card.append(card_header);
    card.append(alert);
    card.append(card_body);
    return card;
}



function renderTargeta9(){
    var card = $('<div></div>');
    var card_header = $('<div></div>');
    var alert = $('<div></div>');
    var small = $('<small></small>');
    var card_body = $('<div></div>');
    var p = $('<p></p>');
    var a = $('<a></a>');
    var i = $('<i></i>');

    i.addClass('zmdi');
    i.addClass('zmdi-check');
    a.addClass('view-more');
    a.addClass('text-center');
    p.attr('align','center');
    card_body.addClass('card__body');
    small.html('Enviado por la centrar el 08 de Enero 2020');
    alert.addClass('alert');
    alert.addClass('alert--dark');
    alert.attr('align','center');
    card_header.addClass('card__header');
    card_header.addClass('card__header--img');
    card_header.css('background-image','url(../../assets/img/anim.png)');
    card_header.css('height','270px');
    card.addClass('card');

    a.append(i);
    a.append('Marcar como leido');
    p.append(' Estimados Socios de la OTB Villa 21 de Septiembre, se les comunica que el día Domingo 05 Abril 2019 se realizara el cobro de agua a partir de 08:00am a 11:00am, recordarles que pasando la hora no se llevará a cabo ni una atención, se les ruega puntualidad y compromiso, saludos.');
    card_body.append(p);
    card_body.append(a);
    alert.append('Mensaje CAP-21');
    alert.append('<br/>');
    alert.append(small);
    card.append(card_header);
    card.append(alert);
    card.append(card_body);
    return card;
}


function renderTargeta10(){
    var content__boxed_sm = $('<div></div>');
    var card = $('<div></div>');
    var profile__img = $('<div></div>');
    var img = $('<img>');
    var profile__info = $('<div></div>');
    var p = $('<p></p>');
    var ul = $('<ul></ul>');
    var li = $('<li></li>');
    var i = $('<i></i>');


    i.addClass('zmdi');
    i.addClass('zmdi-pin');
    ul.addClass('icon-list');
    ul.attr('align','left');
    p.attr('align','center');
    profile__info.addClass('profile__info');
    img.css('background-image','url(../../assets/img/usuarios/v5.png)');
    profile__img.addClass('profile__img');
    card.addClass('card');
    card.addClass('profile');
    content__boxed_sm.addClass('content--boxed-sm');

    i.append('21 de Septiembre');
    li.append(i);
    ul.append(li);
    p.append('Socio activo del Comite de agua potable perteneciente a la OTB "Villa 21 de Septiembre"');
    profile__info.append(p);
    profile__info.append(ul);
    profile__img.append(img);
    card.append(profile__img);
    card.append(profile__info);
    content__boxed_sm.append(card);
    content__boxed_sm.append(profile__img);
    content__boxed_sm.append(profile__info);
    return content__boxed_sm;
}


function renderTargeta11(){
    var card = $('<div></div>');
    var pricing_table__header = $('<div></div>');
    var alert = $('<div></div>');
    var card_body = $('<div></div>');
    var p = $('<p></p>');
    var a = $('<a></a>');
    var i = $('<i></i>');
    var h2 = $('<h2></h2>');
    var small = $('<small></small>');

    i.addClass('zmdi');
    i.addClass('zmdi-calendar');
    a.addClass('view-more');
    a.addClass('text-center');
    p.attr('align','center');
    card_body.addClass('card__body');
    alert.addClass('alert');
    alert.addClass('alert-success');
    alert.attr('align','center');
    h2.addClass('text-center');
    pricing_table__header.addClass('pricing-table__header');
    card.addClass('card');

    a.append(i);
    a.append('01 Abril 2019');
    p.append(' La compra de acción fue realizada correctamente, su compra sera almacenada en nuestra base de datospara protección del recivo fisico que se le fue entregado.');
    card_body.append(p);
    card_body.append(a);
    alert.append('COMPRA DE ACCIÓN');
    alert.append('<br/>');
    small.append(' | Bs. 4000.00');
    h2.append('$597 ');
    h2.append(small);
    pricing_table__header.append(h2);
    card.append('<br/>');
    card.append(pricing_table__header);
    card.append(alert);
    card.append(card_body);
    return card;
}


function renderTargeta12(){
    var card = $('<div></div>');
    var pricing_table__header = $('<div></div>');
    var alert = $('<div></div>');
    var card_body = $('<div></div>');
    var p = $('<p></p>');
    var a = $('<a></a>');
    var i = $('<i></i>');
    var h2 = $('<h2></h2>');
    var small = $('<small></small>');

    i.addClass('zmdi');
    i.addClass('zmdi-calendar');
    a.addClass('view-more');
    a.addClass('text-center');
    p.attr('align','center');
    card_body.addClass('card__body');
    alert.addClass('alert');
    alert.addClass('alert--dark');
    alert.attr('align','center');
    h2.addClass('text-center');
    pricing_table__header.addClass('pricing-table__header');
    card.addClass('card');

    a.append(i);
    a.append('25 Abril 2020');
    p.append(' El cambio de nombre fue efectuado correctamente, su cambio de nombre sera almacenada en nuestra base de datospara protección del recivo fisico que se le fue entregado.');
    card_body.append(p);
    card_body.append(a);
    alert.append('CAMBIO DE NOMBRE');
    alert.append('<br/>');
    small.append(' | Bs. 500.00');
    h2.append('$75  ');
    h2.append(small);
    pricing_table__header.append(h2);
    card.append('<br/>');
    card.append(pricing_table__header);
    card.append(alert);
    card.append(card_body);
    return card;
}


function renderTargeta13(){
    var card = $('<div></div>');
    var pricing_table__header = $('<div></div>');
    var alert = $('<div></div>');
    var card_body = $('<div></div>');
    var p = $('<p></p>');
    var a = $('<a></a>');
    var i = $('<i></i>');
    var h2 = $('<h2></h2>');
    var small = $('<small></small>');

    i.addClass('zmdi');
    i.addClass('zmdi-calendar');
    a.addClass('view-more');
    a.addClass('text-center');
    p.attr('align','center');
    card_body.addClass('card__body');
    alert.addClass('alert');
    alert.addClass('alert-info');
    alert.attr('align','center');
    h2.addClass('text-center');
    pricing_table__header.addClass('pricing-table__header');
    card.addClass('card');

    a.append(i);
    a.append('Lectura Medidor: 2553');
    p.append(' El pago de su aporte fue realizado correctamente, se agradece de parte de la OTB 21 de Septiembre y el comite de agua potable');
    card_body.append(p);
    card_body.append(a);
    alert.append('APORTE POZO');
    alert.append('<br/>');
    small.append(' | Bs. 100.00');
    h2.append('$14 ');
    h2.append(small);
    pricing_table__header.append(h2);
    card.append('<br/>');
    card.append(pricing_table__header);
    card.append(alert);
    card.append(card_body);
    return card;
}




function renderTargeta14(){
    var a = $('<a></a>');
    var pull = $('<div></div>');
    var img = $('<img>');
    var media_body = $('<div></div>');
    var list_group__heading = $('<div></div>');
    var small = $('<small></small>');
        
    small.addClass('list-group__text');
    list_group__heading.addClass('list-group__heading');
    media_body.addClass('media-body');
    img.css('background-image','url(../../assets/img/usuarios/boy-1.png)');
    img.addClass('avatar-img');
    pull.addClass('pull-left');
    a.addClass('list-group-item');
    a.addClass('media');
    a.attr('href','#');

    small.append('Directiva CAP-21 - 65504799');
    list_group__heading.append('Fulano Mengano');
    media_body.append(list_group__heading);
    media_body.append(small);
    pull.append(img);
    a.append(pull);
    a.append(media_body);
    return a;
}

function renderTargeta15(){
    var a = $('<a></a>');
    var pull = $('<div></div>');
    var img = $('<img>');
    var media_body = $('<div></div>');
    var list_group__heading = $('<div></div>');
    var small = $('<small></small>');
        
    small.addClass('list-group__text');
    list_group__heading.addClass('list-group__heading');
    media_body.addClass('media-body');
    img.css('background-image','url(../../assets/img/usuarios/boy-1.png)');
    img.addClass('avatar-img');
    pull.addClass('pull-right');
    a.addClass('list-group-item');
    a.addClass('media');
    a.attr('href','#');

    small.append('Administrador');
    list_group__heading.append('Mensaje CAP-21');
    media_body.append(list_group__heading);
    media_body.append(small);
    pull.append(img);
    a.append(pull);
    a.append(media_body);
    return a;
}


// **********************************************************************************************************************//



function renderTargetar0(){
    var card = $('<div></div>');
    var pricing_table__header = $('<div></div>');
    var alert = $('<div></div>');
    var card_body = $('<div></div>');
    var p = $('<p></p>');
    var a = $('<a></a>');
    var i = $('<i></i>');
    var h2 = $('<h2></h2>');
    var small = $('<small></small>');

    i.addClass('zmdi');
    i.addClass('zmdi-brush');
    a.addClass('view-more');
    a.addClass('text-center');
    p.attr('align','center');
    card_body.addClass('card__body');
    alert.addClass('alert');
    alert.addClass('alert-success');
    alert.attr('align','center');
    h2.addClass('text-center');
    pricing_table__header.addClass('pricing-table__header');
    card.addClass('card');

    a.append(i);
    a.append('Lectura Medidor: 2523');
    p.append(' Estimado socio, acaba de salir su recibo del mes correspondiente, recuerda que llegando al 3º mes de no pagar, el sistema le sumara un monto de Bs.- 30.00 extra a su cuenta. Le rogamos compromiso con el pago de sus cuotas.');
    card_body.append(p);
    card_body.append(a);
    alert.append('JUNIO - 2020');
    alert.append('<br/>');
    small.append(' | Bs. 0.00');
    h2.append('Bs.-27 ');
    h2.append(small);
    pricing_table__header.append(h2);
    card.append('<br/>');
    card.append(pricing_table__header);
    card.append(alert);
    card.append(card_body);
    return card;
}



function renderTargetar1(){
    var card = $('<div></div>');
    var pricing_table__header = $('<div></div>');
    var alert = $('<div></div>');
    var card_body = $('<div></div>');
    var p = $('<p></p>');
    var a = $('<a></a>');
    var i = $('<i></i>');
    var h2 = $('<h2></h2>');
    var small = $('<small></small>');

    i.addClass('zmdi');
    i.addClass('zmdi-brush');
    a.addClass('view-more');
    a.addClass('text-center');
    p.attr('align','center');
    card_body.addClass('card__body');
    alert.addClass('alert');
    alert.addClass('alert-success');
    alert.attr('align','center');
    h2.addClass('text-center');
    pricing_table__header.addClass('pricing-table__header');
    card.addClass('card');

    a.append(i);
    a.append('Lectura Medidor: 2491');
    p.append(' Estimado socio, acaba de salir su recibo del mes correspondiente, recuerda que llegando al 3º mes de no pagar, el sistema le sumara un monto de Bs.- 30.00 extra a su cuenta. Le rogamos compromiso con el pago de sus cuotas.');
    card_body.append(p);
    card_body.append(a);
    alert.append('MAYO - 2020');
    alert.append('<br/>');
    small.append(' | Bs. 0.00');
    h2.append('Bs.-10 ');
    h2.append(small);
    pricing_table__header.append(h2);
    card.append('<br/>');
    card.append(pricing_table__header);
    card.append(alert);
    card.append(card_body);
    return card;
}



function renderTargetar2(){
    var card = $('<div></div>');
    var pricing_table__header = $('<div></div>');
    var alert = $('<div></div>');
    var card_body = $('<div></div>');
    var p = $('<p></p>');
    var a = $('<a></a>');
    var i = $('<i></i>');
    var h2 = $('<h2></h2>');
    var small = $('<small></small>');

    i.addClass('zmdi');
    i.addClass('zmdi-brush');
    a.addClass('view-more');
    a.addClass('text-center');
    p.attr('align','center');
    card_body.addClass('card__body');
    alert.addClass('alert');
    alert.addClass('alert-success');
    alert.attr('align','center');
    h2.addClass('text-center');
    pricing_table__header.addClass('pricing-table__header');
    card.addClass('card');

    a.append(i);
    a.append('Lectura Medidor: 2450');
    p.append(' Estimado socio, acaba de salir su recibo del mes correspondiente, recuerda que llegando al 3º mes de no pagar, el sistema le sumara un monto de Bs.- 30.00 extra a su cuenta. Le rogamos compromiso con el pago de sus cuotas.');
    card_body.append(p);
    card_body.append(a);
    alert.append('ABRIL - 2020');
    alert.append('<br/>');
    small.append(' | Bs. 0.00');
    h2.append('Bs.-17 ');
    h2.append(small);
    pricing_table__header.append(h2);
    card.append('<br/>');
    card.append(pricing_table__header);
    card.append(alert);
    card.append(card_body);
    return card;
}



function renderTargetar3(){
    var card = $('<div></div>');
    var pricing_table__header = $('<div></div>');
    var alert = $('<div></div>');
    var card_body = $('<div></div>');
    var p = $('<p></p>');
    var a = $('<a></a>');
    var i = $('<i></i>');
    var h2 = $('<h2></h2>');
    var small = $('<small></small>');

    i.addClass('zmdi');
    i.addClass('zmdi-brush');
    a.addClass('view-more');
    a.addClass('text-center');
    p.attr('align','center');
    card_body.addClass('card__body');
    alert.addClass('alert');
    alert.addClass('alert-success');
    alert.attr('align','center');
    h2.addClass('text-center');
    pricing_table__header.addClass('pricing-table__header');
    card.addClass('card');

    a.append(i);
    a.append('Lectura Medidor: 2410');
    p.append(' Estimado socio, acaba de salir su recibo del mes correspondiente, recuerda que llegando al 3º mes de no pagar, el sistema le sumara un monto de Bs.- 30.00 extra a su cuenta. Le rogamos compromiso con el pago de sus cuotas.');
    card_body.append(p);
    card_body.append(a);
    alert.append('MARZO - 2020');
    alert.append('<br/>');
    small.append(' | Bs. 30.00');
    h2.append('Bs.-17 ');
    h2.append(small);
    pricing_table__header.append(h2);
    card.append('<br/>');
    card.append(pricing_table__header);
    card.append(alert);
    card.append(card_body);
    return card;
}



function renderTargetaa0(){
    var card = $('<div></div>');
    var card_header = $('<div></div>');
    var alert = $('<div></div>');
    var small = $('<small></small>');

    small.html('Se registro correctamente su asistencia en el sistema');
    alert.addClass('alert');
    alert.addClass('alert--dark');
    alert.attr('align','center');
    card_header.addClass('card__header');
    card_header.addClass('card__header--img');
    card_header.css('background-image','url(../../assets/img/pin.png)');
    card_header.css('height','250px');
    card.addClass('card');

    alert.append('Costo de la multa | Bs.- 0.00');
    alert.append('<br/>');
    alert.append(small);
    card.append(card_header);
    card.append(alert);
    return card;
}


function renderTargetaa1(){
    var card = $('<div></div>');
    var card_header = $('<div></div>');
    var alert = $('<div></div>');
    var small = $('<small></small>');

    small.html('Se registro correctamente su asistencia en el sistema');
    alert.addClass('alert');
    alert.addClass('alert--dark');
    alert.attr('align','center');
    card_header.addClass('card__header');
    card_header.addClass('card__header--img');
    card_header.css('background-image','url(../../assets/img/pin.png)');
    card_header.css('height','250px');
    card.addClass('card');

    alert.append('Costo de la multa | Bs.- 0.00');
    alert.append('<br/>');
    alert.append(small);
    card.append(card_header);
    card.append(alert);
    return card;
}


function renderTargetaa2(){
    var card = $('<div></div>');
    var card_header = $('<div></div>');
    var alert = $('<div></div>');
    var small = $('<small></small>');

    small.html('Se registro correctamente su asistencia en el sistema');
    alert.addClass('alert');
    alert.addClass('alert--dark');
    alert.attr('align','center');
    card_header.addClass('card__header');
    card_header.addClass('card__header--img');
    card_header.css('background-image','url(../../assets/img/pin.png)');
    card_header.css('height','250px');
    card.addClass('card');

    alert.append('Costo de la multa | Bs.- 0.00');
    alert.append('<br/>');
    alert.append(small);
    card.append(card_header);
    card.append(alert);
    return card;
}


function renderTargetaa3(){
    var card = $('<div></div>');
    var card_header = $('<div></div>');
    var alert = $('<div></div>');
    var small = $('<small></small>');

    small.html('Se registro correctamente su asistencia en el sistema');
    alert.addClass('alert');
    alert.addClass('alert--dark');
    alert.attr('align','center');
    card_header.addClass('card__header');
    card_header.addClass('card__header--img');
    card_header.css('background-image','url(../../assets/img/pin.png)');
    card_header.css('height','250px');
    card.addClass('card');

    alert.append('Costo de la multa | Bs.- 0.00');
    alert.append('<br/>');
    alert.append(small);
    card.append(card_header);
    card.append(alert);
    return card;
}