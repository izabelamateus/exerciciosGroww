/* RESPOSTA AQUI 👇 */


/* Questão 01 
Faça uma código que recebe três lados de um triângulo(a,b,c) e retorne o tipo de triângulo
a) A>=B+C não existe o triângulo
b) A² = B² + C² é um triângulo retângulo
c) A² > B² + C² é formado um triângulo obtusângulo
d) A² < B² + C² formando um acutângulo

Exceções: 
O lado A sempre deverá ser o maior de todos(Criar um mecânismo para tratar isso)
Caso sejam fornecidos valores negativos, retornar erro para o usuário.

*/
var a = 0, b = 0, c = 0
function calculaTriangulo(a, b, c) {
    if ((a < b) || (a < c) || (a <= 0) || (b <= 0) || (c <= 0)){
        alert("Erro")
    }else if(a >= b + c){
        console.log("Não existe o triângulo")
    }else if (a**2 == b**2 + c**2){
        console.log("É um triângulo retângulo")
    }else if(a**2 > b**2 + c**2){
        console.log("É um triângulo obtusângulo")
    }else if(a**2 < b**2 + c**2){
        console.log("É um triângulo acutângulo")
    }
   }
    





/* Questão 02

Uma empresa quer aumentar o salário dos funcionários dada a seguinte tábela
-> Até R$400,00 --------------------------- 15%
-> Entre R$400,01 e R$700 ----------------- 12%
-> Emtre R$700,01 e R$1000,00 ------------- 10%
-> Entre R$1000,01 e $2000,00 ------------- 7%
-> Entre R$2000,01 e R$3500,00 ------------ 4%
-> Acima de $3500,01 ---------------------- 0%

Crie um código que recebe o salario do funcionário(apenas numérico) e retorne o salario atual, a porcentagem de correção e o valor corrigido
*/
var salario
function corrigiSalario(salario) {
    var porcentagem = 0, valorCorrigido = 0

    if(salario <= 400){
        porcentagem = "15%"
        valorCorrigido = (salario * 0.15) + salario
    }else if(salario > 400 && salario <= 700){
        porcentagem = "12%"
        valorCorrigido = (salario * 0.12) + salario
    }else if(salario > 700 && salario <= 1000){
        porcentagem = "10%"
        valorCorrigido = (salario * 0.1) + salario
    }else if(salario > 1000 && salario <= 2000){
        porcentagem = "7%"
        valorCorrigido = (salario * 0.07) + salario
    }else if(salario > 2000 && salario <= 3500){
        porcentagem = "4%"
        valorCorrigido = (salario * 0.04) + salario
    }else{
        porcentagem = "0%"
        valorCorrigido = salario
    }
    console.log("O seu salário atual é R$" + salario + ". A porcentagem de correção é R$ " + porcentagem + ". O valor corrigido é R$ " + valorCorrigido + ".")
}


