//ASEDIO
//PRESENTADO POR 
//VALERIA MARTINEZ A00372453
//ROSSY HURTADO A00372572
//CRISTIAN ORTIZ A00372906





class Torre {
    constructor(x, y, ancho, alto, vida) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.alto = alto
        this.vida = vida
        this.image = loadImage("/assets/torre.png")
    }
    pintar(){
        image(this.image, this.x, this.y, this.ancho, this.alto)
    }
}