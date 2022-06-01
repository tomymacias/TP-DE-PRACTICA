document.getElementById("nombreingresado").value = localStorage.getItem("nombre")
document.getElementById("apellidoingresado").value = localStorage.getItem("apellido")
document.getElementById("edadingresada").value = localStorage.getItem("edad")

function guardardata(){
    let nombreingresado = document.getElementById("nombreingresado").value
    console.log(nombreingresado)
    
    localStorage.setItem("nombre",nombreingresado)

    let apellidoingresado = document.getElementById("apellidoingresado").value
    
    localStorage.setItem("apellido",apellidoingresado)

    let edadingresada = document.getElementById("edadingresada").value
    
    localStorage.setItem("edad",edadingresada)
}
    
