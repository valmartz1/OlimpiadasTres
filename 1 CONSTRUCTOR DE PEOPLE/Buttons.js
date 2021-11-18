//CONSTRUCTOR DE PEOPLE
//PRESENTADO POR 
//VALERIA MARTINEZ A00372453
//ROSSY HURTADO A00372572
//CRISTIAN ORTIZ A00372906



class Buttons{
    constructor(x,y,d){
    this.x = x;
    this.y = y;
    this.d = d;
    }
    show(){
        noStroke();
        fill(100);
        circle(this.x,this.y,this.d);
    }
    click(mx,my){
        let result = false;
        if(dist(this.x, this.y, mx, my)<this.d/2){
            console.log("click");
            result = true;
        }
        return result;
    }
}