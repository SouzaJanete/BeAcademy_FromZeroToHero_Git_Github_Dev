// //Manipulando String e Arrays

// let newPhrase = "Fala  meus queridos e queridas!"
// console.log(newPhrase)
// let phraseToArray = newPhrase.split('')
// console.log(phraseToArray)

// //Convertendo novamente o texto para String

// let phraseModify =  phraseToArray.join("").toLocaleLowerCase()
// console.log(phraseModify)

// //Manipulando String e Arrrays
// //Verificar se contém palavras ou letras

// let StringInclude = "Veem ne mim PayLivre, pay pay"
// console.log(StringInclude.includes("PayLivre"))

// //Objetos

// let ArrayInclide = {
//    "PayLivre",
//    "Veem",
//    "ne mim",
//    "Meu amor",
//    {
//     fisrtName: "Pay",
//     lastName: "Livre"
//    }
// }
// console.log(ArrayInclide.includes("Meu amor"))

// //String starWith
// console.log(StringInclude.startsWith("Ve"))
// //String endWith
// console.log(StringInclude.endsWith("*;*"))

// //Transformando um Array em Caracteres

// let wordToArray = "Quem ta gostando diz Hey!"
// console.log(Array.from(wordToArray))

//Manipualando Arrays
const animals = ["🐔", "🐶", "🐘", "🦒", "🦁"]
console.log(animals)

//Adicionar item no fim do array
console.log(animals.push("🐑"))
console.log(animals)


//Adicionar itens no começo
console.log(animals.unshift("🐸"))
console.log(animals)

//Adicionar item no fim
console.log(animals.pop(""))
console.log(animals)

//Adicionar item no começo
console.log(animals.shift(""))
console.log(animals)


//Pegar somente alguns elementos de Array
//Não modificar array
consol.log(animals.slice(0,3))
console.log(animals)

//Remover 1 ou mais intens no Array
//animals.splice(1,3)
console.log(animals)
//console.log(animals.splice(1,3))

//Encontrar a posição do array
let index = animals.indexOf('🐬') 
console.log(index)
animals.splice(index, 1)
console.log(animals)
