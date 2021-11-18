//CROSSY ROAD O SAPITO
//PRESENTADO POR 
//VALERIA MARTINEZ A00372453
//ROSSY HURTADO A00372572
//CRISTIAN ORTIZ A00372906







class Rectangle {

    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }



    intersects(otherRectangle){
        let left = this.x
        let right = this.x + this.width;
        let top = this.y;
        let bottom = this.y + this.height;

        let oleft = otherRectangle.x
        let oright = otherRectangle.x + otherRectangle.width;
        let otop = otherRectangle.y;
        let obottom = otherRectangle.y + otherRectangle.height;

        return !(left >= oright || right <= oleft || top >= obottom || bottom <= otop );
    }

}


class Frog extends Rectangle{

    constructor(x, y, width){
        super(x, y, width, width);
    }

    update(){
        this.x = constrain(this.x, 0, width-this.width);
    }

    show(){
        fill(0, 255, 0, 200);
        rect(this.x, this.y, this.width, this.width);
    }

    move(xdir, ydir){
        this.x += xdir * grid;
        this.y += ydir * grid;
    }
}


class Car extends Rectangle {

    constructor(x, y, width, height, speed) {
        super(x, y, width, height);
        this.speed = speed;
    }

    show(){
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }

    update(){
       this.x += this.speed;
       if(this.speed > 0 && this.x > width+grid){
           this.x = - this.width - grid;
       } else if(this.speed < 0 && this.x < -this.width-grid){
            this.x = width + grid;
       }
    }
}



let frog; 
let cars = [];
let grid = 50;


function setup(){
    createCanvas(500,500);
    resetGame();

    let index = 0;

    for (let i = 0; i < 2; i++) {
        let x = i * 300;
        cars[index] = new Car(x, height - grid * 2, grid * 2, grid, 2);
        index ++;
    }

    for (i = 0; i < 2; i++) {
        let x = i * 200 + 150;
        cars[index] = new Car(x, height - grid * 3, grid, grid, -3.5);
        index ++;
    }

    for (i = 0; i < 4; i++) {
        let x = i * 150 + 25;
        cars[index] = new Car(x, height - grid * 4, grid, grid, 1.2);
        index ++;
    }

    for (i = 0; i < 2; i++) {
        let x = i * 250 + 100;
        cars[index] = new Car(x, height - grid * 6, grid * 1.2, grid, 2.3);
        index ++;
    }

    for (i = 0; i < 3; i++) {
        let x = i * 200 + 30;
        cars[index] = new Car(x, height - grid * 7, grid * 2, grid, -1.3);
        index ++;
    }

    for (i = 0; i < 2; i++) {
        let x = i * 400 + 10;
        cars[index] = new Car(x, height - grid * 8, grid, grid, 1.6);
        index ++;
    }
}



function draw(){
    background(2);
    
    
    fill(255, 100);
    rect(0, 0, width,grid*2);
    rect(0, height-grid,width,grid);
    rect(0, height-grid*5,width,grid);

    for(let i = 0; i < cars.length; i++){
        cars[i].update();
        cars[i].show();

        if(frog.intersects(cars[i])){
            resetGame();
        }
    }


    frog.update();
    frog.show();
}


function resetGame(){
    frog = new Frog(width / 2 - grid / 2, height - grid, grid);
}


function keyPressed() {
    if(keyCode === UP_ARROW){
        frog.move(0, -1);
    }else if(keyCode === DOWN_ARROW){
        frog.move(0, 1);
    }else if(keyCode === RIGHT_ARROW){
        frog.move(1, 0);
    }else if(keyCode === LEFT_ARROW){
        frog.move(-1, 0);
    }
}

