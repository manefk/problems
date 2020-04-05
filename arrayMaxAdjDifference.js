function arrMaxDiff(arr) {
    let max = Math.abs(arr[0] - arr[1])
    for (let i = 2; i< arr.length; i++) {
         let diff = Math.abs(arr[i] - arr[i-1])
         max = Math.max(max, diff)
    }
    return max
}
console.log(arrMaxDiff([2,4,1,0]))