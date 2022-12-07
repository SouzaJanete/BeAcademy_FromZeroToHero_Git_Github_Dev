// //Exemmplo 1

// //Method

// function myfirstFunction() {
//     //Entra meu código
//     console.log("Olhaaa a função!")
// }
// //Execute
// myfirstFunction()


// //função com parametros e argumentos
// //number1 = 32  e number 2 = 24
// function sum(number1, number2){
//     console.log(number1 + number2)
// }

// sum(32, 24)

// //função com retorno
// function myfirstFunctionWithReturn(num1, num2) {
//     let total =  num1 + num2
//     return total

// }

// console.log(myfirstFunctionWithReturn(20,20))

// //Restaurante
// function meuPratoDeComida(comida1, comida2, comida3, comida4) {
//     return 'Meu prato de comid é: ${comida1}, ${comida2}, ${comida3}, ${comida4}'
// }
// const prato = meuPratoDeComida('arroz', 'feijão', 'bife', 'bataa-frita')
// console.log(prato)

// //Arrow Function

// const myfirstArrowFunction = (number1, number2) => {
//     let total = number1 + number2
//     return total;
// }

// const result = myfirstArrowFunction(20,20)
// console.log(result)

// //função anonima
// (function () {
//     console.log('PayLivre S2')
// })() //Execução

// setTimeout(function(){
//     console.log('Vou levar 3 segundos para ser executado!')
// },3000)//3s

// //Parte 1

// ler assunto

// function criarAssunto(assunto) {
//     return assunto
// }

// console.log(criarAssunto(assunto));

// //Parte 2

// ler assunto = 'Estudar' //var = valor

// function criarAssunto(assunto) {
//     return assunto
// }

// console.log(assunto) // resposta => 'estudar'
// console.log(criarAssunto(assunto)); // resposta => 'estudar'

//Parte 3

// ler assunto = 'Estudar' //var = valor

// function criarAssunto(assunto) {
//     assunto = 'Escutar música' //mudança de valor
//     return assunto
// }

// console.log(assunto) // resposta => 'estudar'
// console.log(criarAssunto(assunto)); // resposta => 'escutar música'

//Parte 4


// ler assunto = 'Estudar' //var = valor

// function criarAssunto() { //Sem parâmetro
//     assunto = 'Escutar música' //mudança de valor
//     return assunto
// }

// console.log(assunto) // resposta => 'estudar'
// console.log(criarAssunto(assunto)); // resposta => 'escutar música'

// //Hoising
// digaMinhaIdade()

// function digaMinhaIdade(){
//     return console.log(30)
// }

//Callback

// function minhaFunção (callback) {
//     console.log('Início da minha função =)')

//     callback(15, 15)

//     console.log('Final da minha função')
// }

// minhaFunção(
//     (num1, num2) => {
//         return console.log(num1 + num2)
//     }
// )

//Função construtora
function Sum(num1, num2) {
    this.num1 = num1,
    this.num2 = num2,
    this.cal = function(num1, num2) {
        return total = num1 + num2
    }
}

//const Math = new Sum()
//console.log(math)
//console.log(match.cal(32,32))

//const math2 = new Sum()
//console.log(match.cal(50,64))

// const match = new Sum()
// const num1 = match.num1 = 24
// const num2 = match.num2 = 50


// console.log(num1)
// console.log(num2)
// console.log(match.cal(num1, num2))


// const match2 = new Sum()
// const number1 = match2.num1 = 30
// const number2 = match2.num1 = 10

// console.log(match2.cal(number1, number1))

//const match = new Sum().cal(45,45)

//console.log(match)

const match = new Sum()
console.log(match.calc(20,20))

//
const data = new Date().getDate();
console.log(data)