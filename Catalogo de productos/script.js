function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    
    // Buscar en las categorías del menú lateral
    const menuItems = document.querySelectorAll('.list-items li');
    menuItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // Buscar en la sección de productos
    const productItems = document.querySelectorAll('.productos-grid .producto');
    productItems.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    }); // <- Cerramos el bloque forEach para los productos
}
        document.addEventListener('DOMContentLoaded', function() {
            console.log("DOM completamente cargado y analizado");
        
            const carrito = [];
            const botonesCompra = document.querySelectorAll('.boton-compra');
            const carritoContenido = document.querySelector('.carrito-contenido');
            const vaciarCarritoBtn = document.querySelector('.vaciar-carrito');
            const carritoLateral = document.querySelector('.carrito-lateral');
        
            botonesCompra.forEach(boton => {
                boton.addEventListener('click', function() {
                    console.log("Botón de compra clicado");
                    
                    const producto = {
                        nombre: boton.getAttribute('data-nombre'),
                        precio: boton.getAttribute('data-precio'),
                        imagen: boton.getAttribute('data-imagen'),
                        cantidad: 1
                    };
        
                    const productoExistente = carrito.find(item => item.nombre === producto.nombre);
                    if (productoExistente) {
                        productoExistente.cantidad += 1;
                        console.log(`Producto ${producto.nombre} ya en el carrito, aumentando cantidad.`);
                    } else {
                        carrito.push(producto);
                        console.log(`Producto ${producto.nombre} agregado al carrito.`);
                    }
        
                    actualizarCarrito();
                });
            });
        
            function actualizarCarrito() {
                carritoContenido.innerHTML = '';
        
                carrito.forEach(producto => {
                    const itemCarrito = document.createElement('div');
                    itemCarrito.classList.add('carrito-item');
        
                    itemCarrito.innerHTML = `
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                        <h4>${producto.nombre}</h4>
                        <p>$${producto.precio} x ${producto.cantidad}</p>
                    `;
        
                    carritoContenido.appendChild(itemCarrito);
                });
        
                if (carrito.length === 0) {
                    carritoContenido.innerHTML = '<p>Tu carrito está vacío.</p>';
                }
            }
        
            vaciarCarritoBtn.addEventListener('click', function() {
                console.log("Carrito vaciado");
                carrito.length = 0;
                actualizarCarrito();
            });
        
            // Función para mostrar/ocultar el carrito
            function toggleCarrito() {
                carritoLateral.classList.toggle('active');
            }
        
            window.toggleCarrito = toggleCarrito; // Hacer accesible la función desde el HTML
        });

        document.addEventListener('DOMContentLoaded', function() {
            const menuBtn = document.querySelector('.menu-btn');
            const sidebar = document.getElementById('sidebar');
        
            menuBtn.addEventListener('click', function() {
                sidebar.classList.toggle('active'); // Muestra u oculta el sidebar
            });
        });

 /* Función para mostrar y ocultar el menú desplegable */
 function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Cerrar el menú si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}