class Helper {
    static isEven(a) {
        if(a%2 == 0) {
            return true
        } else {
            return false
        }
    }

    static isPositive(a) {
        if(a >= 0) {
            return true
        } else {
            return false
        }
    }

    static isNegative(a) {
        if(a < 0) {
            return true
        } else {
            return false
        }
    }
}

module.exports = Helper