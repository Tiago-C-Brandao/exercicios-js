function code(entries) {
    var result = 0
    function balance(a) {
        if(a.type == "CREDIT") {
            return result += a.value
        } else {
            return result -= a.value
        }    
    }
    
    entries.map(balance)
    return result
}

module.exports = code