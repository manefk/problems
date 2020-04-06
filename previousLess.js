function previousLess(arr) {
    let res = []
    for (let i = arr.length-1; i>=0; i--) {
        for (let j = i; j>=0; j--) {
            if (arr[i] > arr[j]) {
                res.unshift(arr[j])
                break
            } else if (j === 0) {
                res.unshift(-1)
            }
        }
    }
    return res
}
