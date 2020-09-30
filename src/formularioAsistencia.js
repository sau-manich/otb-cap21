$(document).ready(() => {
    procesarAsistencia();
});
function procesarAsistencia(){
    $('#formularioAsistencia').submit(function(e){
        e.preventDefault();
        // preguntar a gustavo :(
        console.log(e);

        let formularioAsistencia = $("#formularioAsistencia").serialize();
        let objPozo = serializeToObject(formularioAsistencia);
        // otra ves preguntar a gustavo :(
        console.log(objPozo);
        
    });
}


function serializeToObject (val) {
    var valores = val.split("&");
    let obj = {}
    valores.forEach(valor => {
        obj = {
            ...obj,
            [valor.split("=")[0]]: valor.split("=")[1], 
        }
    });
    return obj;
}

function asistenciaTipe(data) {
    var tipos = $('#formularioAsistencia');
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