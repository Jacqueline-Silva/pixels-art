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

function selecionaCor(selecionando) {
  const seleciona = document.querySelector('.selected');
  seleciona.classList.remove('selected');
  selecionando.target.classList.add('selected');
}

quadrado1.addEventListener('click', selecionaCor);
quadrado2.addEventListener('click', selecionaCor);
quadrado3.addEventListener('click', selecionaCor);
quadrado4.addEventListener('click', selecionaCor);

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

const chamandoBotao = document.getElementById('clear-board');
function clear(limpando) {
  limpando.target = window.location.reload();
}
chamandoBotao.addEventListener('click', clear);
