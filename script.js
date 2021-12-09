let quadrado1 = document.getElementsByClassName('color')[0];
quadrado1.style.background = "black"

let quadrado2 = document.getElementsByClassName('color')[1];
quadrado2.style.background = "pink"

let quadrado3 = document.getElementsByClassName('color')[2];
quadrado3.style.background = "yellow"

let quadrado4 = document.getElementsByClassName('color')[3];
quadrado4.style.background = "lightgreen"

//
let divQuadro = document.getElementById('pixel-board')
let pixel1 = document.getElementById('pixel-um')
let pixel2 = document.getElementById('pixel-dois')
let pixel3 = document.getElementById('pixel-tres')
let pixel4 = document.getElementById('pixel-quatro')
let pixel5 = document.getElementById('pixel-cinco')

for (let criandoPixels = 1; criandoPixels <= 5; criandoPixels += 1) {
    let pixelsI = document.createElement('div');
    pixelsI.innerHTML = 5[criandoPixels]
    pixelsI.className = 'pixel'
    pixel1.appendChild(pixelsI)
}

for (let criandoPixels = 1; criandoPixels <= 5; criandoPixels += 1) {
    let pixelsI = document.createElement('div');
    pixelsI.innerHTML = 5[criandoPixels]
    pixelsI.className = 'pixel'
    pixel2.appendChild(pixelsI)
}

for (let criandoPixels = 1; criandoPixels <= 5; criandoPixels += 1) {
    let pixelsI = document.createElement('div');
    pixelsI.innerHTML = 5[criandoPixels]
    pixelsI.className = 'pixel'
    pixel3.appendChild(pixelsI)
}

for (let criandoPixels = 1; criandoPixels <= 5; criandoPixels += 1) {
    let pixelsI = document.createElement('div');
    pixelsI.innerHTML = 5[criandoPixels]
    pixelsI.className = 'pixel'
    pixel4.appendChild(pixelsI)
}

for (let criandoPixels = 1; criandoPixels <= 5; criandoPixels += 1) {
    let pixelsI = document.createElement('div');
    pixelsI.innerHTML = 5[criandoPixels]
    pixelsI.className = 'pixel'
    pixel5.appendChild(pixelsI)
}




