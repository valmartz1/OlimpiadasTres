//ASEDIO
//PRESENTADO POR 
//VALERIA MARTINEZ A00372453
//ROSSY HURTADO A00372572
//CRISTIAN ORTIZ A00372906






class Arma1 {
    constructor(x, y, ancho, alto) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.alto = alto
        this.image = loadImage("/assets/pistola1.png")
        this.balas = []
    }
    
    pintar() {
        imageMode(CENTER)
        image(this.image, this.x, this.y, this.ancho, this.alto)
        imageMode(CORNER)
    }

    dispararAlt(enemyLenght) {
        if (enemyLenght > 0) {
            if (frameCount % 60 == 0) {
                this.balas.push(new Balas(this.x, this.y, 5))
            }
        }
        for (let i = 0; i < this.balas.length; i++) {
            this.balas[i].pintar()
            this.balas[i].moveAlt()
        }
    }
}