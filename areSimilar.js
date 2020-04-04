function areSimilar(arr1, arr2) {
 
    let firstArr = []
    let secArr = []
    if (arr1.toString() === arr2.toString()) { 
        return true;
    }
  
    for (let i = 0; i<arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            firstArr.push(arr1[i])
            secArr.push(arr2[i])
        }
    }
    secArr = secArr.reverse()
    if (secArr.length === 2 && (firstArr.toString() == secArr.toString())) {
        return true
    }
    return false
}
