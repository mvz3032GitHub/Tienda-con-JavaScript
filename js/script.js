// Alerta de bienvenida
window.alert('¡Bienvenidas mujeres emprendedoras!');

// Mensaje de confirmación
window.confirm('¿Deseas saber acerca de autonomía económica de las mujeres?');

// Entrada de datos
var texto;
var persona = window.prompt('Hola!, nos puedes proporcionar tu nombre?', 'amiga');

if (persona == null || persona == "") {
    texto = 'No quisiste proporcionar tu nombre.';
} else {
    texto = 'Hola ' + persona + '!, te invitamos a ser emprendedora y a desarrollar tu autonomía económica.';
}

window.alert(texto);

// Obtener fecha y hora del sistema
var fechaHora = setInterval(elReloj, 1000);

function elReloj() {
    var d = new Date();

    var dia = d.getDate();
    var mes = d.getMonth();
    var ano = d.getFullYear();

    var hrs = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    if (hrs > 12){
        hrs = hrs - 12;
    }
 
    if (hrs == 0) {
        hrs = 12;
    }

    if (min <= 9) {
        min = '0' + min;
    }

    if (sec <= 9) {
        sec = '0' + sec;
    }

    if (dia <= 9) {
        dia = '0' + dia;
    }

    if (mes <= 9) {
        mes = '0' + mes;
    }

    ano = String(ano);
    ano = ano.substr(2);

    var laHora = hrs + ':' + min + ':' + sec;
    var laFecha = dia + '/' + mes + '/' + ano;

    document.getElementById('fecha_hora').innerHTML = laFecha + ' ' + laHora;
}
