/* Função Subprograma
nome
parametros
instruções

function [nome](params){
    instruções
}
* /

var notaP1 = 0
var notaP2 = 0
var notaP3 = 0
var notaP4 = 0
var materia = ""

function retonaResultado(nota) {
    var media = 7 //Media da turma igual a nota 10
    var statusAluno = "";
    if (nota >= media) {
        statusAluno = "Aprovado"
    } else {
        statusAluno = "Reprovado"
    }
    return statusAluno
}

function calculaNotaSwitch(notaP1, notaP2, notaP3, notaP4, materia) {
    var CD = 4 // Coeficiênte de Divisão;

    switch (materia) {
        case "Portugues":
            var soma = notaP1 + notaP4
            var resultado = soma / CD
            var resultadoFinalAluno = retonaResultado(resultado)

            break;
        case "Matematica":
            var soma = notaP1 + notaP2 + notaP3 + notaP4
            var resultado = soma / CD
            var resultadoFinalAluno = retonaResultado(resultado)

            break;
        case "Geografia":
            var soma = notaP1 + notaP2 + notaP3 + notaP4 * 1.5
            var resultado = soma / CD
            var resultadoFinalAluno = retonaResultado(resultado)

            break;
    }
    return resultadoFinalAluno
}

/* SOLID */

/* Calcular área da coroa de um círculo(r1 > r2 e pi 3,14) */
function numeroAoQuadrado(numero) {
    return numero ** 2
}

function calculaAreaCirculo(r) {
    var pi = 3.14
    var area = numeroAoQuadrado(r) * pi
    return area
}


function informaCoroaCirculo(r1, r2) {

    if (r1 < r2) {
        return "Raio do círculo R1 tem que ser maior que o R2"
    }
    var areaR1 = calculaAreaCirculo(r1)
    var areaR2 = calculaAreaCirculo(r2)

    return areaR1 - areaR2
}
function retornaGrao(grao) {
    var grao = 0
    for (var i = 0; i < 9; i++) {
        grao = grao + i
        // more statements
    }
    return grao
    /* for (var i = 1; i <= 64; i++) {
        if (i == 1) {
            grao = 1
        } else {
            grao = grao * 2
        }
        console.log(i)
    } */
}