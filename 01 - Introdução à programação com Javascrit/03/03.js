/* RESPOSTA AQUI 👇 */

/* Questão 01
Cria uma função que leia o mês do aniversário da pessoa(01 ~ 12) e retorne seu signo:
01 - Capricornio
02 - Aquario
03 - Peixes
04 - Aries
05 - Touro
06 - Gêmeos
07 - Cancer
08 - Leão
09 - Virgem
10 - Libra
11 - Escorpião
12 - Sagitário

*/
var mes 
function leSigno(mes){
  
    switch(mes){
        case 1, 01:
            console.log("Seu signo é Capricórnio!")
            break;
        case 2, 02:
            console.log("Seu signo é Aquário!")
            break;
        case 3, 03:
            console.log("Seu signo é Peixes!")
            break;
        case 4, 04:
            console.log("Seu signo é Áries!")
            break;
        case 5, 05:
            console.log("Seu signo é Touro!")
            break;   
        case 6, 06:
            console.log("Seu signo é Gêmeos!")
            break;
        case 7, 07:
            console.log("Seu signo é Câncer!")
            break;
        case 8, 08:
            console.log("Seu signo é Leão!")
            break;
        case 9, 09:
            console.log("Seu signo é Virgem!")
            break;
        case 10:
            console.log("Seu signo é Libra!")
            break;
        case 11:
            console.log("Seu signo é Escorpião!")
            break;
        case 12:
            console.log("Seu signo é Sagitário!")
            break;  
        default:
            console.log("Este número não corresponde a um mês!")      
    }

function leSigno() {

}

/* Questão 02

Cria uma função que leia dois números e retorne como resultado os seguintes valores:
a) a multiplicação entre eles
b) a divisão entre eles eles
c) a soma entre eles
d) a subtração entre eles
*/
var n1 = 0
var n2 = 0
function calculaTudo(n1, n2){
    var multiplicacao = n1 * n2
    var divisao = n1/n2
    var soma = n1 + n2
    var subtracao = n1 - n2
    console.log("Resultado \nMultiplicação: " + multiplicacao + "\nDivisão: " + divisao + "\nSoma: " + soma + "\nSubtração: " + subtracao)
function calculaTudo() {

}
/* Questão 03

Carlos deseja fazer um omelete. Na receita que leu na internet, um omelete sempre deve levar
2 ovos. 

Crie uma função que retorne para Carlos quantos omeletes ele consegue fazer com a quantidade 
de ovos que ele possue

exemplo: 
entrada 5 ovos
saída 2 omeletes

Entrada 4 ovos
saída 2 omeletes

*/
var ovos
function retornaOmelete(ovos){
    var omeletes = ovos / 2
    var totalOmeletes = Math.floor(omeletes)
    if(ovos < 2){
        console.log("É preciso de pelo menos dois ovos para fazer um omelete!")
    }else{
    console.log(totalOmeletes + " omeletes")
    }
    }

function retornaOmelete() {


}
/*
Questão 04

Crie um programa que funciona como uma calculadora. O usuário entrara com
3 inputs(Tipo de operação,número 01, número 02)

O seu programa deve receber o tipo de operação entrada pelo usuário e garantir que
os dois números entrados serão calculados de acordo.

Exemplo:
Chamada : functionCalculadora("Multiplicação", 2, 2)
Saída : "A calculadora executou a operação de Multiplicação e retornou o valor 4"

Será necessário criar pelo menos as quatro operações básicas da matemática(
    multiplicação,
    divisão,
    subtração e
    adição
)

Pontuação bônus: Criar mais operações matemáticas
Pontuação bônus: Criar uma função separada para cada operação matemática.

*/
var operacao
var n1, n2
function functionCalculadora(operacao, n1, n2) {
    switch(operacao){
        case "Multiplicação":
            multiplicacao(n1, n2)
            break;
        case "Divisão":
            divisao(n1, n2)
            break;
        case "Subtração":
            subtracao(n1, n2)
            break;
        case "Adição":
            adicao(n1, n2)
            break;
         default:
            console.log("Erro")     
    }
    

    function multiplicacao(n1, n2){
        var resultado = n1 * n2
        console.log("A calculadora executou a operação de Multiplicação e retornou o valor " + resultado)
    }
    function divisao(n1, n2){
        var resultado = n1 / n2
        console.log("A calculadora executou a operação de Divisão e retornou o valor " + resultado)
    }
    function subtracao(n1, n2){
        var resultado = n1 - n2
        console.log("A calculadora executou a operação de Subtração e retornou o valor " + resultado)
    }
    function adicao(n1, n2){
        var resultado = n1 + n2
        console.log("A calculadora executou a operação de Adição e retornou o valor " + resultado)
    }
function functionCalculadora(operacao, valor01, valor02) {
    var valor = 0
    if (operacao == "Multi") {
        valor = multipla(valor01, valor02)
    }

    return `A calculadora executou a operação ${operacao} e o valor deu : ${valor}`
}

function multipla(a, b) {
    return a * b;
}

/* Questão 02 (Valendo uma pontuação maior)


Questão OBI(Olimpíada Brasileira de Informática - 2012, Fase 2, Nível Junior)

João Deseja fazer bolos para seus amigos usando uma receita que indica que devem ser
usadas 2 xícaras de farinha de trigo, 3 ovos e 5 colheres de sopa de leite. Em casa
ele tem A xícaras de trigo, B ovos e C colheres de sopa de leite. João não tem muita
prática com a cozinha e portanto ele só se arriscará a fazer medidas exatas da receita
de bolo (por exemplo, se ele tiver material suficiente para
fazer mais do que 2 e menos do que 3 bolos, ele far´a somente 2 bolos). Sabendo disso,
ajude João escrevendo uma função que determine qual a quantidade máxima de bolos que 
ele consegue fazer
Entrada: Os Parâmetros de entrada da função são três números Inteiros A, B e C, indicando
respectivamente o número de xícaras de farinha de trigo, o núimero de ovos e o número de 
colheres de sopa de leite que João tem em Casa

Saída: Retornar a quantidade máxima de bolos
entrada : 4,6,10 saída: 2
entrada : 4, 6, 9 saída : 1
*/
var Atrigo
var Bovos
var Cleite
function calculaBolo(Atrigo, Bovos, Cleite) {
    var receitaTrigo = Math.floor(Atrigo / 2)
    var receitaOvos = Math.floor(Bovos / 3)
    var receitaLeite = Math.floor(Cleite / 5)
    if((receitaTrigo == receitaOvos) && (receitaOvos == receitaLeite)){
        console.log(receitaTrigo)
    }else{
        if((receitaTrigo <= receitaOvos) && (receitaTrigo <= receitaLeite)){
            console.log(receitaTrigo)
        }else if((receitaOvos <= receitaTrigo) && (receitaOvos <= receitaLeite)){
            console.log(receitaOvos)
        }else{
            console.log(receitaLeite)
        }
    }

    
function calculaBolo(far, ov, le) {
    var qtFarinhaDeTrigo = far/2
    var qtOvos = ov/3
    var qtLeite = le/5
    var mensagemBolo = ''

    if (qtFarinhaDeTrigo === qtOvos && qtOvos === qtLeite) {

        mensagemBolo = qtFarinhaDeTrigo

    }else{

        if(qtFarinhaDeTrigo < qtOvos && qtFarinhaDeTrigo < qtLeite){
            mensagemBolo = qtFarinhaDeTrigo
        }
        if(qtLeite < qtFarinhaDeTrigo && qtLeite < qtOvos){
            mensagemBolo = qtLeite
        }
        if(qtOvos < qtFarinhaDeTrigo && qtOvos < qtLeite){
            mensagemBolo = qtOvos
        }
    }

    console.log(`Total de bolos ${mensagemBolo}`)


    /* for(var i = 1; i <= 10; i++){
        if(farinhaDeTrigo%2 == 0 && ovos%3 == 0 && leite%5 == 0){
            var bolo = 0 
            bolo = bolo + 1   
        }
        
    }   */



}