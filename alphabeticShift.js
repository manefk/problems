function alphabeticShift(string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    let code = "bcdefghijklmnopqrstuvwxyza".split("")

    let result = "";
    for (let char of string) {
        let ind = alphabet.indexOf(char)
        result+= code[ind]
    }
    return result

}

