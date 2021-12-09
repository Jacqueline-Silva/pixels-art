window.onload = function () {
    let corPretaAoIniciar = document.querySelector('.color');
    corPretaAoIniciar.classList.add('selected');
}

let quadrado1 = document.getElementsByClassName('color')[0];
quadrado1.style.background = "black"

let quadrado2 = document.getElementsByClassName('color')[1];
quadrado2.style.background = "pink"

let quadrado3 = document.getElementsByClassName('color')[2];
quadrado3.style.background = "yellow"

let quadrado4 = document.getElementsByClassName('color')[3];
quadrado4.style.background = "lightgreen"


function selecionaCor (selecionando) {
    let seleciona = document.querySelector ('.selected')
    seleciona.classList.remove('selected')
    selecionando.target.classList.add ('selected')
}

quadrado1.addEventListener ('click', selecionaCor)
quadrado2.addEventListener ('click', selecionaCor) 
quadrado3.addEventListener ('click', selecionaCor) 
quadrado4.addEventListener ('click', selecionaCor) 


let pixelUm = document.getElementById('pixel-um');
let pixelDois = document.getElementById('pixel-dois');
let pixelTres = document.getElementById('pixel-tres');
let pixelQuatro = document.getElementById('pixel-quatro');
let pixelCinco = document.getElementById('pixel-cinco');

function colorindo (select) {
    let colocandoCor = document.querySelector ('.selected')
    select.target.style.backgroundColor = colocandoCor.style.backgroundColor
}

pixelUm.addEventListener ('click', colorindo)
pixelDois.addEventListener ('click', colorindo)
pixelTres.addEventListener ('click', colorindo)
pixelQuatro.addEventListener ('click', colorindo)
pixelCinco.addEventListener ('click', colorindo)