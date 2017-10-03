var cnv = document.querySelector("canvas");
var ctx = cnv.getContext("2d");

// constatntes
var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
var SIZE = 50;
var posX = 50;
var posY = 50;
var objColor = "#00F00F";
var mvLeft = mvUp = mvRight = mvDown = false;

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
}

function draw() {
    ctx.fillRect(posX, posY, SIZE, SIZE);
}

// atualiza a frame
function loop() {
    window.requestAnimationFrame(loop, cnv);
    update();
    draw();
}

loop();