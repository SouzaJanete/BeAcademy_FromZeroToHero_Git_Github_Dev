/*Funcões de Callback */
function hello(name) {
    console.log(name)
}


function helloUser(callback) {
    callback{'Marcelo'}
}

//helloUser(hello)

const callback = e => alert('Foi clicado')

window.addEventListener('click', callback)