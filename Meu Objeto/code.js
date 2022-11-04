function code(meuObjeto) {
    let convertObject = Object.entries(meuObjeto)

    for(var test of convertObject){
        console.log(`Meu ${test[0]} é ${test[1]}`)
    }
    
    /*for(var test in convertObject){
        console.log(`Meu ${convertObject[test][0]} é ${convertObject[test][1]}`)
    }*/
}

module.exports = code