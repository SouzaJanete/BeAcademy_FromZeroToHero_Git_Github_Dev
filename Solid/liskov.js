// Liskov Substitution Principale
// A ideia principal do princípio de substituição de Liskov é que qualquer função/módulo
//que interaja com uma classe também deve ser capaz de interagir com todas as subclasses dessa classe.
//Isso significa essencialmente que uma classe é intercambiável com suas subclasses.


class flyingBirds {
    fly() {
        console.log('Posso voar')
    }
}
class SwimmingBird {
    swin() {
        console.log('Posso nadar')

    }
}

class Penguin extends SwimmingBird {}
class Duck extends flyingBirds {}

function makeFlyingBirdFly(bird) {
    bird.fly()
}

function makeSwimmingbirdSwim(bird) {

    bird.swin()

}

const pato = new Duck()
const pinquim = new Penguin()

makeFlyingBirdFly(pato)
//makeSwimmingbirdSwim(pinguim)