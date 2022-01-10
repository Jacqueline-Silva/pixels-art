window.onload = function () {
  const corPretaAoIniciar = document.querySelector('.color');
  corPretaAoIniciar.classList.add('selected');
};

const quadrado1 = document.getElementsByClassName('color')[0];
quadrado1.style.background = 'black';

const quadrado2 = document.getElementsByClassName('color')[1];
quadrado2.style.background = 'pink';

const quadrado3 = document.getElementsByClassName('color')[2];
quadrado3.style.background = 'yellow';

const quadrado4 = document.getElementsByClassName('color')[3];
quadrado4.style.background = 'lightgreen';

// 7
function selecionaCor(selecionando) {
  const seleciona = document.querySelector('.selected');
  seleciona.classList.remove('selected');
  selecionando.target.classList.add('selected');
}
quadrado1.addEventListener('click', selecionaCor);
quadrado2.addEventListener('click', selecionaCor);
quadrado3.addEventListener('click', selecionaCor);
quadrado4.addEventListener('click', selecionaCor);

// 8
const pixelUm = document.getElementById('pixel-um');
const pixelDois = document.getElementById('pixel-dois');
const pixelTres = document.getElementById('pixel-tres');
const pixelQuatro = document.getElementById('pixel-quatro');
const pixelCinco = document.getElementById('pixel-cinco');

function colorindo(select) {
  const colocandoCor = document.querySelector('.selected');
  select.target.style.backgroundColor = colocandoCor.style.backgroundColor;
}
pixelUm.addEventListener('click', colorindo);
pixelDois.addEventListener('click', colorindo);
pixelTres.addEventListener('click', colorindo);
pixelQuatro.addEventListener('click', colorindo);
pixelCinco.addEventListener('click', colorindo);

// 9
const chamandoBotao = document.getElementById('clear-board');
function clear() {
  const pixelComCor = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelComCor.length; i += 1) {
    pixelComCor[i].style.backgroundColor = 'white';
  }
  // .target = window.location.reload();
}
chamandoBotao.addEventListener('click', clear);

// 10
const inputNumero = document.querySelector('#board-size');
const botaoVqV = document.querySelector('#generate-board');
function insereNumero() {
  if (inputNumero.value === '') {
    alert('Board inválido!');
  }
}
botaoVqV.addEventListener('click', insereNumero);

// 11
function valorPadraoInput() {
  if (inputNumero.value < 5 && inputNumero.value > 0) {
    inputNumero.value = 5;
  } else if (inputNumero.value > 50) {
    inputNumero.value = 50;
  }
}
botaoVqV.addEventListener('click', valorPadraoInput);

// 12
function criaRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}
criaRgb();

function coresA() {
  quadrado2.style.backgroundColor = criaRgb();
  quadrado3.style.backgroundColor = criaRgb();
  quadrado4.style.backgroundColor = criaRgb();
}
coresA();
