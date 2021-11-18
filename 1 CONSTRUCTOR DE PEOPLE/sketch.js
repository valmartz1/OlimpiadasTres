//CONSTRUCTOR DE PEOPLE
//PRESENTADO POR 
//VALERIA MARTINEZ A00372453
//ROSSY HURTADO A00372572
//CRISTIAN ORTIZ A00372906




let hair = [];
let eyes = [];
let mouth = [];
let clothes = [];
let changeH;
let changeE;
let changeM;
let changeC;
let skin;
let blush;
let buttons = [];

function setup() {
  createCanvas(300, 300);
  skin = new Pictures(loadImage("/Pictures/Skin.png"));
  blush = new Pictures(loadImage("/Pictures/Blush.png"));
  changeH = 1;
  changeE = 1;
  changeM = 1;
  changeC = 1;

  hair[0] = new Pictures(loadImage("/Pictures/Hair/Hair1.png"));
  hair[1] = new Pictures(loadImage("/Pictures/Hair/Hair1.png"));
  hair[2] = new Pictures(loadImage("/Pictures/Hair/Hair2.png"));
  hair[3] = new Pictures(loadImage("/Pictures/Hair/Hair3.png"));
  hair[4] = new Pictures(loadImage("/Pictures/Hair/Hair4.png"));
  hair[5] = new Pictures(loadImage("/Pictures/Hair/Hair5.png"));
  hair[6] = new Pictures(loadImage("/Pictures/Hair/Hair6.png"));
  hair[7] = new Pictures(loadImage("/Pictures/Hair/Hair6.png"));

  eyes[0] = new Pictures(loadImage("/Pictures/Eyes/Eyes1.png"));
  eyes[1] = new Pictures(loadImage("/Pictures/Eyes/Eyes1.png"));
  eyes[2] = new Pictures(loadImage("/Pictures/Eyes/Eyes2.png"));
  eyes[3] = new Pictures(loadImage("/Pictures/Eyes/Eyes3.png"));
  eyes[4] = new Pictures(loadImage("/Pictures/Eyes/Eyes4.png"));
  eyes[5] = new Pictures(loadImage("/Pictures/Eyes/Eyes5.png"));
  eyes[6] = new Pictures(loadImage("/Pictures/Eyes/Eyes5.png"));

  mouth[0] = new Pictures(loadImage("/Pictures/Mouth/Mouth1.png"));
  mouth[1] = new Pictures(loadImage("/Pictures/Mouth/Mouth1.png"));
  mouth[2] = new Pictures(loadImage("/Pictures/Mouth/Mouth2.png"));
  mouth[3] = new Pictures(loadImage("/Pictures/Mouth/Mouth3.png"));
  mouth[4] = new Pictures(loadImage("/Pictures/Mouth/Mouth4.png"));
  mouth[5] = new Pictures(loadImage("/Pictures/Mouth/Mouth5.png"));
  mouth[6] = new Pictures(loadImage("/Pictures/Mouth/Mouth5.png"));

  clothes[0] = new Pictures(loadImage("/Pictures/Clothes/Clothes1.png"));
  clothes[1] = new Pictures(loadImage("/Pictures/Clothes/Clothes1.png"));
  clothes[2] = new Pictures(loadImage("/Pictures/Clothes/Clothes2.png"));
  clothes[3] = new Pictures(loadImage("/Pictures/Clothes/Clothes3.png"));
  clothes[4] = new Pictures(loadImage("/Pictures/Clothes/Clothes4.png"));
  clothes[5] = new Pictures(loadImage("/Pictures/Clothes/Clothes5.png"));
  clothes[6] = new Pictures(loadImage("/Pictures/Clothes/Clothes5.png"));

  for (let i = 0; i < 4; i++) {
    buttons[i] = new Array(4);
    for (let j = 0; j < 4; j++) {
      buttons[i][j] = new Buttons((220*i)+40,(40*j)+150,15);
    }
  }
}

function draw() {
  background(250);
  skin.show();
  blush.show();
  eyes[changeE].show();
  mouth[changeM].show();
  clothes[changeC].show();
  hair[changeH].show();
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 4; j++) {
      buttons[i][j].show();
    }
  }

  if (changeH === 7) {
    changeH = 1;
  }
  if (changeH === 0) {
    changeH = 6;
  }
  if (changeE === 6) {
    changeE = 1;
  }
  if (changeE === 0) {
    changeE = 5;
  }
  if (changeM === 6) {
    changeM = 1;
  }
  if (changeM === 0) {
    changeM = 5;
  }
  if (changeC === 6) {
    changeC = 1;
  }
  if (changeC === 0) {
    changeC = 5;
  }  

}

function mousePressed() {
  if (buttons[0][0].click(mouseX,mouseY)) {
    changeH--;
  }
  if (buttons[1][0].click(mouseX,mouseY)) {
    changeH++;
  }
  if (buttons[0][1].click(mouseX,mouseY)) {
    changeE--;
  }
  if (buttons[1][1].click(mouseX,mouseY)) {
    changeE++;
  }
  if (buttons[0][2].click(mouseX,mouseY)) {
    changeM--;
  }
  if (buttons[1][2].click(mouseX,mouseY)) {
    changeM++;
  }
  if (buttons[0][3].click(mouseX,mouseY)) {
    changeC--;
  }
  if (buttons[1][3].click(mouseX,mouseY)) {
    changeC++;
  }
 
}

