/*Classes */
const Foo =  function(x) {
    this.x=x
}

const foo = new Foo('x')
console.log(foo)

class Book {
    constructor(title, year, author) {
        this.title = title
        this.year = year
        this.author = author
    }
}

const domCasmurro = newBook('Dom Casmurro', 1899, 'Machado de Assis')
const harryPotter = newBook('Harry Potter', 1997, 'J.K. Rowling')

let booklist = []

booklist.push(domCasmurro, harryPotter)
//console.log(booklist)


class CopadoMundo {
    constructor(country, year) {
        this.country = country
        this.year = year
    }
    showCchampion(team) {
        return 'A copo do $(this.country} foi disputada no ano de ${this.year} e o campeão foi${team}'
    }
}
 const copa86 = new CopadoMundo('México', 1986)
 const copa70 = new CopadoMundo('Mexico' 1970)
 const champion86 = copa86.showCchampion('Argentina')
 const champion70 = copa70.showCchampion('Brasil')
