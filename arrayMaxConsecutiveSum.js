function maxSum(arr, k) {
    let max = 0;
    let sum = 0;
    for (let i = 0; i< k; i++) {
        sum+=arr[i]
    }
    max = sum
    for (let i = k; i< arr.length; i++) {
        sum = sum - arr[i-k] + arr[i]
        max = Math.max(max, sum)
    }
    return max
}

