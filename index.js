const strictEqual = (a, b) => {
    if(a == b && typeof a == typeof b) {
        console.log('True')
        return("True")
    } else {
        console.log('False')
        return("False")
    }
}

module.exports = strictEqual