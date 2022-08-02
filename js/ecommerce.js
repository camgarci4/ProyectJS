const categorias = [
    { nombre: 'artistas', estampas: ['Harry Styles', 'Selena Quintanilla', 'Justin Bieber', 'Alex Turned'] },
    { nombre: 'peliculas', estampas: ['El logo del Wall Street', 'El viaje de Chihiro', 'The Avengers'] },
    { nombre: 'series', estampas: ['Vis a Vis', 'Sherlock Holmes', 'The Walking Dead', 'Vikings'] },
    { nombre: 'clasicos', estampas: ['Nike', 'Jordan', 'Gatitos', 'Tradicional'] },
]

const remeras = [
    { nombre: 'Harry Styles', precio: 2000, talles: ['s', 'm', 'l', 'xl', 'xxl'] },
    { nombre: 'Selena Quintanilla', precio: 1900, talles: [, 'm', 'l', 'xl', 'xxl'] },
    { nombre: 'Justin Bieber', precio: 1900, talles: ['s', 'm', 'l'] },
    { nombre: 'Alex Turned', precio: 1700, talles: ['s', 'm', 'l'] },
    { nombre: 'El logo de Wall Street', precio: 1800, talles: ['s', 'l', 'xl'] },
    { nombre: 'El viaje de Chihiro', precio: 1800, talles: ['s', 'm', 'l', 'xl', 'xxl'] },
    { nombre: 'The Avengers', precio: 2100, talles: ['s', 'm', 'xl', 'xxl'] },
    { nombre: 'Vis a vis', precio: 1700, talles: ['m', 'l', 'xl'] },
    { nombre: 'Sherlock Holmes', precio: 1900, talles: ['s', 'm', 'l', 'xl'] },
    { nombre: 'The Walking Dead', precio: 1700, talles: ['s', 'm', 'l', 'xxl'] },
    { nombre: 'Vikings', precio: 2000, talles: ['s', 'l', 'xl', 'xxl'] },
    { nombre: 'El viaje de Chihiro', precio: 1800, talles: ['s', 'm', 'l', 'xl', 'xxl'] },
    { nombre: 'Nike', precio: 2100, talles: ['s', 'm', 'xl', 'xxl'] },
    { nombre: 'Jordan', precio: 2000, talles: ['m', 'l', 'xl', 'xxl'] },
    { nombre: 'Gatitos', precio: 1900, talles: ['s', 'm', 'l', 'xxl'] },
    { nombre: 'Tradicional', precio: 1800, talles: ['s', 'm', 'l'] },
]

let precioRemera = 0;
let carrito = [];
let totalCarrito = 0;

function mostrarMenu() {
    let input = prompt("Elegí una categoría:\n Artistas\n Peliculas\n Series\n Clasicos\n-'Carrito' para ver el carrito.");

    let estampas = categorias.find((categoria) => {
        return categoria.nombre == input
    }).estampas;
    
    //let estampas = encontrarCategoria(input).estampas;


    remerasFiltradas = remeras.filter((remera) => {
        return estampas.includes(remera.nombre)
    })
    
    //remerasFiltradas = filtrarRemeras(estampas);

    
    let infoRemeras = remerasFiltradas.map(remera => {
        return remera.nombre + " $" + remera.precio
    })
    

    /*let infoRemeras = []
    for (let i = 0; i < remerasFiltradas.length; i++) {
        infoRemeras.push(remerasFiltradas[i].nombre + " $" + remerasFiltradas[i].precio)
    }*/

    /*
    const infoRemeras = [
        'Harry Styles $1500',
        'Selena Quintanilla $1500',
        'Justin Bieber $1700',
    ]
    */

    listaEstampas = infoRemeras.join("\n");
    let diseño = prompt("Diseños disponibles:\n" + listaEstampas);

    let hayRemeras = consultarStock(diseño);

    if (!hayRemeras) {
        alert("Actualmente no tenemos stock de " + diseño);
        return;
    }

    let cantidad = prompt("Gracias por elegir nuestra remera de " + diseño + ". Ingrese la cantidad deseada por el precio de $" + precioRemera + " cada una:");

    let itemIndex = carrito.findIndex(item => {
        return item.estampa.toLowerCase() == diseño.toLowerCase()
    })

    if (itemIndex >= 0) {
        carrito[itemIndex].cantidad += parseInt(cantidad);
        carrito[itemIndex].subtotal += cantidad * precioRemera;
    } else {
        carrito.push({
            estampa: diseño,
            cantidad: parseInt(cantidad),
            subtotal: cantidad * precioRemera
        })
    }

    totalCarrito += (cantidad * precioRemera)
    console.log(carrito);
    console.log(totalCarrito);

    alert("Se agregó " +diseño+ " al carrito. El total hasta el momento es $" + totalCarrito);

    mostrarMenu();
}

function filtrarRemeras(estampas) {
    let remerasFiltradas = [];

    for (let i = 0; i < remeras.length; i++) {
        if (estampas.indexOf(remeras[i].nombre) >= 0) {
            remerasFiltradas.push(remeras[i]);
        }
    }

    return remerasFiltradas;
}

function encontrarCategoria(categoria) {
    for (let i = 0; i < categorias.length; i++) {
        if (categorias[i].nombre == categoria) return categorias[i];
    }
    return;
}

mostrarMenu();

function consultarStock(diseño) {
    infoRemera = remeras.find(remera => {
        return remera.nombre.toLowerCase() == diseño.toLowerCase();
    });

    if (!infoRemera) return false;

    precioRemera = infoRemera.precio;
    return true;
}