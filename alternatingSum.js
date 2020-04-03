function alternatingSum(arr) {
    let evenSum = 0;
    let oddSum = 0;
    arr.forEach((el, index) => {
        if (index % 2) {
            oddSum += el
        } else {
            evenSum += el
        }
    }

    )
    return [evenSum, oddSum]
}
console.log(alternatingSum([50,60,60,45,70]))