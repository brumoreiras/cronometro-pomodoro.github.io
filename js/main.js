let min = document.querySelector('#minutos');
let seg = document.querySelector('#segundos');
let milis = document.querySelector('#milissegundos');

let contadorMili = 0
let contadorSeg = 0
let contadorMin = 0
let disparar

function contaMilissegundos() {
    contadorMili++
    if (contadorMili < 10) {
        milis.innerHTML = '0' + contadorMili
    } else {
        milis.innerHTML = contadorMili
    }
    if (contadorMili == 99) {
        contadorMili = 0
        contaSegundos()
    }
}

function contaSegundos() {
    contadorSeg++
    if (contadorSeg < 59) {
        seg.innerHTML = '0' + contadorSeg
    } else {
        seg.innerHTML = contadorSeg
    }
    if (contadorSeg == 59) {
        contadorSeg = 0
        contaMinutos()
    }
}

function contaMinutos() {
    contadorMin++
    if (contadorMin < 10) {
        min.innerHTML = '0' + contadorMin
    } else {
        min.innerHTML = contadorMin
    }
}

function iniciar() {
    clearInterval(disparar)
    disparar = setInterval(() => {
        contaMilissegundos()
    }, 10)
}

function stop(){
    clearInterval(disparar)
}
function resetar(){
    min.innerHTML = '00'
    seg.innerHTML = '00'
    milis.innerHTML = '00'
}
/* function criaCiclo(resetar){
    
} */