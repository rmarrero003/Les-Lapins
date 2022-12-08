let productos = []
let carrito = []

class Producto{
    constructor(id, nombre, precio, img){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
    }
    desplegarProductos(){
        const card = `
            <div class="card">
                <p>${this.nombre}</p>
                <div>
                    <img class='imgProducto' src=${this.img} alt="foto del producto"/>
                </div>
                <div>
                    <p>$${this.precio}</p>
                </div>
                <div class="btn-container">
                    <button id=${this.id} class='btnAgregar'>AGRGEGAR AL CARRITO</button>
                </div>
            </div>
        `
        const container = document.getElementById('container')
        container.innerHTML += card
    }
    agregarEvento(){
        const btnAgregar = document.getElementById(this.id)
        const productoEncontrado = productos.find(product => product.id == this.id)
        btnAgregar.addEventListener('click', () => agregarAlCarrito(productoEncontrado))
    }
}

let prod1 = new Producto('001', 'Remera Les Lapins', 6000, '../media/4.png')
let prod2 = new Producto('002', 'Buzo Les Lapins', 9000, '../media/5.png')
let prod3 = new Producto('003', 'Taza Les Lapins', 900, '../media/6.png')
let prod4 = new Producto('004', 'Llavero Les Lapins', 600, '../media/7.png')
let prod5 = new Producto('005', 'Gorro Les Lapins', 1000, '../media/8.png')



productos.push(prod1, prod2, prod3, prod4, prod5)

productos.forEach(e => {
    e.desplegarProductos()
}) 
productos.forEach(e => {
    e.agregarEvento()
})

function agregarAlCarrito(producto) {

    let enCarrito = carrito.find(prod => prod.id == producto.id)
    
    if(!enCarrito){
        carrito.push({...producto, cantidad: 1})
    } else {
        let carritoFiltrado = carrito.filter(prod => prod.id != producto.id)
        carrito = [
            ...carritoFiltrado, 
            { ...enCarrito, cantidad: enCarrito.cantidad + 1}
        ]
    }

    contador.innerHTML =  carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    
}
const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

