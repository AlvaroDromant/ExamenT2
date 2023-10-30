// Autor: Alvaro Dromant Ligero (Estudiante)
//GitHub: 

window.addEventListener("load", iniciarSesion)

let saldo = 1000
const PIN_CORRECTO = "1234"
let intentosRestantes = 3

//Declaramos las variables
const BotonDepositar = document.getElementById("depositar")
const BotonRetirar = document.getElementById("retirar")
const BotonTransferir = document.getElementById("transferir")
const BotonCambiarContraseña = document.getElementById("cambiarContrasena")
const BotonSalir = document.getElementById("salir")
const saldoTemplate = document.getElementById("saldo")

BotonDepositar.addEventListener = ("click", depositar)
BotonRetirar.addEventListener = ("click", retirar)
BotonTransferir.addEventListener = ("click", transferir)
BotonCambiarContrasena.addEventListener = ("click", cambiarContrasena)
BotonSalir.addEventListener = ("click", salir)

//Funcion para salir del programa llevandote a otra pagina
function salir(){
    alert("Ha salido del cajero. Hasta luego.")
    window.location.replace("/templates/despedida.html")
}


function actualizarSaldo() {
     saldoTemplate.innerText = `${saldo} €`
}

// Funciones de nuestro cajero automatico
function depositar() {
    const deposito = parseFloat(prompt("Ingrese el saldo que quiera depositar"))
    if(isNaN(deposito) || deposito <= 0 ){
    alert("La cantidad que ha depositado no es valida. Intentelo de nuevo.")
    }
    else {
        saldo += deposito
        alert(`La cantidad que ha depositado es: ${deposito.toFixed(2)} €`)
        actualizarSaldo()
    }
    
} 

function retirar() {
    const retiro = parseFloat(prompt("Ingrese el saldo que desea retirar"))
    if(isNaN(retiro) || retiro > saldo || retiro <= 0){
        alert("La cantidad que ha retirado no es valida. Intentelo de nuevo")
    }
    else {
        saldo -= retiro
        alert(`La cantidad que ha retirado es: ${retiro.toFixed(2)}`)
        actualizarSaldo()
    }
}

function iniciarSesion(){
    let pin = prompt("Ingrese su PIN:")

    while (pin !== PIN_CORRECTO && intentosRestantes > 1){
    intentosRestantes--
    alert("El PIN no es correcto. Intentelo de nuevo.")
    pin = prompt("Ingrese su PIN:")
    }

    if(pin === PIN_CORRECTO){
        alert("Inicio de sesion exitoso")
        actualizarSaldo()
    }
    else {
        alert("Inicio de sesion fallido")
        window.location.replace("/templates/pinIncorrecto.html")
    }


}

function transferir() {
    const trans = parseFloat(prompt("Ingrese la cantidad que quiera transferir"))

    if(isNaN(trans) || trans <= 0 || trans > saldo){
        alert("La cantidad no es invalida. Intentelo de nuevo")
    }
    else{
      const cuenta = prompt("Introduce la cuenta destino:")
      saldo -= trans
      alert(`La cantidad que ha transferido es: ${trans.toFixed(2)} € al numero de cuenta: ${cuenta}`)
      actualizarSaldo()
    }
}


function cambiarContrasena() {
    const pin = prompt("Ingrese su pin actual")

    if(pin !== PIN_CORRECTO){
        alert("El PIN es incorrecto")
    }
    else{
        const nuevoPin = prompt("Ingrese el nuevo pin")
        alert("La contraseña se ha guardado correctamente")
        PIN_CORRECTO = nuevoPin
    }
}