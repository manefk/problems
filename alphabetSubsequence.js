function alphabetSubsequence(str) {
    let charCodes = []
    for (let i=0; i<str.length; i++) {
        charCodes.push(str.charCodeAt(i))
    }
    for (let i=0; i<charCodes.length-1; i++) {
        if (charCodes[i] >= charCodes[i+1]) {
            return false
        }
    }
    return true;
}

