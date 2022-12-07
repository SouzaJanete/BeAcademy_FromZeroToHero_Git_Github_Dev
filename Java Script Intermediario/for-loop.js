// /*For loop */

// for (let numero = 0; numero < 10; numero ++) {
//     console.log(numero);
// }

// const videoGames = ['Swirch', 'PS4', 'XBox', '3DS'];
// for (let i = 0; i < videoGames,length; i++) {
//     console.log('O game ${i +1} é $ (videoGames[i]}');
// }

    /*Prototypes */
    function Pessoa(nome idade) {
        this.nome = nome;
        this.idade = idade;
        }

        const marcelo = new Pessoa('Marcelo', 44);
        console.log(Pessoa.prototype)

        const nootboook = {
            cor: 'preta',
            ano: 2022,
            especifications: function(value) {
                return 'Este nootbook custa R${value},00: cor ${this.cor}; ano ${this.ano}'
            }

            }
        const dell = {
            marca: 'Dell'
        }
        Object.setPrototypeOf(dell, nootboook)

console.log(dell.especifications(5000))