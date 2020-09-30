function auth() 
{
    //funcion de autentificacion
    $("#autentificacionLogin").submit( (e) => {
        e.preventDefault();
        $('#validate-modal').css("display", "block");
        //preventDefault paraque no recargue la pagina
        let dataLogin = $("#autentificacionLogin").serialize();
        // lo convierte en un serializa con los & e =
        let objUser = serializeToObject(dataLogin);
        //conectarnos a la api por ajax
        $.ajax({
            url: ENDPOINT + 'login',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(objUser),
            success:((data)=>{
                $('#info').html('<div style="border: 2px solid green; border-radius:1rem; padding:1rem; background-color:#1E2A31;"><h5 style="color:white; text-align:center;">Datos Correctos</h5></div>');
                localStorage.setItem("authOTB", JSON.stringify(data));
                $('#validate-modal').css("display", "none");
                accionSuccess(data);
            }),
            error: ((data)=>{
                $('#validate-modal').css("display", "none");
                $('#info').html('<div style="border: 2px solid red; border-radius:1rem; padding:1rem; background-color:#1E2A31;"><h5 style="color:white; text-align:center;">' + data.responseJSON.message + '</h5></div>');
            })
        });     
        
    });
}

function accionSuccess(data)
{
    switch (data.user.tipoUsuario_id) {
        case 1:
            window.location = "layouts/admin/";
            break;
        case 2:
            window.location = "layouts/directivo/";
            break;
        case 3:
            window.location = "layouts/user/";
            break;
        default:
            break;
    }
}

// este emtodo convierte de serialize a objetos
function serializeToObject (val) {
    var valores = val.split("&");
    let obj = {}
    valores.forEach(valor => {
        var clave = (valor.split("=")[0] === 'usuario') ? 'user' : ((valor.split("=")[0] === 'contrasena') ? 'pass' : 'error');
        obj = {
            ...obj, // una funcion de edtascript6 para conbinar objetos
            [decodeURIComponent(clave)]: decodeURIComponent(valor.split("=")[1].normalize()), // partiendo el valor de foreach en clave valor separado por 2 puntos 
        }
    });
    return obj;
}