/**
 * Hilfsfunktion factorial
 * @param {int} n - n
 */
function factorial(n) {
    if (n == 0) return 1
    else return n * factorial(n-1)
}


/**
 * Berechnet den Binomialkoeffizent
 * @param {int} n - n
 * @param {int} m - über m
 */
function binomkoeff(n, k) {
    let nfac = factorial(n)
    return nfac/(factorial(k)*factorial(n-k))
}

/**
 * Führt ein paar einfache Tests durch
 */
function runTests(){
    console.log("Test 1: (0,0) = 1" , (binomkoeff(0,0) == 1))
    console.log("Test 2: (2,1) = 2" , (binomkoeff(2,1) == 2))
    console.log("Test 3: (1,1) = 1" , (binomkoeff(1,1) == 1))
    console.log("Test 4: (5,2) = 10" , (binomkoeff(5,2) == 10))
    console.log("Test 5: (49,6) = 13983816" , (binomkoeff(49,6) == 13983816))
}

runTests()


