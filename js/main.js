class Producto {
    constructor(nombre, autor, precio) {
        this.nombre = nombre;
        this.autor = autor;
        this.precio = precio;
    }
}
let listaProductos = [
    {nombre: "Biblia de estudio MacArthur",
    autor: "John MacArthur",
    precio: "12000"},
    {nombre: "Biblia de estudio de la reforma",
    autor: "R.C. Sproul",
    precio: "13000"},
    {nombre: "Biblia de estudio Thompson",
    autor: "James Thompson",
    precio: "10000"},
    {nombre: "Institución de la religión cristiana",
    autor: "Juan Calvino",
    precio: "14000"},
    {nombre: "Teología sistemática reformada",
    autor: "Joel Beeke & Paul Smalley",
    precio: "14000"},
    {nombre: "El progreso del peregrino",
    autor: "John Bunyan",
    precio: "3000"}
];
const agregarProd = () => {
    let nombre = prompt("Ingrese el nombre del producto");
    let autor = prompt("Ingrese el nombre del autor");
    let precio = parseFloat(prompt("Ingrese el precio del producto"));
    let prod = new Producto(nombre, autor, precio);
    listaProductos.push(prod);
    console.log(listaProductos);
}

for(let producto of listaProductos){
    console.log(`${producto.nombre} (${producto.autor}) $${producto.precio}`)
}

agregarProd()

ingresarDatos()
function ingresarDatos() {
    let valor = parseInt(prompt(`Ingrese el valor del producto que desea comprar:`))
    let cuotas = parseInt(prompt(`¿En cuántas cuotas va a pagar? (3, 6, 12)`))
    while (cuotas != 3 && cuotas != 6 && cuotas != 12) {
        alert(`Por favor, ingrese una opción válida`)
        cuotas = parseInt(prompt(`¿En cuántas cuotas va a pagar? (3, 6, 12)`))
    }
    let codigo = prompt(`Si tiene un código de descuento, puede ingresarlo:`)
    let pct = calPorcentaje(codigo)
    let precioFinal = calPrecioFinal(valor, pct, cuotas)
    mostrar(codigo, valor, pct, precioFinal, cuotas)
}

function calPrecioFinal(valor, pct, cuotas) {
    let precioFinal = valor / (1 + pct / 100) / cuotas
    return precioFinal.toFixed(2)
}

function calPorcentaje(codigo) {
    switch (codigo) {
        case "deluxe":
            return 15
        case "premium":
            return 10
        case "offer":
            return 5
        default:
            return 0
    }
}

function mostrar(codigo, valor, pct, precioFinal, cuotas) {
document.getElementById("resultado").innerHTML=`Con el código "${codigo}", el producto seleccionado ($${valor}) recibe un descuento del ${pct}%. Total a pagar: $${precioFinal} en ${cuotas} cuotas.`
}