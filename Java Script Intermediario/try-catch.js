// class customError {
//     constructor(message) {
//         this.message = message
//     }
// }

// function function1(){
//     console.log('function1 executou')
//     try{
//         console.log('function1 no try')
//         codigoA
//     } catch (error) {
//         console.log('Erro na function')
//         console.error('Erro na function1', error)
//         throw new customError('Erro na function1')
//     }
// }

// function1()


function function2(){
    console.log('function2 executou')
    try{
             console.log('function2 no try')

             codigob
             } catch (error) {
             console.error('Erro na function2 ==>', error)
            throw new Error(error)
             }
             codigob
         }
        
        function main() {
            console.log('main executou')
            try{
                function1()
                function2()
        } catch (error) {
            console.error('erro da main -->', error)
        }
    }
main()