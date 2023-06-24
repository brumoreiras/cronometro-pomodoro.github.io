let min = document.querySelector('#minutos');
let seg = document.querySelector('#segundos');

let contadorSeg = 0;
let contadorMin = 25;
let cicloConcluido = false;
let disparar;

function contaSegundos() {
  contadorSeg--;

  if (contadorSeg < 0) {
    contadorSeg = 59;
    contaMinutos();
  }

  min.innerHTML = contadorMin.toString().padStart(2, '0');
  seg.innerHTML = contadorSeg.toString().padStart(2, '0');

  if (contadorMin === 0 && contadorSeg === 0) {
    if (!cicloConcluido) {
      cicloConcluido = true;
      adicionaCicloConcluido();
      contadorMin = 10;
      stop(); 
      exibirSecaoCiclos();
    } else {
      cicloConcluido = false;
      contadorMin = 1;
    }
    contadorSeg = 0;
  }
}

function contaMinutos() {
  contadorMin--;
}

function iniciar() {
  clearInterval(disparar);
  disparar = setInterval(() => {
    contaSegundos();
  }, 1000);
}

function stop() {
  clearInterval(disparar);
}

function resetar() {
  clearInterval(disparar);
  contadorMin = 25;
  contadorSeg = 0;
  cicloConcluido = false;
  min.innerHTML = '25';
  seg.innerHTML = '00';
  limparCiclosConcluidos();
  ocultarSecaoCiclos();
}

function adicionaCicloConcluido() {
  const container = document.querySelector('#container__quantidade__lista');
  const novoItem = document.createElement('li');
  novoItem.textContent = 'Ciclo concluído';
  container.appendChild(novoItem);
}

function limparCiclosConcluidos() {
  const container = document.querySelector('#container__quantidade__lista');
  container.innerHTML = '';
}

function exibirSecaoCiclos() {
  const secaoCiclos = document.querySelector('.container__quantidade_ciclos');
  secaoCiclos.classList.remove('oculto');
}

function ocultarSecaoCiclos() {
  const secaoCiclos = document.querySelector('.container__quantidade_ciclos');
  secaoCiclos.classList.add('oculto');
}

function resetarCiclos() {
  resetar();
  ocultarSecaoCiclos();
}


