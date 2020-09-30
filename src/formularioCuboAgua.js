$(document).ready(() => {
    procesarCuboAgua();
});
function procesarCuboAgua(){
    $('#formularioCuboAgua').submit(function(e){
        e.preventDefault();
        console.log(e);

        let formularioAdmin = $("#formularioCuboAgua").serialize();
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


// registros = [];
// function procesar(){
//     const formulario = document.forms['accion'];
//     const registro = {
//         "Varon_1" : formulario.elements[0].value,
//         "Varon_2" : formulario.elements[1].value,
//         "Mujer_1" : formulario.elements[2].value,
//         "Mujer_2" : formulario.elements[3].value,
//         medidores:{

//         },
//         telefono : formulario.elements[3].value,

//         }
// }
