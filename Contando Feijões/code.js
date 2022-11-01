function countBs(word) {
    return countChar(word, "B")
}

function countChar(word, char) {
    var value = 0
    for (var position in word) {
        if(word.charAt(position) == char) {
            value += 1
        }
    }
    return value
}

module.exports = {
    countBs,
    countChar
}