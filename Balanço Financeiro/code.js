function code(entries) {
    function balance(a, b) {
        if(b.type == "CREDIT") {
            return a + b.value
        } else {
            return a - b.value
        }    
    }
    
    return entries.reduce(balance, 0)
}

module.exports = code