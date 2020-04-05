function maxSum(arr, k) {
    let max = 0;
    for (let i = 0; i< k; i++) {
        max+=arr[i]
    }
    for (let i = k; i< arr.length-k+1; i++) {
        let sum = arr[k] - arr[i-k] + arr[i]
        max = Math.max(max, sum)
    }
    return max
}
