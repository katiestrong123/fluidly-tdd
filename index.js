module.exports = function assertEquals(expected, actual) {
    //if the expected is an array and the actual is an array too
    //TRUE then do the deep array check and compare length 
    // FALSE else if the expected is an array but actual is not 
    // throw error Expected type Array but found type ...""
    //else if expected not equal to actual, throw was expecting ..."" but found ...""
    
    if(Array.isArray(expected) && Array.isArray(actual)){
        if(expected.length !== actual.length){
            throw('Expected array length ' + expected.length + ' but found ' + actual.length)
        }
    } else if (Array.isArray(expected) && !Array.isArray(actual)){
           throw('Expected type Array but found type ' + typeof actual)
           //capitlize object
    } else if(expected !== actual){
        throw ('Expected ' + expected + ' but found ' + actual)
    }
}
