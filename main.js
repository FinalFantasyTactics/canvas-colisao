var cnv = document.querySelector("canvas");
var ctx = cnv.getContext("2d");

// constatntes do bloco din�mico
var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
var SIZE = 50;
var posX = 50;
var posY = 50;
var objColor = "#00F00F";
var mvLeft = mvUp = mvRight = mvDown = false;

// constantes do bloco
var blockX = cnv.width / 2 - SIZE / 2;
var blockY = cnv.height / 2 - SIZE / 2;

function updateBlock() {
    if (mvLeft) {
        posX--;
    }
    if (mvRight) {
        posX++;
    }
    if (mvUp) {
        posY--;
    }
    if (mvDown) {
        posY++;
    }
}

function colide() {
    if (
            posX + SIZE > blockX         // colis�o pela direita 
            && posX < blockX + SIZE     // colis�o pela esquerda
            && posY + SIZE > blockY     // colis�o por cima
            && posY < blockY + SIZE     // colis�o por baixo
            ) {
        objColor = "#f00";
    } else {
        objColor = "#00F00F";
    }
}

// Captura o comando
window.addEventListener("keydown", keydownHandler, false);
window.addEventListener("keyup", keyupHandler, false);

function keydownHandler(e) {
    var key = e.keyCode;
    switch (key) {
        case UP:
            mvUp = true;
            break;
        case DOWN:
            mvDown = true;
            break;
        case LEFT:
            mvLeft = true;
            break;
        case RIGHT:
            mvRight = true;
            break;
    }
}

function keyupHandler(e) {
    var key = e.keyCode;
    switch (key) {
        case UP:
            mvUp = false;
            break;
        case DOWN:
            mvDown = false;
            break;
        case LEFT:
            mvLeft = false;
            break;
        case RIGHT:
            mvRight = false;
            break;
    }
}

function update() {
    updateBlock();
    colide();
}

function draw() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "#000000";
    ctx.fillRect(blockX, blockY, SIZE, SIZE);
    ctx.fillStyle = objColor;
    ctx.fillRect(posX, posY, SIZE, SIZE);
}

// atualiza a frame
function loop() {
    window.requestAnimationFrame(loop, cnv);
    update();
    draw();
}

loop();