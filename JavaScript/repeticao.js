//For
//for (inicio; condição; interação)

// for (let i = 1; i<=10; i++) {
//     console.log(i);
// }

// for (let i = 10; i>=1; i--) {
// //     console.log(i);
// // }

// for (let i = 1; i<=10; i++) {
//     if(i === 5) {
//         //break
//         continue
//     }
//     console.log(i);
// }

// //While (ENQUANTO)

// let interator = 1
// while (interator <= 20) {
//     console.log(interator)

//      //Incremento
//      interator++

// }

//For of
//Array

let number = [2,4,3,5,6]
    //num = numbers(FOR OF)
for (num of number) {
    if (num > 4) {
    console.log(num)   

    }
    
}

let number = ['Maria', 'Pedro', 'Joao', 'Jenifer', 'Luan']
    //num = numbers(FOR OF)
    //FOR OF (Valores do Array
    
for (num of number) {
    console.log(num)   

}
    //For in
    let animals = {
        name: 'leão',
        weight: 200,
        age: 4
    }

    for (item in animals){
        //tipo 1 mostra os valores  de objeto em um For in
        console.log(animals["age"])
         //Tipo 2 para capturar todo o objeto
        console.log(animals)
        //Tipo 3 mostra os valores dentro da propriedade
        console.log(animals[item])
        //Tipo 4 capturar valores individuais das propriedades de um objeto
        console.log(animals.name)
    }

    let arrayName = [
        'Jenifer',
        'Luan',
        'Regis',
        'Moacir'
    ]

    for(item in arrayName) {
        console.log(arrayName[2]) //Mostrar todo o Array
        console.log(arrayName[item]) //Mostra todos os valores
        console.log(arrayName[2]) // Mostrar diretamente um vetor
        console.log(item) // Index dos vetores(Posições--.)


1    }