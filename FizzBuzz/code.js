function fizzbuzz() {
    for (var i = 1; i <= 100; i++) {
        fizz = i % 3
        buzz = i % 5
        if(fizz == 0 && buzz == 0) {
            console.log("FizzBuzz")
        } else if (fizz == 0) {
            console.log("Fizz")
        } else if (buzz == 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

module.exports = fizzbuzz