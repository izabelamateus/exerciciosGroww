/* RESPOSTA AQUI 👇 */

/* Questão 01 

Crie uma função que receba um array, some todos os valores do array e retorne se é par ou impar

Exemplo:
calculaPar([1])
retorno: impar

calculaPar([0,1,5,])
retorno: par
*/
//var lista = [1, 3, 4, 1]
function calculaPar(lista){
    var soma = 0
    for(var i = 0; i < lista.length; i++){
        soma = soma + lista[i]
        

    }
    if(soma % 2 === 0){
        console.log("Par")
    }else{
        console.log("Ímpar")
    }

    
}



/* Questão 02

Crie uma função que receba dois números e calcule o primeiro elevado ao segundo

exemplo:
CalculaExpoente(2,2)
saída: 4
CalculaExpoente(5,5)
Saída: 3125

*/
var n1, n2
function calcula(n1, n2){
    var expoente = n1 ** n2
    console.log(expoente)
}

/* Questão 03
Crie uma função que receba um numero e calcule todos os quadrados de todos os números inteiros até ele.
exemplo:
CalculeSomaQuadrado(3) -> 14
Processamento: 1² + 2² + 3² = 14
*/



/* Questão 04
Cria uma função que receba um array e calcule qual a maior sequencia de inteiros que existe nele.
Exemplo:
calculaSequencia([3,4,1,2]) ->2
(3->4) e (1->2)
calculaSequencia([10,11,12,9,10]) -> 3
(10->11->12)
*/