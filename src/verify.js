const ENDPOINT = "http://127.0.0.1:8000/api/V1/";
$('#validate-modal').css("display", "block");
$('#modal-text').html('Verificando cuenta...');
const localData = JSON.parse(localStorage.getItem('authOTB'));
if (localData) {
    $.ajax({
        url: ENDPOINT + 'auth/verify',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localData.token
        },
        success: ((data, status) => {
            $('#validate-modal').css("display", "none");
            // console.log(data);
            // accionSuccess(localData);
        }),
        error: ((data, status) => {
            localStorage.removeItem('authOTB');
            $('#validate-modal').css("display", "none");
            window.location = "../../";
        })
    });
} else {
    $('#validate-modal').css("display", "none");
     window.location = "../../";
}

// function accionSuccess(data) {
//     switch (data.user.tipoUsuario_id) {
//         case 1:
//             window.location = "../admin/";
//             break;
//         case 2:
//             window.location = "../directivo/";
//             break;
//         case 3:
//             window.location = "../layouts/user/";
//             break;
//         default:
//             break;
//     }
// }