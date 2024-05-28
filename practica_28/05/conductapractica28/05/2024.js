var carro =[];
var spTotal = document.getElementById("total");
var listaCarro = document.getElementById("carrito");
function agregarCarro1(){
    var objProducto = {
    id: 1,
    nombre:"Producto1",
    precio : 375,
    };
    carro.push(objProducto);
    calcularTotal();
    mostrarEnCarro();
}
function calcularTotal(){
    var elTotal = 0;
    for(var p of carro){
    elTotal += p.precio;
}
spTotal.textContent = elTotal;
}