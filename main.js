console.log("soy externo")
//para acceder a un Id
let parrafo1 = document.getElementById("pConId")
console.log(parrafo1)
//para accerder a una clase
let parrafo2 = document.getElementsByClassName("pConClass")
console.log(parrafo2)
//para acceder a una etiqueta
let parrafo3 = document.getElementsByTagName("p")
console.log(parrafo3)

// cambiar texto con un boton
function cambiartitular(){
let titular1 = document.getElementById("titular")

titular1.innerText = "Otra cosa"
}

function haceraparecer(){
let contenedor = document.getElementById("vacio")
contenedor.innerHTML = "<h2> BU!! </h2>"

contenedor.className ="titularsecundario"
let  texto = "Hola"
contenedor.append(texto)
}

function borrarpais(){
let paises = document.getElementsByClassName("paises")
paises[0].remove()
}
function sumar(valor){
    return parseInt(valor) + 1
}

function sumaredad(){
    let nombreusuario = document.getElementById("nombre").value
    let edadusuario = document.getElementById("edad").value
    document.body.append(" El nombre del usuario es: " + nombreusuario + " y va a cumplir " + (parseInt(edadusuario)+1))

    let chequeado = document.getElementById("bases").checked 
    if(chequeado!= true ){
        alert("Debe estar de acuerdo con las condiciones")
    }
    //EDMASCRIPT 6
    // template literal
    //backtick ``
    document.body.append(`El nombre usuario es ${nombreusuario} y va a cumplir ${sumar(edadusuario)}`)
}

// query = consulta
let parrafos = document.querySelectorAll("p")
console.log(parrafos)
let seleccionaruno = document.querySelector("#titular")
console.log(seleccionaruno)
let seleccionarclase = document.querySelectorAll(".paises")
console.log(seleccionarclase)
let seleccionarclaseunico = document.querySelector(".paises")
console.log(seleccionarclaseunico)

/*
1) Crear una web nueva con la estructura basica
2) Enlazarla a Javascript
3) Crear un formulario de registro 
4) Preguntar si la edad es mayor a 18, en caso contrario, indicarle al usuario que no se puede regsitrar
5) Obligar al usuario a estar de acuerdo con terminos y condiciones 
6) Mostrarle al usuario en un parrafo, los datos que ingreso
*/