/* Aula 06 Objetos e funções
Objeto = Coleção de propriedades(uma associação entre chave ou valor);


*/

var registroPessoa = {
    "locadora": "dev-filmes",
    "clientes": {
        "Thiago": {
            "nome": "Thiago",
            "sobrenome": "Guedes",
            "datadenascimento": "24-01-1996",
            "corfavorita": "azul",
            "filmefavorito": "coração valente",
            "generofavorito": "aventura",
            "ultimofilme": "pokemon-2000",
            retornaNome: function () {
                return this.nome + " " + this.sobrenome
            },
            retornaFavorito: function () {
                return `cliente ${retornaNome()} gosta do
                filme ${this.filmefavorito}, seu gênero favorito é ${this.generofavorito}
                , e seu último filme foi ${this.ultimofilme}`
            }
        },
        "João": {
            "nome": "João",
            "sobrenome": "Feijão",
            "data-de-nascimento": "24-01-1996",
            "cor-favorita": "marrom",
            "filmefavorito": "Magico de Oz",
            "generofavorito": "Fantasia",
            "ultimofilme": "Alice no pais das maravilhas",
            retornaNome: function () {
                return this.nome + " " + this.sobrenome
            },
            retornaFavorito: function () {
                return `cliente ${this.nome} ${this.sobrenome} gosta do
                filme ${this.filmefavorito}, seu gênero favorito é ${this.generofavorito}
                , e seu último filme foi ${this.ultimofilme}`
            }
        },
        "Jasmine": {
            "nome": "Jasmine",
            "sobrenome": "Ababua",
            "datadenascimento": "24-01-1996",
            "corfavorita": "Azul-claro",
            "filmefavorito": "Lawrence da Arabia",
            "generofavorito": "Romance",
            "ultimofilme": "Branca de neve",
            retornaNome: function () {
                return this.nome + " " + this.sobrenome
            },
            retornaFavorito: function () {
                return `cliente ${this.nome} ${this.sobrenome} gosta do
                filme ${this.filmefavorito}, seu gênero favorito é ${this.generofavorito}
                , e seu último filme foi ${this.ultimofilme}`
            }
        }
    }


}

function retornaFavorito(nome) {

    for (var [key, value] of Object.entries(registroPessoa.clientes)) {

        if (key == nome) {
            console.log(value)
            console.log(`O cliente ${value.nome} ${value.sobrenome} gosta do
            filme ${value.filmefavorito}, seu gênero favorito é ${value.generofavorito}
            , e seu último filme foi ${value.ultimofilme}`);
        }
    }
}
