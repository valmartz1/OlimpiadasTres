//ASEDIO
//PRESENTADO POR 
//VALERIA MARTINEZ A00372453
//ROSSY HURTADO A00372572
//CRISTIAN ORTIZ A00372906






class Balas {
    constructor(x, y, radio) {
        this.x = x
        this.y = y
        this.radio = radio
    }
    pintar() {
        circle(this.x, this.y, this.radio * 2)
    }
    moveAlt() {
        this.x += 2
    }
}