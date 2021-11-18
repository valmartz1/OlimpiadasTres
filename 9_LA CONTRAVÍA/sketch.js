//CONTRAVIA
//PRESENTADO POR 
//VALERIA MARTINEZ A00372453
//ROSSY HURTADO A00372572
//CRISTIAN ORTIZ A00372906







class Carro{
  constructor(x, y, image){
    this.x = x;
    this.y = y;
    this.image = image;
  }
  show(){
    
    image(this.image, this.x, this.y, 180, 80);
    this.move(); 
  }
  move(){
        if(contador>0 && contador<1000 ){
          this.x -= 4;
        }else if(contador>1001 && contador<2000){
          this.x -= 5;
        }else if(contador>2001 && contador<3000){
          this.x -= 6;
        }
        else if(contador>3001 && contador<4000){
          this.x -= 7;
        }else if(contador>4001 && contador<5000){
          this.x -= 8;
        }else if(contador>5001 && contador<6000){
          this.x -= 9;
        }else if(contador>6001 && contador<7000){
          this.x -= 10;
        }else if(contador>7001 && contador<8000){
          this.x -= 11;
        }else if(contador>8001){
          this.x -= 12;
        }
  }
}
class Moto{
  constructor(x, y, image){
    this.x = x;
    this.y = y;
    this.image = image;
  }
  show(){
    image(this.image, this.x, this.y, 100,50);
  }
  validarContacto(carro){
    if(this.y > carro.y && this.y < carro.y + 80 &&
      carro.x < this.x && this.x < carro.x + 50){
        return true;
      }
      return false;
  }
}

let carro = [];
let moto;
let carroImage;
let viaImage;
let motoImage;
let contador = 0;
estado = false;

function setup() {
  createCanvas(700, 400);

  carroImage = loadImage("/images/carro.png");
  viaImage = loadImage("/images/via.jpg");
  motoImage = loadImage("/images/moto.png");
  moto = new Moto(10, 98, motoImage);

  for(let a = 0 ; a < carro.length; a++){

      carro.push(new Carro(random(700, 1600), (a*80)+5, carroImage));
    
  }

}

function draw() {
  background(150);
  image(viaImage, 0, 0, 700, 400);
  if(estado === true){
    for(let index = 0 ; index < carro.length; index++){
      carro[index].show();
    }
    generarNuevosCarros();

    contador += 1;

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text(contador, 605,365);
  }
  if(estado === false && frameCount%100 > 0 && frameCount%100 < 50){
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(33);
    text("Press SPACE to start!", 180,362);
  }
  moto.show();
  validarContacto();
  
}

function generarNuevosCarros(){
  if( frameCount%250 === 0){
    for(let a = 0 ; a < 4; a++){
     carro.push(new Carro(random(700, 2500), (a*80)+5, carroImage));
    }
  }
}
function keyPressed() {
  if(key === ' '){
    estado = true;
  }

  if(keyIsPressed) {
    switch(key){
      case 'w'||'W'://UP
        if(moto.y > 70){
          moto.y -= 80;
        }
        break;
      case 's'||'S'://DOWN
        if(moto.y < 200){
        moto.y += 80;
        break;
       }
     }
  }
}
function validarContacto(){
  for(let a = 0 ; a < carro.length; a++){
    if(moto.validarContacto(carro[a])){
      estado = false;
      contador = 0;
      if(estado === false){
      fill(255,0,0);
      textAlign(CENTER, CENTER);
      textSize(40);
      text("Perdiste 😭😢", 350,200);

      }
    }
  }
}
