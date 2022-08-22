var myGamePiece;

function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

console.log('myGameArea', myGameArea.canvas.width);

const gameWidth = myGameArea.canvas.width;

function isOnWall() {
    if(myGamePiece.x > gameWidth) {
        return true;
    } else {
        return false;
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// function step(myGamePieceX) {
//     if(isOnWall()) {
//         return myGamePieceX -= 1;
//     } else {
//         return myGamePieceX += 1;
//     }
// }

function updateGameArea() {
    myGameArea.clear();
    if(isOnWall()) {
        myGamePiece.x -= 1;
    } else {
        myGamePiece.x += 1;
    }
    myGamePiece.update();
}