
    const productos = [
        { nombre: "Azucar ", precio: 1000, stock: 10, imagen: '', descripcion: " Ledesma" },
        { nombre: "Yerba ", precio: 3500, stock: 20, imagen: '', descripcion:"Playadito" },
        { nombre: "Cafe ", precio: 5000, stock: 30, imagen: '', descripcion:"Arlistan" },
        { nombre: "Te ", precio: 15000, stock: 15, imagen: '', descripcion: "Big Ben" },
        { nombre: "Fideos ", precio: 7, stock: 75, imagen: '', descripcion: "Aitala" },
        { nombre: "Arroz ", precio: 4000, stock: 16, imagen: '', descripcion: "Gallo" },
        { nombre: "Polenta ", precio: 1500, stock: 20, imagen: '', descripcion: "Prestopronta" },
        { nombre: "Aceite ", precio: 6000, stock: 8, imagen: '', descripcion: "Cañuelas" },
        { nombre: "Vinagre ", precio: 6000, stock: 20, imagen: '', descripcion: "Marolio" },
        { nombre: "Salsa ", precio: 5000, stock: 20, imagen: '', descripcion: "Marolio" },
        { nombre: "Arbejas ", precio: 3000, stock: 20, imagen: '', descripcion: "Cañuelas" },
        { nombre: "Lentejas ", precio: 10000, stock: 20, imagen: '', descripcion: "Canale" },
        { nombre: "Galletitas ", precio: 3000, stock: 25, imagen: '', descripcion: "Preferida" },
        { nombre: "Pan Rallado ", precio: 3000, stock: 36, imagen: '', descripcion: "Generico" },
        { nombre: "Detergente ", precio: 7000, stock: 18, imagen: '', descripcion: "Ala" },
        { nombre: "Lavandina ", precio: 5000, stock: 6, imagen: '', descripcion: "Ayudin" },
        { nombre: "Jabon Tocador ", precio: 9000, stock: 15, imagen: '', descripcion: "Elvive" },
        { nombre: "Shampoo ", precio: 13000, stock: 20, imagen: '', descripcion: "Plushbelle" },
        { nombre: "Acondicionador", precio: 16000, stock: 9, imagen: '', descripcion: "Sedal" },
        { nombre: "P. Higienico ", precio: 12000, stock: 10, imagen: '', descripcion: "Suave" }];

    const productosDiv = document.getElementById('productos');

productos.forEach((producto, index) => {
    const productoDiv = document.createElement('div');
    productoDiv.className = 'producto';
    productoDiv.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
        <p class="producto-nombre">${producto.nombre}</p>
        <p class="productodescripcion">${producto.descripcion}</p>
        <p class="productostock"> Stock: ${producto.stock}  -   Precio: $${producto.precio.toFixed(2)}</p>
        <label for="cantidad-${index}" class="producto-label">Cantidad:</label>
        <input type="number" id="cantidad-${index}" value="0" min="0" max="${producto.stock}">
    `;
    productosDiv.appendChild(productoDiv);
});

function calcularTotal() {
    let total = 0;
    let error = false;
    let mensajeError = '';

    productos.forEach((producto, index) => {
        const cantidadInput = document.getElementById(`cantidad-${index}`);
        const cantidad = parseInt(cantidadInput.value);

        if (cantidad > producto.stock) {
            error = true;
            mensajeError += `No puedes seleccionar más de ${producto.stock} ${producto.nombre}. \n`;
        } else {
            total += producto.precio * cantidad;
        }
    });

    if (error) {
        alert(mensajeError.trim());
    } else {
        document.getElementById('total').innerText = `Total de la compra $: ${total.toFixed(2)}`;
    }
}