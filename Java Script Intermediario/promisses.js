// setTimeout(() => console.log('Meu resultado'), 5000);

// /*Promises */

// function show() {
//     setTimeout(() => {
//         console.log('Oi')
//     }, 2000);
//     console.log('Até logo!')
// }

// show()

// const minhaPromise = new Promise((resolve, reject) => {
//     let n = 9
//     if(n > 10) {
//         resolve()
// } else {
//     reject ()
// }
// })

// minhaPromise
// .then(result => console.log('resolveu'))
// .catch(err => console.log('errou'))
// .finally() = console.log('Finally!')

// //-----exemplo-------
// /*function showHello() {
//     console.log('Hello')
// }

// function showGoodbye(){
//     console.log('Goodbye!')
// }
// */

// import fetch from 'node-fetc';

// //fetch
// const firstUser = (userId) => {
//     let response = fetch('https://jsonplaceholder.typecode.com/todos/s.userId')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// firstUser(1)

/*fetch('https://viacep.com.br/ws/01001000/json/')
.then(response => response.json())
.then(cep => {
    console.log(cep.bairro, cep.logradouro);
}); */



/*async/await*/
const firstUser = async (userId) => {
    let response = await fetch('https://jslaceholder.typecode.com/todos/${userId}')
    let resultJSON = await response.json()
    //let data = resultJSON.title
    console.log(resultJSON)
}

firstUser(1)

