/* Aula 08 - For, listas e Matrizes

*/

function amarelinha() {
    var listaAmarelinha = [1,2,3,4,5,6,7,8]
    var eu4Jogadas = [2,5,3,7]

    for (var i = 0; i < listaAmarelinha.length; i++) {
        for(var r = 0; r < eu4Jogadas.length; r ++){
            if(listaAmarelinha[i] === eu4Jogadas[r]){
                console.log(`i = ${i}`)
                console.log(`r = ${r}`)
                console.log(`amarelinha = ${listaAmarelinha[i]}`)
                console.log(`jogadas = ${eu4Jogadas[r]}`)
                console.log('-----')
            }
                                   /* 
            console.log('----') */
        }


        /* if(posicaoPedra === listaAmarelinha[i]){
            console.log('Encontrou')
        }else{
            console.log(listaAmarelinha[i])
            console.log('Não encontrou')
        } */
    }
}

