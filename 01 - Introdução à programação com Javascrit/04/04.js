/* RESPOSTA AQUI 👇 */

/* Vamos trabalhar mais desafios de programação nessa aula */

/* Questão 01 

Cria uma função para ajudar um Parque de Diversões saber se uma pessoa com determinada 
altura pode entrar em determinado brinquedo

Montanha-russa :  Acima de 1,60
Roda gidante : Acima de 1,50 
Carrinho bate-bate: Acima de 1,40
Trem fantasma : Acima de 1,30
Carrossel : Livre

Exemplo:
    Entrada : 1,55
    Saída:
        Montanha-Russa : Não pode Entrar
        Roda Gigante: Liberado
        Carrinho bate-bate: Liberado
        Trem Fantasma : Liberado
        Carrossel : Liberado
*/
<<<<<<< HEAD
var alt
function calculaAltura(alt){
    if ((alt > 1.30) && (alt <= 1.40)){
        console.log("Montanha-Russa: Não pode entrar \nRoda Gigante: Não pode entrar \nCarinho bate-bate: Não pode entrar" +
        "\nTrem Fantasma: Liberado \nCarrossel: Liberado")
    }else if((alt > 1.40) && (alt <= 1.50)){
        console.log("Montanha-Russa: Não pode entrar \nRoda Gigante: Não pode entrar \nCarinho bate-bate: Liberado" +
        "\nTrem Fantasma: Liberado \nCarrossel: Liberado")
    }else if((alt > 1.50) && (alt <= 1.60)){
        console.log("Montanha-Russa: Não pode entrar \nRoda Gigante: Liberado \nCarinho bate-bate: Liberado" +
        "\nTrem Fantasma: Liberado \nCarrossel: Liberado")
    }else if(alt > 1.60){
        console.log("Montanha-Russa: Liberado \nRoda Gigante: Liberado \nCarinho bate-bate: Liberado" +
        "\nTrem Fantasma: Liberado \nCarrossel: Liberado") 
    }else{
        console.log("Montanha-Russa: Não pode entrar \nRoda Gigante: Não pode entrar \nCarinho bate-bate: Não pode entrar" +
        "\nTrem Fantasma: Não pode entrar \nCarrossel: Liberado") 
    }
=======
function calculaAltura() {

>>>>>>> 6a9e8dda34291f4aa51532ae5e156128db32c738
}

/* Questão 02

Crie um programa para auxiliar um cinema saber se o cliente possui direito à meia entrada.
Seu programa deverá receber três variaveis:
    idade do cliente
    possuí carteira de estudande?(Aceitar apenas true ou false)
    dia da semana(As segundas-feiras todos pagam meia)

Lembrando que um cliente paga meia se for maior de 65 anos, ou menor de 21 anos, ou é estudante.
Tente prever também condições absurdas, como uma pessoa e 65 anos estudante.
*/
<<<<<<< HEAD
var idade
var estudante
var dia
function meiaCinema(idade, estudante, dia) {
    
    if((idade > 65) || (idade < 21) || (estudante == true) || (dia == "Segunda-feira")){
        console.log("Tem direito à meia entrada")
    }else{
        console.log("Não tem direito à meia entrada")
    }
}

/* Questão 03

Crie uma função que a propria função cria um número aleatório entre 1 e 10. A função receberá
um "chute" do usuário e deverá retornar se acertou o número gerado pelo programa ou não.

Exemplo: 
Entrada = 2
Processamento = O Programa gerou o número 5
Saída = "Que pena, você chutou 2 mas o nosso número é 5"

<<<<<<< Updated upstream
Entrada = 7
Processamento = O programa gerou o número 7
Saída: "Parabéns! Vocẽ entrou com o número 7 e o programa também gerou o número 7"
=======
lista 01= [0, 2, 5, 7, 10 ,11]
lista 02= [1, 2, 6, 10]
>>>>>>> Stashed changes

Para gerar um número aleatório entre 1 e 10, utilize o seguinte código
Math.floor(Math.random() * 10) + 1
*/
var chute
function adivinha(chute){
    var numero = Math.floor(Math.random() * 10) + 1
    if(chute == numero){
        console.log("Parabéns! Você entrou com o número " + chute + " e o programa também gerou o número" + numero)
    }else{
        console.log("Que pena, você chutou " + chute + " mas o nosso número é " + numero)
    }
}

/* Questão 04

Crie um programa que lê dois números, verifica se eles estão entre 40 e 60, e por
fim retorna o maior entre os dois número

Exemplo:
Entrada: 45 e 55
Saída : Os números estão entre 40 e 60, e o maior deles é 55

Entrada: 47 e 47
Saída: Os números estão entre 40 e 60, e os dois números são iguais

Entrada: 30 e 50
Saída : Os números não estão entre 40 e 60

*/
var num1 
var num2 
function calculaMaior(num1, num2){
    if((num1 >= 40) && (num1 <= 60) && (num2 >= 40) && (num2 <= 60)){
        
        if(num1 > num2){
            console.log("Os números estão entre 40 e 60, e o maior deles é " + num1)
        }else if(num1 < num2){
            console.log("Os números estão entre 40 e 60, e o maior deles é " + num2)
        }else if(num1 == num2){
            console.log("Os números estão entre 40 e 60, e os dois números são iguais")
        }    
    }else{
        console.log("Os números não estão entre 40 e 60")
    }
}

/* Desafio

Procure resolver esse exercício em grupo!
=======
function meiaCinema(idade = 0, carteiraestudante = false, segundaf = false) {
    var mensagemcinema = ""

    if(segundaf === true || carteiraestudante === true || (idade >= 65 || idade <= 21)){
        mensagemcinema = "segunda feira todos pagam meia"
    }
    else{
        mensagemcinema = "Paga inteira"
    }
    /* if (segundaf == true) {
        
    }
    else { mensagemcinema == "se não é segunda, paga inteira" }
    if (carteiraestudante = true) {
        mensagemcinema = "carteira de estudante paga meia"
    }
    else { mensagemcinema = "sem carteira paga inteira" }
    if (idade >= 65 || idade <= 21) {
        mensagemcinema = "pela sua idade paga meia"
    } */

    return mensagemcinema
}
    /* Questão 03
    
    Crie uma função que a propria função cria um número aleatório entre 1 e 10. A função receberá
    um "chute" do usuário e deverá retornar se acertou o número gerado pelo programa ou não.
    
    Exemplo: 
    Entrada = 2
    Processamento = O Programa gerou o número 5
    Saída = "Que pena, você chutou 2 mas o nosso número é 5"
    
    <<<<<<< Updated upstream
    Entrada = 7
    Processamento = O programa gerou o número 7
    Saída: "Parabéns! Vocẽ entrou com o número 7 e o programa também gerou o número 7"
    =======
    lista 01= [0, 2, 5, 7, 10 ,11]
    lista 02= [1, 2, 6, 10]
    >>>>>>> Stashed changes
    
    Para gerar um número aleatório entre 1 e 10, utilize o seguinte código
    Math.floor(Math.random() * 10) + 1
    */
>>>>>>> 6a9e8dda34291f4aa51532ae5e156128db32c738

    function adivinha() {

    }

    /* Questão 04
    
    Crie um programa que lê dois números, verifica se eles estão entre 40 e 60, e por
    fim retorna o maior entre os dois número
    
    Exemplo:
    Entrada: 45 e 55
    Saída : Os números estão entre 40 e 60, e o maior deles é 55
    
    Entrada: 47 e 47
    Saída: Os números estão entre 40 e 60, e os dois números são iguais
    
    Entrada: 30 e 50
    Saída : Os números não estão entre 40 e 60
    
    */

<<<<<<< HEAD
*/
var idade
function idadePlaneta(idade) {
    var idadeSegundos = idade * 12 * 30 * 24 * 60 * 60
    var idadeMercurio = (idade / 6220800).toFixed(1)
    var idadeVenus = (idade / 18662400).toFixed(1)
    var idadeTerra = (idade / 31104000).toFixed(1)
    var idadeMarte = (idade / 58475520).toFixed(1)
    var idadeJupiter = (idade / 368893440).toFixed(1)
    var idadeSaturno = (idade / 915701760).toFixed(1)
    var idadeUrano = (idade / 2612736000).toFixed(1)
    var idadeNetuno = (idade / 5125628160).toFixed(1)
    console.log("Idade em Mercúrio: " + idadeMercurio + " anos.\nIdade em Vênus: " + idadeVenus + " anos.\nIdade na Terra: " + idadeTerra + " anos."+
    "\nIdade em Marte: " + idadeMarte + " anos.\nIdade em Júpiter: " + idadeJupiter + " anos.\nIdade em Saturno: " + idadeSaturno + " anos."+
    "\nIdade em Urano: " + idadeUrano + " anos.\nIdade em Netuno: " + idadeNetuno + " anos.")  
}
=======
    function calculaMaior() {

    }

    /* Desafio
    
    Procure resolver esse exercício em grupo!
    
    Crie um programa que recebe a idade de uma pessoas em segundos e retorne qual seria a
    idade dela se ela estivesse num desses planetas:
    Mecurio : Ano orbital de 0.2 anos da Terra
    Venus: Ano orbital de 0.6 anos da Terra
    Terra: Ano orbital de 1 ano da Terra
    Marte: Ano orbital de 1.88 anos da Terra
    Jupiter: Ano orbital de 11.86 anos da Terra
    Saturno: Ano orbital de 29.44 anos da Terra
    Urãno: Ano orbital de 84 anos da Terra
    Netuno: Ano orbital de 164.79 anos da Terra
    
    Exemplo: Se eu, com 25 anos(777.600.000 segundos de vida) estivesse vivendo em Marte,
    eu teria agora 13,8 anos.
    
    Considere cada mês com 30 dias
    cada dia com 24 horas
    cada hora com 60 minutos
    cada minuto com 60 segundos
    
    */
    function idadePlaneta(idade) {
        var idadeSegundos = idade * 12 * 30 * 24 * 60 * 60

        var idadeMercurio = (idadeSegundos / 6220800).toFixed(1)
        var idadeVenus = (idadeSegundos / 18662400).toFixed(1)
        var idadeTerra = (idadeSegundos / 31104000).toFixed(1)
        var idadeMarte = (idadeSegundos / 58475520).toFixed(1)
        var idadeJupiter = (idadeSegundos / 368893440).toFixed(1)
        var idadeSaturno = (idadeSegundos / 915701760).toFixed(1)
        var idadeUrano = (idadeSegundos / 2612736000).toFixed(1)
        var idadeNetuno = (idadeSegundos / 5125628160).toFixed(1)
        console.log("Idade em Mercúrio: " + idadeMercurio + " anos.\nIdade em Vênus: " + idadeVenus + " anos.\nIdade na Terra: " + idadeTerra + " anos." +
            "\nIdade em Marte: " + idadeMarte + " anos.\nIdade em Júpiter: " + idadeJupiter + " anos.\nIdade em Saturno: " + idadeSaturno + " anos." +
            "\nIdade em Urano: " + idadeUrano + " anos.\nIdade em Netuno: " + idadeNetuno + " anos.")
    }
>>>>>>> 6a9e8dda34291f4aa51532ae5e156128db32c738
