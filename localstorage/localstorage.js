console.log("Hola")

function guardardata(){
    let valueingresado = document.getElementById("nombreingresado").value
    console.log(valueingresado)
localStorage.setItem("nameuser", valueingresado)

}
function borrardata(){
    localStorage.clear()
}
function borrarundato(){
    localStorage.removeItem("nameuser")
}
// objeto
let profesor = {
    nombre:"esteban",
    edad: 29,
    trabajando: true,
}
//array de objetos
let alumnos = [{nombre:"Lorenzo",estado:"cursando",notafinal:1,},
{nombre:"Nicolas",estado:"cursando",notafinal:0,},
{nombre:"Tomas",estado:"libre",notafinal:5,},]

profesorJSON = JSON.stringify(profesor)
console.log(profesor)
console.log(profesor.nombre)
alumnosJSON = JSON.stringify(alumnos)
console.log(alumnos)
console.log(alumnos[0])

let objetoMarcos = {"nombre":"Marcos","estado": "en proceso"}
let objetoJSON = JSON.stringify(objetoMarcos)
console.log(objetoJSON)


