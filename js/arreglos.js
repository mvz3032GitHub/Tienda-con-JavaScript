var arrayPrecios = [2067, 310, 2667, 507, 911, 870, 1150, 1237, 1564];
var arrayImagenes = ["1-caja-te-.jpg", "2-juguetes.jpg", "3-mascara-diablo.jpg", "4-revistero.jpg", "5-marco-arabe.jpg", "6-kleenera-cuadrada.jpg", "7-plato-decorado.jpg", "8-joyero.jpg", "9-cristo-bizantino.jpg"];
var arrayProductos = ["Caja de Té", "Set de Juguetes", "Máscara de Diablo", "Revistero", "Marco Árabe", "Kleenera Cuadrada", "Plato Decorado", "Joyero", "Cristo Bizantino"];

function verCatalogo() {
    for (var i = 0; i < arrayPrecios.length; i++) {
        document.write(
            `<div class='detalles'><img class='img_cat' src='img/${arrayImagenes[i]}' alt=''> <br><span>${arrayProductos[i]}</span> <br><span class='fondo'>$${arrayPrecios[i].toFixed(2)}</span></div>`
        );
    }
}