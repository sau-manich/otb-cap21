$(document).ready(() => {
    procesarAdmin();
    getAdmin();
});

function procesarAdmin(){
    $('#formularioAdmin').submit(function(e){
        e.preventDefault();
        console.log(e);

        let formularioAdmin = $("#formularioAdmin").serialize();
        // lo convierte en un serializa con los & e =
        let objAdmin = serializeToObject(formularioAdmin);
        console.log(objAdmin);
        
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

function getAdmin() {
    $.ajax({
        url: 'https://boiling-brook-66124.herokuapp.com/api/user',
        headers: {
            'Content-Type': 'application/json'
        },
        // method: "¨POST",
        // data: {},
        success: (data, status) => {
            console.log(status);
            
            renderToType(data);
        }
    }).done(function(resp) { //
       console.log(resp);
       
    });
}


//funcion para renderizar los tipos
function renderToType(data) {
    var tipos = $('#_tipoSocio');
    data.forEach(tipo => {
        var label = $('<label></label>');
        var input = $('<input/>');
        var i = $('<i></i>');
        label.addClass('checkbox-inline');
        input.attr('type','checkbox');
        input.attr('name','tipo');
        input.attr('value',tipo.idTipoUsuario);
        i.addClass('input-helper');
        label.append(input); // append colocar un elemento dentro 
        label.append(i);
        label.append(tipo.nombreTipoUsuario);
        tipos.append(label);
    });
    
}