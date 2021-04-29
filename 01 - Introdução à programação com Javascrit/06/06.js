/* RESPOSTA AQUI 👇 */

/* Questão 01 
Você foi contratado(a) para trabalhar na NBA, a Liga de Basquete Nacional dos Estados Unidos.
Seu trabalho é desenvolver um programa que calcule a quantidade de pontos numa partida. Para isso, 
você deve criar uma função que receba como parametro as cestas de 2 pontos e as cestas de 3 pontos e retorne
a pontuação final do jogo.

exemplo:

função: retornaPontuacao(1, 1)
saída: 5 pontos

função: retonarPontuacao(3, 3)
Saída: 15 pontos
*/

var doisPontos
var tresPontos
 function retornarPontuacao(doisPontos, tresPontos){
     var pontos = doisPontos * 2 + tresPontos * 3
     console.log(`${pontos} pontos`)
 }

/* Questão 02

O rei do Poker te convidou para criar um programa para ajuda-lo na sua jogatina. A sua ideia é
que você o ajude criando uma função que embarque a sua lógica para cada jogada.

Antes de realizazr qualquer jogada, o rei do Poker avalia as seguintes condições:
Se eu multiplicar a probablidade de ganhar multiplado pelo prêmio, menos o custo de jogar for positivo,
vale a pena entrar no jogo. Se for negativo, retira a aposta.

Crie uma função que receba a probabilidade, o prêmio e o custo de jogar, e retorne true, caso seja positivo e false caso
seja negativo

exemplo:
prob = 0.2
premio = 50
custo = 9

retonaAposta(0.2,50,9)
//processamento 0.2*50-9
saida : true
*/
var prob
var premio
var custo
function retornaAposta(prob, premio, custo){
    var apostar = prob * premio - custo
    if(apostar > 0){
        return true
    }else{
        return false
    }
}


/* Questão 03

Um veiculo precisa 10 vezes o total de combustivel para cada quilômetro que queira percorrer. Crie uma função que receba
a quantidade de quilometros e retorne o total de combustivel. 

Importante: Todo carro deve ter sempre, no mínimo 100 litros de gasolina

exemplo: 
entrada: 
calculaCombustivel(16) = 160
calculaCombustivel(3) = 100
*/
var km
function calculaCombustivel(km){
    comb = km * 10
    if(comb < 100){
        console.log(100)
    }else{
        console.log(comb)
    }
}



/* Questão 04

Crie uma função que retorne 1, se entrar com 0 e retorne 0 se entrar com um.

Não será permitido o uso de condicionais, como IF ou Switch

*/