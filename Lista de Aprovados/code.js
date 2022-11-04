function code(entries) {
    var result = []
    function media(a) {
        if(a.nota >= 5){
            return result.push(a.nome)
        }
    }

    entries.map(media)
    return result
}

module.exports = code