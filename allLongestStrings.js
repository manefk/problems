function allLongestStrings(arr) {
    let longestLength = 0;
    arr.forEach(el => {
        longestLength = Math.max(longestLength, el.length)
    })
    return arr.filter(el => longestLength === el.length)
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba2"]))