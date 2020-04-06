function avoidObstacles(arr) {
    let sorted = arr.sort((a,b) => a - b)
    let largestVal = sorted[arr.length - 1]
    for (let i = 0; i <= largestVal + 1; i++) {
        if (arr.every(el => el % i !== 0)) {
            return i
        }
    }
}



// Initial version
/*function avoidObstacles(arr) {
    let sorted = arr.sort((a,b) => a - b)
    let initLength = 2
    let bool = isAvoid(sorted, initLength)
    while (!bool) {
        initLength +=1
         bool = isAvoid(sorted, initLength)
    }

    return initLength
}

function isAvoid(arr, step) {
    for (let i = step; i<=arr[arr.length-1]; i+=step) {
        if (arr.includes(i)) {
            return false
        }
    }
    return true
} */
