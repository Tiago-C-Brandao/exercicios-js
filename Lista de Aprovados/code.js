function code(entries) {

    function aprovado(a) {
        if(a.nota >= 5) return a.nome
        // return a.nota >= 5 // true 
    }

    // function name(a) {
    //     return a.nome
    // }

    result = entries.filter(aprovado)

    return result.map(aprovado)

}

const notes = [
    { "nota": 10, "nome": "Lucas" },
    { "nota": 8, "nome": "Larissa" },
    { "nota": 4, "nome": "Antonio" },
    { "nota": 2, "nome": "Caio" },
    { "nota": 1, "nome": "Madalena" },
    { "nota": 5, "nome": "Estela" },
]

code(notes)
module.exports = code