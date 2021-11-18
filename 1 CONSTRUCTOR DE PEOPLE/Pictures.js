//CONSTRUCTOR DE PEOPLE
//PRESENTADO POR 
//VALERIA MARTINEZ A00372453
//ROSSY HURTADO A00372572
//CRISTIAN ORTIZ A00372906



class Pictures {
    constructor(image){
        this.image = image;
    }
    
    show(){
        imageMode(CENTER);
        image(this.image, 150, 140);
        imageMode(CORNER);
    }
}