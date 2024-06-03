var spTotal = document.getElementById("Total");
var listaCarro = document.getElementById("carrito");
var carroSinRepetidos = JSON.parse(productos);
var productosHTML = document.getElementById("productos");
mostrarProductos();

function mostrarProductos() 
{
for (var pro of carroSinRepetidos) {
    var unNodo = document.createElement('div');
    unNodo.classList.add('card', 'col-sm-4');

    var unNodoCardBody = document.createElement('div');
    unNodoCardBody.classList.add('card-body');

    var unNodoTitle = document.createElement('h5');
    unNodoTitle.classList.add('card-title');
    unNodoTitle.textContent = pro.nombre;

    var unNodoImagen = document.createElement('img');
    unNodoImagen.classList.add('img-fluid');
    unNodoImagen.setAttribute('src', pro.imagen);

    var unNodoPrecio = document.createElement('p');
    unNodoPrecio.classList.add('card-text');
    unNodoPrecio.textContent = '$' + pro.precio;

    var unNodoBoton = document.createElement('button');
    unNodoBoton.classList.add('btn', 'btn-primary');
    unNodoBoton.textContent = '+';
    unNodoBoton.setAttribute('marcador', pro.id);
    unNodoBoton.addEventListener('click', agregarCarro);

    unNodoCardBody.appendChild(unNodoImagen);
    unNodoCardBody.appendChild(unNodoTitle);
    unNodoCardBody.appendChild(unNodoPrecio);
    unNodoCardBody.appendChild(unNodoBoton);
    unNodo.appendChild(unNodoCardBody);
    productosHTML.appendChild(unNodo);
}
}
function agregarCarro () {
    carroSinRepetidos[(this.getAttribute("marcador")-1)].cantidad++;
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
