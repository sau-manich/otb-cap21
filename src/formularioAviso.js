
const dataAvisos = [
    {
        "img": "../../assets/img/512.png",
        "title": "Ënviado desde la central",
        "OTB": "21",
        "anuncio": "Aviso de cobro de agua ptable con el descuento de 50% de acuerdo con las ordenes establecidas por la presidenta transitoria Jeanine Añes"
    },
    {
        "img": "../../assets/img/512.png",
        "title": "Ënviado desde la central",
        "OTB": "21",
        "anuncio": "Aviso sobre el pago de la canasta familiar"
    },
    {
        "img": "../../assets/img/512.png",
        "title": "Ënviado desde la central",
        "OTB": "21",
        "anuncio": "Aviso sobre el cago del bono universal solo para bolivia y no para el universo"
    },
    {
        "img": "../../assets/img/512.png",
        "title": "Ënviado desde la central",
        "OTB": "21",
        "anuncio": "Chango pero"
    },
];

$(document).ready(() => {
    procesarAviso();
    datosAvisos(dataAvisos);
});


function procesarAviso(){
    $('#formularioAviso').submit(function(e){
        e.preventDefault();
        var formDatita = new FormData();
        var files = $('#imagen')[0].files[0];
        var aviso = $('#anuncio').val();

        formDatita.append('anuncio', aviso);
        formDatita.append('file',files);

        $.ajax({
            url: "../admin/avisoGuardar.php",
            type: 'POST',
            data: formDatita,
            processData: false,
            contentType: false,
            succes: (data) => {
                console.log(data);
                
            },
            error: (e) => {
                console.error(e);
            }
        }).done((m)=>{
            console.log(m);
        });
        // console.log(formData);

        let formularioAviso = $("#formularioAviso").serialize();
        // lo convierte en un serializa con los & e =
        let objAdmin = serializeToObject(formularioAviso);
        // console.log(objAdmin);
        
    });
}


function datosAvisos(data){
    var panelAviso = $('#mensajePreview');
    data.forEach(aviso => { //
        var card = $('<div></div>');
        var cardImg = $('<div></div>');
        var cardH = $('<div></div>');
        var br = $('<br>');
        var h2 = $('<h2></h2>');
        var small = $('<small></small>');
        var cardB = $('<div></div>');
        var p = $('<p></p>');
        var aH = $('<a></a>');
        aH.addClass('text-left');  
        aH.addClass('view-more');
        aH.attr('href','#');
        cardB.addClass('card__body');
        small.attr('small');//
        h2.attr = ('center'); //
        cardH.addClass('card__header');
        cardImg.addClass('card__header');
        cardImg.addClass('card__header--img');
        cardImg.css('background-image','url(../../assets/img/anim.png)');//
        cardImg.css('height','270px');
        card.addClass('card');
    
    });
}

