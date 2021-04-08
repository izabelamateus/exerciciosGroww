/* Aula 04 - Tipos de Dados

->dado = 24/01/1996

javascript = tipagem dinâmica.

Boolean = "true" ou "false"
Null = vazio
Undefined = 
Number = inteiro + float
BigInt = 
String = "Qualquer tipo de texto"
Object = ().
carro
    -> cor
    -> tipo 
    -> combustivel()
    -> modelo

array()
JSON
*/

function calculaMedia(media) {

}

/* var meuCarro = new Object();
meuCarro.cor = "Vermelho";
meuCarro.tipo = "Sedan";
meuCarro.combustivel = "Eletrico";
meuCarro.modelo = "Tesla xl"; */

function Carro(cor, tipo, combustivel, modelo) {
    this.cor = cor;
    this.tipo = tipo;
    this.combustivel = combustivel;
    this.modelo = modelo
}

var ford = new Carro("prata", "sedan", "gasolina", "ford focus");

var arr = ['Ford', 'Chevrolet', 'Fiat', 'Ferrari'];
arr[3];

/* JSON (Javascript Object Notation)

[
    
}]
*/

var car =
    [{
        "carro": "ford",
        "cor": "prata",
        "tipo": "sedan",
        "combustivel": "gasolina",
        "modelo": "ford focus"

    },
    {
        "carro": "tesla",
        "cor": "prata",
        "tipo": "sedan",
        "combustivel": "gasolina",
        "modelo": "ford focus"

    },
    {
        "carro": "ferrari",
        "cor": "prata",
        "tipo": "sedan",
        "combustivel": "gasolina",
        "modelo": "ford focus"

    }
    ]