let datos = "variable"
let listavacia = []


function generarNumeroAlAzar(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function pedirdatos() {
    let datosusuario = prompt("ingrese un numero")
    
    return parseInt(datosusuario)
}

function agregarnmralista(cantidad){
    for(let i=0;i<cantidad;i++){
        let numero=generarNumeroAlAzar(100,999)
        listavacia.push(numero)
    }
}

function mostrarlista(lista){
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        console.log(element)
    }
}

datos = pedirdatos()
agregarnmralista(datos)
mostrarlista(listavacia)
console.log("==========")
mostrarlista(listavacia.sort())
console.log("==========")
mostrarlista(listavacia.sort((a, b) => b - a))


