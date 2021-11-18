//QUITA BLOQUES MELO
//PRESENTADO POR 
//VALERIA MARTINEZ A00372453
//ROSSY HURTADO A00372572
//CRISTIAN ORTIZ A00372906




class Bola{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  show(){
    fill(230);
    ellipse(this.x, this.y, 20,20);
  }
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
}

class Barra{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  show(){
    fill(170);
    rect(this.x, this.y, 100,15);
  }
}

class BloqueRojo{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  show(){
    fill(255,0,0);
    rect(this.x, this.y, 50, 25);
  }
  setX(x){
    this.x = x;
  }
  validarContacto(bolita){
    if(bolita.x > this.x && bolita.x < this.x + 50 &&
        bolita.y > this.y && bolita.y < this.y + 25){
        return true;
    }
    return false;
  }
}

class BloqueNaranja{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  show(){
    fill(255,130,0);
    rect(this.x, this.y, 50, 25);
  }
  validarContacto(bolita){
    if(bolita.x > this.x && bolita.x < this.x + 50 &&
        bolita.y > this.y && bolita.y < this.y + 25){
        return true;
    }
    return false;
  }
}

class BloqueAmarillo{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  show(){
    fill(255,255,0);
    rect(this.x, this.y, 50, 25);
  }
  validarContacto(bolita){
    if(bolita.x > this.x && bolita.x < this.x + 50 &&
        bolita.y > this.y && bolita.y < this.y + 25){
        return true;
    }
    return false;
  }
}

class BloqueLima{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  show(){
    fill(140,255,0);
    rect(this.x, this.y, 50, 25);
  }
  validarContacto(bolita){
    if(bolita.x > this.x && bolita.x < this.x + 50 &&
        bolita.y > this.y && bolita.y < this.y + 25){
        return true;
    }
    return false;
  }
}

class BloqueVerde{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  show(){
    fill(0,180,0);
    rect(this.x, this.y, 50, 25);
  }

  validarContacto(bolita){
    if(bolita.x > this.x && bolita.x < this.x + 50 &&
        bolita.y < 135){
        return true;
    }
    return false;
  }
}

let bolita = new Bola(200, 375);
let barra;
let isMoving;
let calculoX;
let calculoY;
let rojos = [];
let naranjas = [];
let amarillos = [];
let limas = [];
let verdes = [];

function setup() {
  createCanvas(400, 400);
  barra = new Barra(150,385);
  calculoX = 1;
  calculoY = 1;
  isMoving = false;

  for (let index = 0; index < 8; index++){
    rojos.push(new BloqueRojo(index*50,0));
    naranjas.push(new BloqueNaranja(index*50,25));
    amarillos.push(new BloqueAmarillo(index*50,50));
    limas.push(new BloqueLima(index*50,75));
    verdes.push(new BloqueVerde(index*50,100));
  }
  
}

function draw() {
  background(10);
  stroke(1);


  for(let index = 0; index < 8; index++){

    if(rojos[index] !== undefined){
        rojos[index].show();
    }
    if(naranjas[index] !== undefined){
      naranjas[index].show();
    }
    if(amarillos[index] !== undefined){
      amarillos[index].show();
    }
    if(limas[index] !== undefined){
      limas[index].show();
    }
    if(verdes[index] !== undefined){
      verdes[index].show();
    }
  }
  keyPressed();

  if(isMoving === true){
    bolita.x += 2 * calculoX;
    bolita.y -= 3 * calculoY;
  }
  if(bolita.y < 10){
    calculoY = -1;
  }else if(bolita.x > 390){
    calculoX = -1;
  }else if(bolita.x < 10){
    calculoX = 1;
  }
  if(bolita.x > barra.x && bolita.x < barra.x + 100 && bolita.y > 375){
    calculoY = 1;
  }
  if(bolita.y > 410){
    isMoving = false;
    bolita.x = 200;
    bolita.y = 375;
  }
  noStroke();
  barra.show();
  bolita.show();

  validarContacto();
  
}

function validarContacto(){
  for(let index = 0; index < 8; index++){
    if(verdes[index] !== undefined && verdes[index].validarContacto(bolita)){
      console.log("Contacto!!!");
      verdes.splice(index, 1);
      calculoY = -1;
      return;
    }
    if(limas[index] !== undefined && limas[index].validarContacto(bolita)){
      console.log("Contacto!!!");
      limas.splice(index, 1);
      calculoY = -1;
      return;
    }
    if(amarillos[index] !== undefined && amarillos[index].validarContacto(bolita)){
      console.log("Contacto!!!");
      amarillos.splice(index, 1);
      calculoY = -1;
      return;
    }
    if(naranjas[index] !== undefined && naranjas[index].validarContacto(bolita)){
      console.log("Contacto!!!");
      naranjas.splice(index, 1);
      calculoY = -1;
      return;
    }
    if(rojos[index] !== undefined && rojos[index].validarContacto(bolita)){
      console.log("Contacto!!!");
      rojos.splice(index, 1);
      calculoY = -1;
      return;
    }
  }
}

function keyPressed(){
  let mensaje;
  if(keyIsPressed && barra.x >= 0 && barra.x <= 300){

    switch(key){
      case 'a' || 'D':
        barra.x -= 3;
      break;
      case 'd' || 'D':
        barra.x += 3;
      break;
    } 
    if(barra.x < 0){
      barra.x = 0;
    }else if(barra.x > 300){
      barra.x = 300;
    }
  }
  if(key === ' '){
    isMoving = true;
    mensaje = " ";
  }

  if(isMoving === false){
    mensaje = "Press SPACE to start";
  }
  
  

  fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text(mensaje,200, 180)
}