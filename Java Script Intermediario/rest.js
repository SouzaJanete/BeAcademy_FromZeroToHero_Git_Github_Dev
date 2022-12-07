// // function getSum(...args) {
// //     let total = 0
// //     for (const arg of args) {
// //         total = total + arg
// //     }
// //     return total
// // }

// // //console.log(getSum(2,5))

// // //spread operator

// // const arr = [1, 2, 3];
// // const arr2 = [...arr, 4]

// // //console.log(arr2)

// // ///merge arrays
// // const array1 = [1, 2, 3];

// // const array2 = [4, 5, 6];

// // const mergeArrays = [...array1, ...array2];
// // console.log(mergeArrays)

// /*Destructions */

// const carro = {
//     marca: 'Fiat',
//     ano: 2018,
//     portas: 4,
// }

// //const marca = carro.marca
// //const ano = carro.ano
// //const {marca, ano} = carro;
// //const ano = carro.ano
// //const {marca, ano, portas} = carro;
// //console.log(marca)
// //console.log(ano)
// console.log(portas);
// console.log('O carro é da marca $(marca); ano $(ano) e tem $ (portas) portas')


const cliente = {
    nome: 'Janete',
    compras:{
        digitais: {
            livros: ['Dom Casmurro', 'O Cortiço'],
            filmes: ['O Senhor dos Anéis', 'Matrix']
        },
        físicas: {
            cadernos: ['caderno']
        }
        
    }
}
console.log(cliente.compras.digitais.livros);
console.log(cliente.compras,digitais.filmes);

//const{livros, videos} = cliente.compras.digitais;
//console.log(livros);
//console.log(videos);

//destrucuring arrays

const fruts = ['Banana', 'Uva', 'Morango'];

const primeiraFruta = frutas[0];
const segundaFruta =  frutas[1];
const terceiraFruta = frutas[2];

//com destrucuring
const [primeira, segunda, terceira] = frutas;

console.log(primeira)