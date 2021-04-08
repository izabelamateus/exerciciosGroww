/* Aula 07 While e outras coisas 

while = estrutura de repetição(Laço que executa uma rotina, enquanto uma 
    condição de teste for verdade)
incrementador = 
n = n + 1
x = x + n
= atribuição
== comparação
=== comparação tipos

*/

/* var n = 0
var x = 3
do{
    n++;
    x += n;
    console.log(`O valor de n é : ${n}`)
    console.log(`O valor de x é : ${x}`)
}while (n <= 3); */
var string = "O professor Thiago é um cara bem legal"
var comparacao = "Thiago"
var letraComposicao = "" //Varial Auxiliar para compor o nome
var aux = 0 //Varial para percorrer o While
var posicaoInicial = 0 // Posicao Inicial do nome
var posicaoFinal = 0 // Posicao final do nome

while (aux <= string.length) {
    var letra = string.charAt(aux)
    var letraComposicao = letraComposicao.concat(letra)
    console.log(letraComposicao)
    if (comparacao.includes(letraComposicao)) {
        if (letraComposicao.length === 1) {
            posicaoInicial = aux
        }

        if (comparacao === letraComposicao) {
            posicaoFinal = aux

            console.log(`Posição Inicial em ${posicaoInicial} e posição final em ${posicaoFinal}`)
        }
    } else {
        letraComposicao = ""
    }
    aux++
}


