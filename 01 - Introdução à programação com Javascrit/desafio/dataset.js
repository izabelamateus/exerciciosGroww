var notasAlunosMatriz = [
    ["Alfredo", 10, 08 , 10, 10],
    ["Beatriz", 10, 10, 10, 10],
    ["Carlos", 04, 05, 07, 10],
    ["Daniel", 10, 08, 10, 07],
    ["Elaine", 06,07,06,08],
    ["Francine", 10, 09, 10, 10],
    ["Gustavo", 05,06,06,08],
    ["Heitor", 03, 02, 00, 08],
    ["Iago", 07, 03, 08, 07],
    ["Jonathan", 10, 09, 08, 07],
    ["Kyle", 06, 05, 10, 07],
    ["Matheus", 02, 03, 01, 02],
    ["Nair", 10, 08, 09, 07],
    ["Orlando", 05, 07, 04, 06], 
    ["Peter", 09, 07, 08, 06],
    ["Queiros", 02, 05, 03, 04],
    ["Raimundo", 06, 05, 08, 09],
    ["Suzana", 10, 09, 10, 09],
    ["Thais", 07, 05, 04, 09],
    ["Ursula", 08, 08, 07, 09],
    ["Victoria", 06, 07, 08, 10],
    ["Xuxa", 06, 07, 07, 06],
    ["Zelda", 10,10,10,10],
    ["Wagner", 02, 03, 03, 06],
    ["Yasmin", 06, 07, 05, 08]
];

var notasAlunosJSON = {
    01:{
        "nome":"Alfredo",
        "notas":{
            01: "10",
            02: "08",
            03: "10",
            04: "10"
        } 
    },
    02:{
        "nome":"Beatriz",
        "notas":{
            01: "07",
            02: "06",
            03: "08",
            04: "07"
        } 
    },
    03:{
        "nome":"Carlos",
        "notas":{
            01: "04",
            02: "05",
            03: "07",
            04: "10"
        } 
    },
    04:{
        "nome":"Daniel",
        "notas" : {
            01: "10",
            02: "08",
            03: "10",
            04: "07"
        }
    },
    05:{
        "nome":"Elaine",
        "notas" : {
            01: "06",
            02: "07",
            03: "06",
            04: "08"
        }
    },
    06:{
        "nome":"Francine",
        "notas" : {
            01: "10",
            02: "09",
            03: "10",
            04: "10"
        }
    },
    07:{
        "nome":"Gustavo",
        "notas" : {
            01: "05",
            02: "06",
            03: "06",
            04: "08"
        }
    },
    08:{
        "nome":"Heitor",
        "notas" : {
            01: "03",
            02: "02",
            03: "00",
            04: "08"
        }
    },
    09: {
        "nome": "Iago",
        "notas" : {
            01: "07",
            02: "03",
            03: "08",
            04: "07"
        }
    },
    10 : {
        "nome": "Jonathan",
        "notas": {
            01: "10",
            02: "09",
            03: "08",
            04: "07"
        }
    },
    11: {
        "nome": "Kyle",
        "notas" : {
            01: "06",
            02: "05",
            03: "10",
            04: "07"
        }
    },
    12: {
        "nome": "Matheus",
        "notas" : {
            01: "02",
            02: "03",
            03: "01",
            04: "02"
        }
    },
    13: {
        "nome": "Nair",
        "notas" : {
            01: "10",
            02: "08",
            03: "09",
            04: "07"
        }
    },
    14: {
        "nome": "Orlando",
        "notas" : {
            01: "05",
            02: "07",
            03: "04",
            04: "06"
        }
    },
    15: {
        "nome": "Peter",
        "notas" : {
            01: "09",
            02: "07",
            03: "08",
            04: "06"
        }
    },
    16: {
        "nome": "Queiros",
        "notas" : {
            01: "02",
            02: "05",
            03: "03",
            04: "04"
        }
    },
    17: {
        "nome": "Raimundo",
        "notas" : {
            01: "06",
            02: "05",
            03: "08",
            04: "09"
        }
    },
    18: {
        "nome": "Suzana",
        "notas" : {
            01: "10",
            02: "09",
            03: "10",
            04: "09"
        }
    },
    20: {
        "nome": "Thais",
        "notas" : {
            01: "07",
            02: "05",
            03: "04",
            04: "09"
        }
    },
    21: {
        "nome": "Ursula",
        "notas" : {
            01: "08",
            02: "08",
            03: "07",
            04: "09"
        }
    },
    22: {
        "nome": "Victoria",
        "notas" : {
            01: "06",
            02: "07",
            03: "08",
            04: "10"
        }
    },
    23: {
        "nome": "Xuxa",
        "notas" : {
            01: "06",
            02: "07",
            03: "07",
            04: "06"
        }
    },
    24: {
        "nome": "Zelda",
        "notas" : {
            01: "10",
            02: "10",
            03: "10",
            04: "10"
        }
    },
    25: {
        "nome": "Wagner",
        "notas" : {
            01: "02",
            02: "03",
            03: "03",
            04: "06"
        }
    },
    26: {
        "nome": "Yasmin",
        "notas" : {
            01: "06",
            02: "07",
            03: "05",
            04: "08"
        }
    },
}

function desafio01(notasAlunosMatriz){
    var nomeMediaAlunos = []
    var mediasAlunos = []
    var situacaoAluno = ""
    var mediaRecuperacao = 0
    for(var i = 0; i < notasAlunosMatriz.length; i++){
        var soma = 0
        for(var j = 1; j < notasAlunosMatriz[i].length; j++){
            var notasAlunos = notasAlunosMatriz[i][j]
            soma = soma + notasAlunos
            var media = soma/(notasAlunosMatriz[j].length -1)
        }
        var nomeAluno = notasAlunosMatriz[i][0]
        nomeMediaAlunos.push([nomeAluno, media])
        mediasAlunos.push([media])
    }
    mediasAlunos.sort((a, b) => a - b);
    for(var k =0; k < nomeMediaAlunos.length; k++){
        var maiorMediaReprovado = Math.trunc(mediasAlunos.length * 10/100) - 1;
        var mediaReprovacao = mediasAlunos[maiorMediaReprovado]
        var reprovado = parseFloat(mediaReprovacao)
        var menorMediaAprovado = Math.trunc(mediasAlunos.length * 70/100) - 1;
        var mediaAprovacao = mediasAlunos[menorMediaAprovado]
        var aprovado = parseFloat(mediaAprovacao)
        var medias = nomeMediaAlunos[k][1]
        if(medias <= mediaReprovacao){
            situacaoAluno = "Reprovado"
        }
        if(medias > mediaAprovacao){
            situacaoAluno = "Aprovado"
        }
        if((medias > mediaReprovacao) && (medias <= mediaAprovacao) ){
            situacaoAluno = "Recupera????o"
        }
        nomeMediaAlunos[k].push(situacaoAluno)
    }
    mediaRecuperacao = ((aprovado + reprovado) / 2).toFixed(1)
    console.log("Situa????o dos alunos: \n")
    console.log(nomeMediaAlunos)
    console.log("Menor nota para aprova????o: " + mediaAprovacao)
    console.log("Maior nota para reprova????o: " + mediaReprovacao)
    console.log("M??dia necess??ria para aprova????o na recupera????o: " + mediaRecuperacao)    
}