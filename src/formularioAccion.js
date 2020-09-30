var cm = 1; 
var subObject;
$(document).ready(() => {
    procesaformularioAccion();
    getTipo();
    addMedidor();
    readToJson();
});

function readToJson(){
    var numeroTelefono = 72314000;
    $('#submit-socios').click( () => {
        $.getJSON("../../assets/json/socios.json", (socios) => {
            const savingSocioPromise = socios.map( async (socio) => {
                    socio.ci = (socio.ci === "") ? `${NumberRandom(10000000, 99999999)}` : socio.ci;
                    fechaSocio = GetDate().split('/');
                    socio.fechaNacimiento = (socio.fechaNacimiento === "") ? `${fechaSocio[2]}/${fechaSocio[1]}/${fechaSocio[0]}` : socio.fechaNacimiento;
                    socio.email = (socio.email === "") ? `${socio.ci}${socio.apellidos.split(' ')[0].toLowerCase()}@gmail.com` : socio.email;
                    socio.telefonos = [numeroTelefono];
                    numeroTelefono++;
                    return await savingUser(socio);
                });

            Promise.all(savingSocioPromise)
                .then((ressSuccess)=>{
                    console.log(ressSuccess);
                })
                .catch((resError) => {
                    console.log(resError);
                })
        });
    });  
}

async function savingUser(socio){
    try {
        const saving = await setSociosSavingRemote(socio);
        // console.log(socio);
        return saving;
    } catch (error) {
        console.log(socio);
        console.log(error);
        return error;
    }
}

const NumberRandom = (minimo, maximo) => {
    return Math.round(Math.random() * (maximo - minimo) + minimo);
}

const AddZeroDate = (val) => {
    if (val < 10)
        return val = '0' + val;
    return val
}

const GetDate = (format, fechaEspecifica, diaMes, hr) => {
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var f = (fechaEspecifica === undefined || fechaEspecifica === null) ? new Date() : new Date(fechaEspecifica);
    var ano = f.getFullYear();
    var mes = f.getMonth() + 1;
    var dia = f.getDate();
    var day = f.getDay();
    var hora = AddZeroDate(f.getHours());
    var minuto = AddZeroDate(f.getMinutes());
    var segundo = AddZeroDate(f.getSeconds());
    var diaC = AddZeroDate(dia);
    var mesC = AddZeroDate(mes);

    format = (format === undefined || format === null) ? '/' : format;

    if (fechaEspecifica === undefined || fechaEspecifica === null) {
        if (diaMes === undefined || diaMes === null) {
            if (hr === undefined || hr === null) {
                return diaC + format + mesC + format + ano;
            } else {
                return hora + ':' + minuto + ':' + segundo + '  ' + diaC + format + mesC + format + ano;
            }
        } else {
            if (hr === undefined || hr === null) {
                return diasSemana[day] + ', ' + diaC + ' de ' + meses[mes] + ' de ' + ano;
            } else {
                return hora + ':' + minuto + ':' + segundo + ' , ' + diasSemana[day] + ', ' + diaC + ' de ' + meses[mes] + ' de ' + ano;
            }
        }
    } else {
        if (diaMes === undefined || diaMes === null) {
            if (hr === undefined || hr === null) {
                return diaC + format + mesC + format + ano;
            } else {
                return hora + ':' + minuto + ':' + segundo + '  ' + diaC + format + mesC + format + ano;
            }
        } else {
            if (hr === undefined || hr === null) {
                return diasSemana[day] + ', ' + diaC + ' de ' + meses[mes] + ' de ' + ano;
            } else {
                return hora + ':' + minuto + ':' + segundo + ' , ' + diasSemana[day] + ', ' + diaC + ' de ' + meses[mes] + ' de ' + ano;
            }
        }
    }

}

function setSociosSavingRemote(socio) {
    return $.ajax(
        {
            url: ENDPOINT + 'user',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localData.token
            },
            data: JSON.stringify(socio),
        }   
    );
}

function procesaformularioAccion() {
    $('#formularioAccion').submit(function (e) {
        e.preventDefault();
        console.log(e);

        let formularioCambioNombre = $("#formularioAccion").serialize();
        // lo convierte en un serializa con los & e =
        let objAdmin = serializeToObjectSocio(formularioCambioNombre);
        
        console.log(objAdmin);

    });
}

// este metodo convierte de serialize a objetos
function serializeToObjectSocio(val) {
    var valores = val.split("&");
    let obj = {}
    let subObj = {}
    valores.forEach(valor => {
        
        if (valor.split("=")[0].includes('lectura') || valor.split("=")[0].includes('numero') || valor.split("=")[0].includes('orden') || valor.split("=")[0].includes('estado') || valor.split("=")[0].includes('fechaInstalacion') || valor.split("=")[0].includes('direccion') || valor.split("=")[0].includes('medidaInicial')) {
            // console.log("Soy medidorsito");
            subObj = {
                ...subObj,
                        [valor.split("=")[0]]: valor.split("=")[1],
                    }
            
            obj ={
                ...obj,
                medidores: {

                        medidor1 : subObj,
                    }
                
                }
            

        } else {
            // console.log("Algo salio mal, medidor dañado");
            obj = {
                ...obj, // una funcion de edtascript6 para conbinar objetos
                [valor.split("=")[0]]: valor.split("=")[1], // partiendo el valor de foreach en clave valor separado por 2 puntos 

            }
           
        }
    });
    return obj;
}

function serializeToObject(val) {
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


function getTipo() {
    $.ajax({
        url: ENDPOINT + 'tipo',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localData.token
        },
        success: (data) => {            
            renderToType(data);
        }
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
        input.attr('value', tipo.idTipoUsuario);
        i.addClass('input-helper');
        label.append(input); // append colocar un elemento dentro 
        label.append(i);
        label.append(tipo.nombreTipoUsuario);
        tipos.append(label);
    });
    
}

function addMedidor(){
    $('#addMedidor').click(function (e) {
        e.preventDefault();
        console.log(e);
        cm += 1;
        
        var divROW = $('<div></div>');
        divROW.addClass('row');
        divROW.css('margin-top', '30px'); 

        var div1OR2Image = $('<div></div>');
        var divCardHeaderImage = $('<div></div>');
        var h2Image = $('<h2></h2>');
        var imageAGUA = $('<i>');
        imageAGUA.attr('src', '../../assets/img/512.png');
        imageAGUA.attr('width', '100%');
        imageAGUA.attr('alt', 'AGUA-OTB');
        h2Image.attr('align', 'center');
        h2Image.append(imageAGUA);
        divCardHeaderImage.addClass('card__header');
        divCardHeaderImage.append(h2Image);
        div1OR2Image.addClass('col-xs-1');
        div1OR2Image.addClass('col-sm-1');
        div1OR2Image.addClass('col-md-2');
        div1OR2Image.addClass('col-lg-2');
        div1OR2Image.append(divCardHeaderImage);

        //---------------------Orden del medidor------------------------
        var divCol10 = $('<div></div>');
        var divCol3 = $('<div></div>'); // divCol3.addClass('col-sm-3');
        var divInputGroup = $('<div></div>');
        var spanInputGroupAddon = $('<span></span>');
        var i = $('<i></i>');
        var ibajo = $('<i></i>');
        var divformGroup = $('<div></div>');
        var input = $('<input/>');

        divCol10.addClass('col-xs-11');
        divCol10.addClass('col-sm-11');
        divCol10.addClass('col-md-10');
        divCol10.addClass('col-lg-10');
        divCol3.addClass('col-sm-3');
        
        divInputGroup.addClass('input-group');
        spanInputGroupAddon.addClass('input-group-addon');
        i.addClass('zmdi');
        i.addClass('zmdi-balance');
        divformGroup.attr('form-group');
        input.attr('type','text');
        input.attr('name','orden_'+cm);
        input.addClass('form-control');
        input.attr('placeholder','Orden del medidor');
        ibajo.addClass('form-group__bar');

        divformGroup.append(ibajo);
        divformGroup.append(input);
        spanInputGroupAddon.append(i);
        divInputGroup.append(spanInputGroupAddon);
        divInputGroup.append(divformGroup);
        divCol3.append(divInputGroup);
        divCol10.append(divCol3);
        
        //---------------------Numero-----------------------

        var NdivCol3 = $('<div></div>'); // divCol3.addClass('col-sm-3');
        var NdivInputGroup = $('<div></div>');
        var NspanInputGroupAddon = $('<span></span>');
        var Ni = $('<i></i>');
        var Nibajo = $('<i></i>');
        var NdivformGroup = $('<div></div>');
        var Ninput = $('<input/>');

        NdivCol3.addClass('col-sm-3');
        NdivInputGroup.addClass('input-group');
        NspanInputGroupAddon.addClass('input-group-addon');
        Ni.addClass('zmdi');
        Ni.addClass('zmdi-account');
        NdivformGroup.attr('form-group');
        Ninput.attr('type','number');
        Ninput.attr('name','numero_'+cm);
        Ninput.addClass('form-control');
        Ninput.attr('placeholder','Número');
        Nibajo.addClass('form-group__bar');

        NdivformGroup.append(Nibajo);
        NdivformGroup.append(Ninput);
        NspanInputGroupAddon.append(Ni);
        NdivInputGroup.append(NspanInputGroupAddon);
        NdivInputGroup.append(NdivformGroup);
        NdivCol3.append(NdivInputGroup);
        divCol10.append(NdivCol3);
        
        //-----------------------estado----------------------------
        //append problem

        var EdivCol3 = $('<div></div>'); 
        var EdivformGroup = $('<div></div>');
        var Eselect = $('<select></select>');
        var Eoption = $('<option></option>');
        var EoptionTRUE = $('<option></option>');
        var EoptionFALSE = $('<option></option>');

        EdivCol3.addClass('col-sm-3');
        EdivformGroup.addClass('form-group');
        Eselect.addClass('select2');
        Eselect.attr('name','estado_'+cm);
        Eselect.attr('data-placeholder','Estado');
        Eoption.html('&nbsp;');
        EoptionTRUE.attr('value',true);
        EoptionTRUE.html('Medidor activo');
        EoptionFALSE.attr('value',false);
        EoptionFALSE.html('Medidor pasivo');

        Eselect.append(Eoption);
        Eselect.append(EoptionTRUE);
        Eselect.append(EoptionFALSE);
        EdivformGroup.append(Eselect);
        EdivCol3.append(EdivformGroup)
        divCol10.append(EdivCol3);

        //-----------------------fechaInstalacion----------------

        var FdivCol3 = $('<div></div>'); 
        var FdivInputGroup = $('<div></div>');
        var FspanInputGroupAddon = $('<span></span>');
        var Fi = $('<i></i>');
        var Fibajo = $('<i></i>');
        var FdivformGroup = $('<div></div>');
        var Finput = $('<input/>');

        FdivCol3.addClass('col-sm-3');
        FdivInputGroup.addClass('input-group');
        FspanInputGroupAddon.attr('input-group-addon');
        Fi.addClass('zmdi');
        Fi.addClass('zmdi-calendar');
        FdivformGroup.attr('form-group');
        Finput.attr('type','text');
        Finput.attr('name','fechaInstalacion_'+cm);
        Finput.addClass('form-control');
        Finput.addClass('date-picker');
        Finput.attr('placeholder','Fecha de Instalación');
        Fibajo.addClass('form-group__bar');

        FdivformGroup.append(Fibajo);
        FdivformGroup.append(Finput);
        FspanInputGroupAddon.append(Fi);
        FdivInputGroup.append(FspanInputGroupAddon);
        FdivInputGroup.append(FdivformGroup);
        FdivCol3.append(FdivInputGroup);
        divCol10.append(FdivCol3);
        
        //------------------------ROW-------------------------
        var divRow2 = $('<div></div>');
        divRow2.addClass('row');
        //------------------------direccion-------------------------

        var DdivCol5 = $('<div></div>'); 
        var DdivInputGroup = $('<div></div>');
        var DspanInputGroupAddon = $('<span></span>');
        var Di = $('<i></i>');
        var DdivformGroup = $('<div></div>');
        var Dselect = $('<select></select>');
        var Doption = $('<option></option>');
        var DoptionPrimavera = $('<option></option>');
        var Doption21 = $('<option></option>');
        var DoptionTeniente = $('<option></option>');

        DdivCol5.addClass('col-sm-5');
        DdivInputGroup.addClass('input-group');
        DspanInputGroupAddon.addClass('input-group-addon');
        Di.addClass('zmdi');
        Di.addClass('zmdi-pin');
        DdivformGroup.addClass('form-group');
        Dselect.addClass('select2');
        Dselect.attr('name', 'direccion_' + cm);
        Dselect.attr('data-placeholder', 'Dirección');
        Doption.html('&nbsp;');
        DoptionPrimavera.attr('value', 'Primavera');
        DoptionPrimavera.html('Primavera');
        Doption21.attr('value', '21 de Septiembre');
        Doption21.html('21 de Septiembre');
        DoptionTeniente.attr('value', 'Teniente');
        DoptionTeniente.html('Teniente');

        Dselect.append(Doption);
        Dselect.append(DoptionPrimavera);
        Dselect.append(Doption21);
        Dselect.append(DoptionTeniente);
        DspanInputGroupAddon.append(Di);
        DdivformGroup.append(Dselect);
        DdivInputGroup.append(DspanInputGroupAddon);
        DdivInputGroup.append(Dselect);
        DdivCol5.append(DdivInputGroup);

        //append ROW
        divRow2.append(DdivCol5);

        //-------------------------medidaActual---------------

        var MdivColsm5 = $('<div></div>');
        var MdivInputGroup = $('<div></div>');
        var MspanInputGroupAddon = $('<span></span>');
        var Mi = $('<i></i>');
        var MdivformGroup = $('<div></div>');
        var Minput = $('<input/>');

        MdivColsm5.addClass('col-sm-5')
        MdivInputGroup.addClass('input-group');
        MspanInputGroupAddon.attr('input-group-addon');
        Mi.addClass('zmdi');
        Mi.addClass('zmdi-input-svideo');
        MdivformGroup.addClass('form-group');
        Minput.addClass('form-control');
        Minput.addClass('text-center');
        Minput.attr('type', 'number');
        Minput.attr('name', 'lectura_' + cm);
        Minput.attr('placeholder', 'Medida Actual')

        MspanInputGroupAddon.append(Mi);
        MdivformGroup.append(Minput);
        MdivformGroup.append(ibajo);
        MdivInputGroup.append(MspanInputGroupAddon);
        MdivInputGroup.append(MdivformGroup);
        MdivColsm5.append(MdivInputGroup);
        
        //append ROW COL 5
        divRow2.append(MdivColsm5);
        //append ALL
        divROW.append(div1OR2Image);
        divROW.append(divCol10);
        divROW.append(divRow2);

        $('#listMedidores').append(divROW);
    });
}
