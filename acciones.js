function calcular() {
    let cadapersona = document.getElementById("persona")
    let elprecio = document.getElementById("precio")
    document.write(cadapersona, "$", elprecio);
}

var boton = document.getElementById("miboton");
boton.addEventListener("click", function(){
    var respuesta = document.getElementById("mirespuesta");
    respuesta.innerHTML = calcular();
})


// let costTot = document.getElementById("costo-total")

// function calcular() {
// let persona = document.getElementById("persona")
// let precio = document.getElementById("precio")
// let totalpersona = persona+ $ +precio;

// }

// let cost = precio;

// costTot.textContent = `$${cost}`
