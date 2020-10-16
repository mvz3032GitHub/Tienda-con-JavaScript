window.onload = function () {
    let baseDeDatos = [
        {
            id: 1,
            nombre: 'Caja de Té',
            precio: 2067,
            imagen: 'img/1-caja-te-.jpg'
        },
        {
            id: 2,
            nombre: 'Set de Juguetes',
            precio: 310,
            imagen: 'img/2-juguetes.jpg'
        },
        {
            id: 3,
            nombre: 'Máscara de Diablo',
            precio: 2667,
            imagen: 'img/3-mascara-diablo.jpg'
        },
        {
            id: 4,
            nombre: 'Revistero',
            precio: 507,
            imagen: 'img/4-revistero.jpg'
        },
        {
            id: 5,
            nombre: 'Marco Árabe',
            precio: 911,
            imagen: 'img/5-marco-arabe.jpg'
        },
        {
            id: 6,
            nombre: 'Kleenera Cuadrada',
            precio: 870,
            imagen: 'img/6-kleenera-cuadrada.jpg'
        },
        {
            id: 7,
            nombre: 'Plato Decorado',
            precio: 1150,
            imagen: 'img/7-plato-decorado.jpg'
        },
        {
            id: 8,
            nombre: 'Joyero',
            precio: 1237,
            imagen: 'img/8-joyero.jpg'
        },
        {
            id: 9,
            nombre: 'Cristo Bizantino',
            precio: 1564,
            imagen: 'img/9-cristo-bizantino.jpg'
        }
    ]

    let total = 0;
    let carrito = [];
    let $total = document.querySelector('#total');
    let $carrito = document.querySelector('#carrito');
    let $productos = document.querySelector('#productos');
    let $botonVaciar = document.querySelector('#boton-vaciar');

    function pintarProductos() {
        for (let info of baseDeDatos) {
            let miNodo = document.createElement('div');
            miNodo.classList.add('detalles');

            let contenedorDetalles = document.createElement('div');
            contenedorDetalles.classList.add('cont-det');

            let imagenProducto = document.createElement('img');
            imagenProducto.classList.add('img_cat');
            imagenProducto.setAttribute('src', info['imagen']);
            
            let nombreProducto = document.createElement('span');
            nombreProducto.classList.add('display-block');
            nombreProducto.textContent = info['nombre'];

            let precioProducto = document.createElement('span');
            precioProducto.classList.add('display-block');
            precioProducto.textContent = '$' + info['precio'].toFixed(2);

            let botonAgregar = document.createElement('button');
            botonAgregar.classList.add('boton-carrito');
            botonAgregar.textContent = '+';
            botonAgregar.setAttribute('marcador', info['id']);
            botonAgregar.addEventListener('click', agregarCarrito);

            contenedorDetalles.appendChild(imagenProducto);
            contenedorDetalles.appendChild(nombreProducto);
            contenedorDetalles.appendChild(precioProducto);
            contenedorDetalles.appendChild(botonAgregar);
            miNodo.appendChild(contenedorDetalles);
            $productos.appendChild(miNodo);
        }
    }

    function agregarCarrito () {
        // Agregar miNodo al carrito
        carrito.push(this.getAttribute('marcador'))
        calcularTotal();
        actualizarCarrito();
    }

    function actualizarCarrito() {
        // Vaciamos todo el html
        $carrito.textContent = '';
        // Quitamos los duplicados
        let carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach(function (item) {
            // Obtenemos el item que necesitamos de la variable base de datos
            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            // Cuenta el número de veces que se repite el producto
            let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            let miNodo = document.createElement('li');
            miNodo.textContent = `${numeroUnidadesItem} ${miItem[0]['nombre']} = $${miItem[0]['precio'].toFixed(2)}`;
            // Boton de borrar
            let miBoton = document.createElement('button');
            miBoton.classList.add('boton-carrito');
            miBoton.textContent = 'Quitar';
            miBoton.style.marginLeft = '1rem';
            miBoton.setAttribute('item', item);
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            $carrito.appendChild(miNodo);
        })
    }

    function borrarItemCarrito() {
        console.log()
        // Obtenemos el producto ID que hay en el boton pulsado
        let id = this.getAttribute('item');
        // Borramos todos los productos
        carrito = carrito.filter(function (carritoId) {
            return carritoId !== id;
        });
        // volvemos a renderizar
        actualizarCarrito();
        // Calculamos de nuevo el precio
        calcularTotal();
    }

    function calcularTotal() {
        // Limpiamos precio anterior
        total = 0;
        // Recorremos el array del carrito
        for (let item of carrito) {
            // De cada elemento obtenemos su precio
            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            total = total + miItem[0]['precio'];
        }
        // Formateamos el total para que solo tenga dos decimales
        let totalDosDecimales = total.toFixed(2);
        // Renderizamos el precio en el HTML
        $total.textContent = totalDosDecimales;
    }

    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        actualizarCarrito();
        calcularTotal();
    }

    // Eventos
    $botonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    pintarProductos();
} 
