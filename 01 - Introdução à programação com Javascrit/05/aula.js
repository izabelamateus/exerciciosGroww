/* Aula 05 - arrays e Jsons

array =  lista de dados;

array = ("Thiago", "Matheus", "Victoria", "Romullo", "Flavio", "Davis")
array = ("102", "2002", "2001", "202", "306", "1408")
array = (0, 1, 2, 3, 4)



*/
var hotel = {
    "hotel-name": "Recanto dos Devs",
    "tel-number": "+55 21 35442155",
    "apartamentos": {
        "100": {},
        "101": {},
        "102": {
            "name": "Thiago",
            "number": "+55 21 5555555",
            "profissao": "Programador",
            "sexo": "Masculino"
        },
        "2002": {
            "name": "Matheus",
            "number": "+55 21 5555555",
            "profissao": "Chefe",
            "sexo": "Masculino"
        },
        "2003": {
            "name": "Victoria",
            "number": "+55 21 5555555",
            "profissao": "Chefe",
            "sexo": "Feminino"
        }
    }
}


function hotelGroww(nome) {
    var listaNome = ["Thiago", "Matheus", "Victoria", "Romullo", "Flavio", "Davis"];

    for (var i = 0; i < listaNome.length; i++) {
        var pessoaHospedada = listaNome[i]
        if (pessoaHospedada == nome) {
            console.log(i)
        } else {
            console.log(pessoaHospedada)
        }
    }


}

function hotelGrowwJson(nome) {

    for (var [key, value] of Object.entries(hotel.apartamentos)) {

        if (value.name == nome) {
            return value.number
        }
    }
}

var flavio = [{
    "name": "Flavio",
    /* ... */
}]