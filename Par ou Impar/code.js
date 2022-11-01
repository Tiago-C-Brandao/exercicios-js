function isEven(n) {
    if (n == 0) {
        return true;
    } else if(n == 1) {
        return false
    } else if (n > 1) {        
        return isEven(n - 2)
    } else if (n < 0) {
        return isEven(n + 2)
    }
}

/*function isEven(n) {
    while(n > 1) {
        n -= 2
        switch (n) {
            case 0: 
                return true;
                break;
            case 1: 
                return false;
                break;
            default:
        }
    }

    while(n < 0) {
        n += 2
        switch (n) {
            case 0: 
                return true;
                break;
            case 1: 
                return false;
                break;
            default:
        }
    }
}*/

module.exports = isEven