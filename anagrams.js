function anagrams(stringA, stringB) {
    if (stringA.length !== stringB.length) {
        return false
    }
    
    const aCharMap = buildCharMap(stringA)
    const bCharMap = buildCharMap(stringB)

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true;
}

function buildCharMap(str) {
    let dict = {}
    for (let char of str) {
        dict[char] = dict[char] + 1 || 1
    }
    return dict
}

