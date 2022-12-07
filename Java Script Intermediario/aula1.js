// /*Scope*/
// {
//     let x = 2
//     //console.log(x)
// }

// {
//     let y = 2;
// }

// //console.log(y)

// /*Reassign a value */
// let w = 10
// w = 5
// //console.log(w)

// /*Template strings */

// let firstName = "John";
// let lastName = "Doe";

// let text = 'Welcome ${firstName}, ${lastName}!';
// //console.log(text)

// let price = 10;
// let fees = 0.25;
// let total = 'o total do produto é: R$ ${(price + fess)}';
// //console.log(total)

/*immediately invoked  function expression ou IIFE */
(function helloWorld(){
    alert('Hello, world!');
}
)();
(function(message){
    alert(message);
}
)('Hello, world!');

/*Arrow functions */

/*function sum(a) {
    return a + 10;
} */
const sum = a => a + 100;

//console.log(sum(3))

//exemplo com map()
const materials = [
    'Hidrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

const newArray = materials.map(
    function showLength(materials){
        return materials.length
    }
);

//const newArray = materials.map(material => material.length)
console.log(newArray)