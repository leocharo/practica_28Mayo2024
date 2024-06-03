var spTotal = document.getElementById("Total");
var listaCarro = document.getElementById("carrito");
var carroSinRepetidos = [];
productos();

function productos(){
    var objProducto = {
        id: 1,
        nombre: "Producto 1",
        precio: 345,
        cantidad: 0
    };
    carroSinRepetidos.push(objProducto);
    
    objProducto = {
        id: 2,
        nombre: "Producto 2",
        precio: 876,
        cantidad: 0
    };
    carroSinRepetidos.push(objProducto);
    
    objProducto = {
        id: 3,
        nombre: "Producto 3",
        precio: 194,
        cantidad: 0
    };
    carroSinRepetidos.push(objProducto);
}

function agregarCarro1(){
    carroSinRepetidos[0].cantidad++;
    calcularTotal();
    mostrarEnCarro();
}

function agregarCarro2(){
    carroSinRepetidos[1].cantidad++;
    calcularTotal();
    mostrarEnCarro();
}

function agregarCarro3(){
    carroSinRepetidos[2].cantidad++;
    calcularTotal();
    mostrarEnCarro();
}

function calcularTotal(){
    var elTotal = 0;
    for(var p of carroSinRepetidos){
        elTotal += (p.precio * p.cantidad);
    }
    spTotal.textContent = elTotal;
}

function mostrarEnCarro(){
    listaCarro.textContent = "";
    for(var objP of carroSinRepetidos){
        if(objP.cantidad > 0){
            var nodoProductoEnCarro = document.createElement("li");
            nodoProductoEnCarro.classList.add("list-group-item", "text-right", "mx-2");
            nodoProductoEnCarro.textContent = objP.nombre + " - $" + objP.precio;
            listaCarro.appendChild(nodoProductoEnCarro);
        }
    }
}

function vaciar(){
    for(var objP of carroSinRepetidos){
        objP.cantidad = 0;
    }
    calcularTotal();
    mostrarEnCarro();
}
