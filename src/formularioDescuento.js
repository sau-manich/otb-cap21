$(document).ready(() => {
    procesarCambioNombre();
});
function procesarCambioNombre(){
    $('#formularioDescuento').submit(function(e){
        e.preventDefault();
        console.log(e);

        let formularioDescuento = $("#formularioDescuento").serialize();
        // lo convierte en un serializa con los & e =
        let objAdmin = serializeToObject(formularioDescuento);
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