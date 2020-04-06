function arrayReplace(arr, elemToReplace, substElem) {
    return arr.map(el => {
        if (el === elemToReplace) {
            el = substElem
        }
        return el
    })
}

