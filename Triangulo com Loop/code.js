function loop() {
    hashtag = "#######"
    value = hashtag.length - 1
    for (var property in hashtag) {
        console.log(hashtag.slice(value - property))
    }    
}

module.exports = loop