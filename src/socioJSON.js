const cualquiernombre = [
    {
        "image": "../../assets/img/serc.png",
        "title" :"aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "message" :"Estimados Socios de la OTB Villa 21 de Septiembre, se les comunica que el día Domingo 05 Abril 2019 se realizara el cobro de agua a partir de 08:00am a 11:00am, recordarles que pasando la hora no se llevará a cabo ni una atención, se les ruega puntualidad y compromiso, saludos."
    },
    {
        "image": "../../assets/img/usu.png",
        "title" :"bbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        "message" :"Estimados Socios de la OTB Villa 21 de Septiembre, se les comunica que el día Domingo 05 Abril 2019 se realizara el cobro de agua a partir de 08:00am a 11:00am, recordarles que pasando la hora no se llevará a cabo ni una atención, se les ruega puntualidad y compromiso, saludos."
    },
    {
        "image": "../../assets/img/tanke2.png",
        "title" :"ccccccccccccccccccccccccc",
        "message" :"Estimados Socios de la OTB Villa 21 de Septiembre, se les comunica que el día Domingo 05 Abril 2019 se realizara el cobro de agua a partir de 08:00am a 11:00am, recordarles que pasando la hora no se llevará a cabo ni una atención, se les ruega puntualidad y compromiso, saludos."
    },
    {
        "image": "../../assets/img/5.png",
        "title" :"ddddddddddddddddddddddddddddd",
        "message" :"Estimados Socios de la OTB Villa 21 de Septiembre, se les comunica que el día Domingo 05 Abril 2019 se realizara el cobro de agua a partir de 08:00am a 11:00am, recordarles que pasando la hora no se llevará a cabo ni una atención, se les ruega puntualidad y compromiso, saludos."
    },
    {
        "image": "../../assets/img/tanke3.png",
        "title" :"rrrrrrrrrrrrrrrrrrrrrr",
        "message" :"Estimados Socios de la OTB Villa 21 de Septiembre, se les comunica que el día Domingo 05 Abril 2019 se realizara el cobro de agua a partir de 08:00am a 11:00am, recordarles que pasando la hora no se llevará a cabo ni una atención, se les ruega puntualidad y compromiso, saludos."
    }
]

$(document).ready(()=>{
    renderizandoTargetas();
});

function renderizandoTargetas(){
    var targeta1 = $('#targeta1');
    cualquiernombre.forEach((contenidoMensaje)=>{
        targeta1.append(renderTargeta(contenidoMensaje))
    })
}

function renderTargeta(datos){
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
    a.addClass('test-center');
    p.attr('align','center');
    card_body.addClass('card__body');
    small.html(datos.title);
    alert.addClass('alert');
    alert.addClass('alert-success');
    alert.attr('align','center');
    card_header.addClass('card__header');
    card_header.addClass('card__header--img');
    card_header.css('background-image',`url(${datos.image})`);
    card_header.css('height','200px');
    card.addClass('card');

    a.append(i);
    a.append('Marcar como leido');
    p.append(datos.message);
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
