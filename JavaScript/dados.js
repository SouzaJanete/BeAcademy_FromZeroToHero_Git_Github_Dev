//Type Conversion

//Convertendo String para número e número para String
console.log(Number('9') + 24);
console.log(typeof String(9) + 'Converteu diacho!!');

//Contar Caracteres
let oneWord = "Moacir" //6letras
console.log(oneWord.length) //???



//Maiúsclas e Minúsclas
let phrase = "Olha o bonde da PayLivre uauuuuuuuuuuu"
console.log(phrase.toUpperCase())
console.log(phrase.toLowerCase())

//Convertendo para Inteiro
let decimalNumber = 32.8
console.log(parseInt(decimalNumber))

//Convertendo para Decimal
let intergerNumber = 24
console.log(parseFloat(intergerNumber))

//Trabalhar com casas decimais, números depos da vírgula
let niceNumber = 24.98883422321234242545
console.log(niceNumber.toFixed(4));
console.log(niceNumber.toFixed(4).replace('.', ','));

//Precisão Numérica
let otherNumber = 129/32
console.log(typeof Number(otherNumber.toPrecision()));
