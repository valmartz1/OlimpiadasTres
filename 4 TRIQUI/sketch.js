//TRIQUI
//PRESENTADO POR 
//VALERIA MARTINEZ A00372453
//ROSSY HURTADO A00372572
//CRISTIAN ORTIZ A00372906








class Player {
	
  constructor(p){
    this.t = p;
    this.score = 0;
  }
  
  select(b){
    if(b.turn === this.t){
      let hor = int(Math.floor(mouseX/b.cSize));
      let ver = int(Math.floor(mouseY/b.cSize));
      b.update(hor, ver, this.t);
    }
  }
  
  win(){
  	this.score ++;
  }
}


class Board {
	
  constructor(size, p1, p2){

    this.s = size;
    this.cells = [];
    this.cSize = (width-1)/this.s;

	
    this.p1 = p1;
    this.p2 = p2;
    this.turn = this.p1.t;

    
    this.winState = false;
    this.resultText = "";
    this.newGame();
  }
  
  display(){
    let cSize = this.cSize;
    if (this.winState){
      textSize(24);
      textAlign(CENTER);
    	text(this.resultText, width/2, height/2);
      text("Click para empezar un nuevo juego", width/2, height/2+30);
      
    } else {
      this.cells.forEach(function(element){
        rect(element.r*cSize, element.c*cSize, cSize, cSize);
        textSize(64);
        textAlign(CENTER);
        text(element.t, element.r*cSize+cSize/2, element.c*cSize+cSize/1.5);
      });
    }
    
  }
  
 
  update(r, c, t){
    let turn = this.turn;

    this.cells.forEach(function(element){
			if (element.r === r && element.c === c && element.v === 0){
      	element.t = t;
        if(turn==="X"){
        	element.v = 1;
        } else {
        	element.v = -1;
        }
      }
    });

    let result = this.checkResult()
    if (result){
      this.winState = true;
      this.resultText = "El ganador es: " + result;
    }
  }
  
  
  toggleTurn(){
  	if (this.turn == p1.t){
    	this.turn = p2.t;
      score_div.html("Juega: " + p2.t);
    } else {
    	this.turn = p1.t;
      score_div.html("Juega: " + p1.t);
    }
  }
  
  
  checkResult(){
		let winner; //ganador
    let p1 = this.p1; //jugador 1
    let p2 = this.p2; // jugador 2
    let rowSums = new Array(this.s);//suma de filas
    let colSums = new Array(this.s);//suma de columnas 
    let diagSums = new Array(this.s);//suma de diagonales
    let numOpen = 9;//numero de turnos por juego
    let s = this.s //tamanio del tablero

    for (let i=0; i<this.s; i++){
      rowSums[i]= 0;
      colSums[i] = 0;
      diagSums[i] = 0;
    }

    this.cells.forEach(function(element) {
      rowSums[element.r] += element.v;
      colSums[element.c] += element.v;
      numOpen -= abs(element.v);

      if(abs(element.r-element.c) === 0){
      	diagSums[0] += element.v;
      }

      if(abs(element.r-element.c) === 2 || (element.r == 1  && element.c == 1)){
      	diagSums[1] += element.v;
      }
    });

    rowSums.forEach(function(element) {
    	if(element === s){
      	winner = p1.t;
        p1.win();
      }
      if (element === -1*s){
      	winner = p2.t;
        p2.win();
      }
    });

    colSums.forEach(function(element) {
    	if(element === s){
      	winner = p1.t;
        p1.win();
      }
      if (element === -1*s){
      	winner = "El jugador " + p2.t;
        p2.win();
      }
    });

    diagSums.forEach(function(element) {
    	if(element === s){
      	winner = "El jugador " + p1.t;
        p1.win();
      }
      if (element === -1*s){
      	winner = p2.t;
        p2.win();
      }
    });

    if (numOpen === 0 ){
      winner = "ninguno, hay empate";
    }

    return winner;
  }

  
  newGame(){
    this.winState = false;
    this.turn = this.p1.t;
  	score_div.html("Juega: " + this.p1.t);
    this.cells = [];
    for (let i=0; i<this.s; i++){
      for (let j=0; j<this.s; j++){
        this.cells.push({
          "r": i,
          "c": j,
          "t": "",
          "v": 0
      	});
    	}
    }
  }
}

/*variables
* b = board
* p1 = jugador 1
* p2 = jugador 2
* turn = que jugador tiene el turno de jugar
*/
let b;
let p1;
let p2;
let turn;

function setup() {
  p1 = new Player("X");
  p2 = new Player("O");
  createCanvas(400, 400);
  score_div = createDiv('').size(100, 25);
  b = new Board(3, p1, p2); 
}

function draw() {
  background(220);
  b.display();
}


function mousePressed(){
	if (!b.winState){
    if (b.turn === "X"){
      p1.select(b);
    } else {
      p2.select(b);
    }
    b.toggleTurn();
  } else {
  	b.newGame();
  }
}




