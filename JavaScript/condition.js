// //IF AND ELSE
// // SE E SE NÃO


// let num = 10
// let num2 = 20
// let isAdmin = false

// // > < == === != !==
// //$$ (AND)  || (OR)  ! (NOT)
// if (num >= 10 && num2 >== 10) {
//     console.log('VERDADE')
// } else {
//     console.log('FALSO')
// }

// if (!isAdmin) {
//     console.log('Ele não é admin')
// } else {
//     console.log('Ele é admin, tem permissão')
// }


// if (num < 10) {
//     console.log('Sou maior')
// } else if (num1 >= 10 && num2 <= 20) {
//     console.log('Segunda resposta verdade')
// } else {
//     console.log('Resposta falsa')
// }

// //SWITCH

// let myExpresssion = 'x'
// switch (myExpresssion) {
//     case 'a':
//         console.log('Apertou o A')
//     case 'b':
//         console.log('Apertou o B')
//         break
//     case 'c':
//         console.log('Apertou o C')
//         break
//     default:
//         console.log('Você apertou outra tecla', myExpresssion)
//         break
// }

// //Calculadora
// function cal(num1, operator, num2) {
//     let result

//     switch(operator) {
//     case "+":
//     result = num1 + num2
//     break


//     case "-":
//         result = num1 - num2
//         break

//     case "+":
//         result = num1 * num2
//         break

//      case "/":
//             result = num1 / num2
//             break

//     default:
//         console.log('Não entendi')
//         break
//     }
//     [return result]

// }


// console.log(cal(12, '%' , 12))


//Trow and try Catch

//Saber a minha idade

function myAge(myage){
    if(!myage) {
        throw 'Você precisa coloar a idade!'
    }
   console.log('Eu executei depois do erro')
}
try {
    myAge()
    console.log('Já tratei e deu certo')
} catch(error) {
    console.log(error)
}

console.log('Programa continua')

