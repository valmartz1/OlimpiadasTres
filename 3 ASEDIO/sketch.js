//ASEDIO
//PRESENTADO POR 
//VALERIA MARTINEZ A00372453
//ROSSY HURTADO A00372572
//CRISTIAN ORTIZ A00372906








let torre
let arma1
let arma2
let enemigo1 = []
let enemigo2 = []

function setup() {
  createCanvas(500, 500);
  torre = new Torre(220, 220, 80, 100, 100)
  arma1 = new Arma1(80, 80, 40, 40)
  arma2 = new Arma2(80, 420, 40, 40)
}

function draw() {
  background(220);
  torre.pintar()
  arma1.pintar()
  arma2.pintar()

  if (frameCount % 240 == 0) {
    enemigo1.push(new Enemigo(500, 80, 50, 50, 2))
    enemigo2.push(new Enemigo(500, 420, 50, 50, 2))
  }

  enemigo1.forEach(function (elem, i) {
    elem.pintar()
    elem.mover()
  })

  enemigo2.forEach(function (elem, i) {
    elem.pintar()
    elem.mover()
  })

  arma1.dispararAlt(enemigo1.length)
  arma2.dispararAlt(enemigo2.length)

  enemigo1.forEach(function (enemigo, i) {
    arma1.balas.forEach(function (bala, j) {
      if (dist(enemigo.x, enemigo.y, bala.x, bala.y) < enemigo.ancho / 2) {
        arma1.balas.splice(j, 1)
        enemigo.vida -= 1
      }
    })
  })

  enemigo2.forEach(function (enemigo, i) {
    arma2.balas.forEach(function (bala, j) {
      if (dist(enemigo.x, enemigo.y, bala.x, bala.y) < enemigo.ancho / 2) {
        arma2.balas.splice(j, 1)
        enemigo.vida -= 1
      }
    })
  })

  enemigo1.forEach(function (elem, i) {
    if (elem.vida <= 0) {
      enemigo1.splice(i, 1)
      arma1.objetivo = null
    }
  })

  enemigo2.forEach(function (elem, i) {
    if (elem.vida <= 0) {
      enemigo2.splice(i, 1)
      arma2.objetivo = null
    }
  })
}