var cnv = document.querySelector("canvas");
var ctx = cnv.getContext("2d");

// constatntes
var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
var SIZE = 50;
var posX = 50;
var posY = 50;
var objColor = "#00F00F";
var mvLeft = mvUp = mvRight = mvDown = false;


// Captura o comando
window.addEventListener("keydown", keydownHandler, false);

function keydownHandler(e) {
    alert(e.keyCode);
}

function update() {

}

function draw() {
    ctx.fillRect(50, 50, 50, 50);
}

// atualiza a frame
function loop() {
    window.requestAnimationFrame(loop, cnv);
    update();
    draw();
}

loop();