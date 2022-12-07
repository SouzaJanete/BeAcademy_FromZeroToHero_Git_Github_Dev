Algoritmo "Exemplos operacionais II"//Nome do programa
VAR //Definição das variáveis
    Nome: CARACTERE;
    salario: REAL;
    

INICIO
   escreva("Digite o nome:")
   leia(nome)
   escreval(nome + " Souza ")
   escreval (" Digite o salário: ")
   leia(salario)
   escreval("Salário: ", salario)
   escreval("Salario é menor que o mínimo OU menor que 5000:", ((salario<1200) OU (salario<5000)))
   escreval("Salario NÃO é maior que o mínimo e menor que 5000:", (NÃO ((salario>1200) E (salario<5000))))
   escreval("Salario é IGUAL ao mínomo OU diferente 5000:", ((salario=1200) OU (salario<>5000)))
   escreval("Salario é IGUAL ao minimo e é diferente 5000:", ((salario=1200) XOU (salario<>5000)))
   


Fimalgoritmo