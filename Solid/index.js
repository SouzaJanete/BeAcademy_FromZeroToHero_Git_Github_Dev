//Single responsability principle
//criar uma classe para cada regra de noegócio/responsabilidade

class WeightAdviser {
    constructor(user, weight) {
        this.user = user,
        this.weight = weight
    }

adviser(expectedWeight) {
    if (this.weight >= expectedWeight) {
            weightAlert(this.user)
        }
    }   
}

function weightAlert(user) {
    console.log('${user} está acima do peso')
}

const marcelo = new WeightAdviser ('Marcelo', 91)
marcelo.adviser(90)