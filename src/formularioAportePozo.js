$(document).ready(() => {
    procesarAportePozo();
});
function procesarAportePozo(){
    $('#formularioAportePozo').submit(function(e){
        e.preventDefault();
        console.log(e);

        let formularioAportePozo = $("#formularioAportePozo").serialize();
        // lo convierte en un serializa con los & e =
        let objAdmin = serializeToObject(formularioAportePozo);
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