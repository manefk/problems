function arrayConversion(arr) {
    let isEven = false;
    let res = [...arr]
    while (res.length > 1) {
        res = reduceArr(res, isEven)
        isEven = !isEven
    }
    return +res;
   

}

function reduceArr(arr, isEven) {
    let res = []
    if (isEven) {
        for (let i = 0; i< arr.length; i+=2) {
            res.push(arr[i] * arr[i+1])
        }
    } else {
        for (let i = 0; i< arr.length; i+=2) {
            res.push(arr[i] + arr[i+1])
        }
    }

    return res;
}

