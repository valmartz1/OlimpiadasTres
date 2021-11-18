//PONG PONG FACHERO
//PRESENTADO POR 
//VALERIA MARTINEZ A00372453
//ROSSY HURTADO A00372572
//CRISTIAN ORTIZ A00372906





class Barra{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  show(){
    rect(this.x, this.y, 20,90)
  }

}

class Bola{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  show(){
    fill(255);
    ellipse(this.x, this.y, 25,25)
  }

}

class Contador{
  constructor(valor, x, y){
    this.valor = valor;
    this.x = x;
    this.y = y;
  }
  show(){
    textAlign(CENTER,CENTER);
    textSize(30);
    text(this.valor, this.x, this.y)
  }
}

let barra1;
let barra2;
let bola;
let mensaje;
let isMoving;
let calculo;
let calculoPared;
let contadorAzul;
let contadorRojo;

function setup() {
  createCanvas(400, 400);
  bola = new Bola(200,200);
  barra1 = new Barra(0,150);
  barra2 = new Barra(380,150);
  mensaje = "Press SPACE to start"
  isMoving = 0;
  calculo = 1;
  calculoPared = 1;
  contadorAzul = new Contador(0, 230, 20);
  contadorRojo = new Contador(0, 170, 20);

}

function draw() {
  background(0);

  noStroke();
  bola.show();
  fill(255,0,0);
  barra1.show();
  fill(0,0,255);
  barra2.show();
  fill(0,0,255);
  contadorAzul.show();
  fill(255,0,0);
  contadorRojo.show();

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(30);
  text(mensaje, 200,100);

  if(isMoving === 1){
    bola.x += 4 * calculo;
    bola.y += 2 * calculoPared;
    }

  if(bola.y > barra2.y && bola.y < barra2.y + 90 && 
      bola.x > barra2.x-13 && bola.x < barra2.x + 20){
      calculo = -1;

    }

    if(bola.y > barra1.y && bola.y < barra1.y + 90 && 
      bola.x > barra1.x && bola.x < barra1.x + 33){
      calculo = 1;
    }

    if(bola.y > 390){
      calculoPared = -1;
    }else if(bola.y < 10){
      calculoPared = 1;
    }

    if(bola.x > 410){
      isMoving = 0;
      bola.x = 200;
      bola.y = 200;
      mensaje = "Press SPACE to start";
      contadorRojo.valor += 1;
    }else if(bola.x < -10){
      isMoving = 0;
      bola.x = 200;
      bola.y = 200;
      mensaje = "Press SPACE to start";
      contadorAzul.valor += 1;
    }
    keyPressed();


}
function keyPressed(){


  if(keyIsPressed) {
    switch(key){
        case 'w'||'W'://UP
            barra1.y -= 4;
            break;
        case 's'||'S'://DOWN
            barra1.y += 4;
            break;
    }

  if(keyCode === UP_ARROW){
    barra2.y -= 4;
  }else if(keyCode === DOWN_ARROW){
    barra2.y += 4;
  }

  if(key === " "){
   mensaje = " ";
   isMoving = 1;
  }
  }
}
