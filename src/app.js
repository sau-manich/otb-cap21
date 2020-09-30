var tokenValExists = false;
const ENDPOINT = "http://127.0.0.1:8000/api/V1/auth/";
// console.log(JSON.parse(localStorage.getItem('authOTB')).token);
$('#validate-modal').css("display", "block");
$('#modal-text').html('Verificando Cuenta...');
var localData = JSON.parse(localStorage.getItem('authOTB'));
if (localData) {
    $.ajax({
        url: ENDPOINT + 'verify',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localData.token
        },
        success: ((data, status) => {
            accionSuccess(localData);
        }),
        error: ((data, status) => {
            localStorage.removeItem('authOTB');
            $('#validate-modal').css("display", "none");
        })
    });
} else {
    $('#validate-modal').css("display", "none");
}

$(document).ready(() => {
    auth();
});