//PACMAN
//PRESENTADO POR 
//VALERIA MARTINEZ A00372453
//ROSSY HURTADO A00372572
//CRISTIAN ORTIZ A00372906

class Pacman {
  constructor(x, y, fila, columna, matriz, image) {
    this.x = x;
    this.y = y;
    this.fila = fila;
    this.columna = columna;
    this.matriz = matriz;
    this.image = image;
  } 
  show() {
    imageMode(CENTER);
    image(this.image, this.x, this.y,50,50);
    rotate(1)
  } 

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }
  move () {
    switch (key) {
      case 'a':
        if (this.columna - 1 >= 0 && this.matriz[this.fila][this.columna - 1] === 0) {
          this.x -= 50;
          this.columna--;

        }
        break;
      case 'd':
        if (this.columna + 1 < this.matriz[0].length && matriz[this.fila][this.columna + 1] === 0) {
          this.x += 50;
          this.columna++;
        }
        break;
      case 'w':
        if (this.fila - 1 >= 0 && this.matriz[this.fila - 1][this.columna] === 0) {
          this.y -= 50;
          this.fila--;
        }
        break;
      case 's':
        if (this.fila + 1 < matriz[0].length && matriz[this.fila + 1][this.columna] === 0) {
          this.y += 50;
          this.fila++;
        }
        break;
    }
  }
}

class Fantasma {
  constructor(x, y, fila, columna, matriz, score = 100) {
    this.x = x;
    this.y = y;
    this.fila = fila;
    this.columna = columna;
    this.matriz = matriz;
    this.score = score
  }

  show() {
    fill(0, 0, 255);
    rect(this.x, this.y, 40, 40);
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getScore() {
    return this.score;
  }

  move(matriz) {
    let dir = parseInt(random(4));
    switch (dir) {
      case 0:
        if (this.columna - 1 >= 0 && this.matriz[this.fila][this.columna - 1] === 0) {
          this.x -= 50;
          this.columna--;
        }
        break;
      case 1:
        if (this.columna + 1 < this.matriz[0].length && this.matriz[this.fila][this.columna + 1] === 0) {
          this.x += 50;
          this.columna++;
        }
        break;
      case 2:
        if (this.fila - 1 >= 0 && this.matriz[this.fila - 1][this.columna] === 0) {
          this.y -= 50;
          this.fila--;
        }
        break;
      case 3:
        if (this.fila + 1 < this.matriz[0].length && this.matriz[this.fila + 1][this.columna] === 0) {
          this.y += 50;
          this.fila++;
        }
        break;
    }
  }
}

class Coins {
  constructor(x, y, fila, columna, puntos = 50) {
    this.x = x;
    this.y = y;
    this.fila = fila;
    this.columna = columna;
    this.puntos = puntos;
  }

  show() {
    fill(255, 255, 0);
    circle(this.x, this.y, 10);
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getPuntos() {
    return this.puntos;
  }
}

let coins = [];
let fantasmas = [];
let score = 0;
let matriz = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

];

let pacmanCerrado;
let pacmanMedio;
let pacmanAbierto;
let pacman;
function setup() {
  createCanvas(1200, 650);
  monedas();
  pacmanCerrado = loadImage("./images/pacmanCerrado.png");
  pacmanMedio = loadImage("./images/pacmanMedio.png");
  pacmanAbierto = loadImage("./images/pacmanAbierto.png");
  pacman = new Pacman(75, 75, 1, 1, matriz, pacmanCerrado);
}

function monedas(){
  coins.splice(coins);
  
  for (let fil = 0; fil < 24; fil++) {
    for (let col = 0; col < 13; col++){
      coins.push(new Coins(fil*50+25, col*50+25));
    }
  }
  coins.push(new Fantasma(505, 305, 6, 10, matriz));
  coins.push(new Fantasma(555, 305, 6, 11, matriz));
  coins.push(new Fantasma(605, 305, 6, 12, matriz));
  coins.push(new Fantasma(655, 305, 6, 13, matriz));
}
function draw() {
  background(0);
  noStroke();
  showCoins(matriz);
  showGround();
  if(frameCount%25 === 0){
    pacman.image = pacmanCerrado;
  }else if(frameCount%25 === 7){
    pacman.image = pacmanMedio;
  }else if(frameCount%25 === 14){
    pacman.image = pacmanAbierto;
  }else if(frameCount%25 === 21){
    pacman.image = pacmanMedio;
  }


  pacman.show();
  resetGame();
}
function keyPressed(){
  pacman.move();
}
function resetGame() {
  for (let index = 0; index < coins.length; index++) {
    const coin = coins[index];
    if (coin instanceof Fantasma) {
      if (dist(pacman.getX(), pacman.getY(), coin.getX(), coin.getY()) < 40) {
        monedas();
      } 
    }
  }
}
function showCoins(matriz){
  for (let index = 0; index < coins.length; index++) {
    const coin = coins[index];
    coin.show();

    if (coin instanceof Fantasma) {
      if (frameCount % 15 == 0) {
        coin.move(matriz);
      }
    }
  }
}
function selectColor(fila, columna) {
  switch (matriz[fila][columna]) {
    case 0:
      fill(0,0);
      break;
    case 1:
      fill(255, 0, 0);
      break;
  }
}
function showGround() {
  for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {
      selectColor(fila, columna);
      rect(columna * 50, fila * 50, 50, 50);
    }
  }
  validateContact();
}
function validateContact() {
  for (let index = 0; index < coins.length; index++) {
    const coin = coins[index];
    if (dist(pacman.getX(), pacman.getY(), coin.getX(), coin.getY()) < 25) {
      score += coin.score;
      coins.splice(index, 1);
      break;
    }
  }
}

