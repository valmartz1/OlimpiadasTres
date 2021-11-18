//SPACE INVADERS
//PRESENTADO POR 
//VALERIA MARTINEZ A00372453
//ROSSY HURTADO A00372572
//CRISTIAN ORTIZ A00372906

//DISPARA CON ESPACIO






class Ship {
  constructor(){
    this.x = width / 2;
    this.xdir = 0;
  }
  
  show() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, height - 20, 20, 60);
  };

  setDir(dir) {
    this.xdir = dir;
  };

  move (dir) {
    this.x += this.xdir * 5;
  };
}


class Invader {

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.r = 30;
    this.xdir = 1;
  }

  grow() {
    if(this.r == 0){
      this.r = 0;
    }else{
      this.r = this.r - 10;
    }
    
  };

  shiftDown(){
    this.xdir *= -1;
    this.y += this.r;
  };

  move() {
    this.x = this.x + this.xdir;
  };

  show() {
    noStroke();
    fill(255, 0, 200, 150);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };
}


class Drop {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.r = 8;
    this.toDelete = false;
  }
  

  show() {
    noStroke();
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };

  evaporate() {
    this.toDelete = true;
  };

  hits(flower) {
    var d = dist(this.x, this.y, flower.x, flower.y);
    if (d < this.r + flower.r) {
      return true;
    } else {
      return false;
    }
  };

  move() {
    this.y = this.y - 5;
  };
}

var ship;
var invaders = [];
var drops = [];

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  // drop = new Drop(width/2, height/2);
  for (var i = 0; i < 6; i++) {
    invaders[i] = new Invader(i * 80 + 80, 60);
  }
}

function draw() {
  background(51);
  ship.show();
  ship.move();

  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
    for (var j = 0; j < invaders.length; j++) {
      if (drops[i].hits(invaders[j])) {
        invaders[j].grow();
        drops[i].evaporate();
      }
    }
  }

  var edge = false;

  for (var i = 0; i < invaders.length; i++) {
    invaders[i].show();
    invaders[i].move();
    if (invaders[i].x > width || invaders[i].x < 0) {
      edge = true;
    }
  }

  if (edge) {
    for (var i = 0; i < invaders.length; i++) {
      invaders[i].shiftDown();
    }
  }

  for (var i = drops.length - 1; i >= 0; i--) {
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }
  }
}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}

function keyPressed() {
  if (key === ' ') {
    var drop = new Drop(ship.x, height);
    drops.push(drop);
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
