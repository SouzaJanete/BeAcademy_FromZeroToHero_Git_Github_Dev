Algoritmo "Exemplos operacionais II"//Nome do programa
VAR //Defini??o das vari?veis
    Nome: CARACTERE;
    salario: REAL;
    

INICIO
   escreva("Digite o nome:")
   leia(nome)
   escreval(nome + " Souza ")
   escreval (" Digite o sal?rio: ")
   leia(salario)
   escreval("Sal?rio: ", salario)
   escreval("Salario ? menor que o m?nimo OU menor que 5000:", ((salario<1200) OU (salario<5000)))
   escreval("Salario N?O ? maior que o m?nimo e menor que 5000:", (N?O ((salario>1200) E (salario<5000))))
   escreval("Salario ? IGUAL ao m?nomo OU diferente 5000:", ((salario=1200) OU (salario<>5000)))
   escreval("Salario ? IGUAL ao minimo e ? diferente 5000:", ((salario=1200) XOU (salario<>5000)))
   


Fimalgoritmo