var mergeAlternately = function(word1, word2) {
    let string1 = word1.split("")
    let string2 = word2.split("")
    let newString = []
    for (let i = 0; i < string1.length || i < string2.length; i++) {
        if (i < string1.length) {
            newString.push(string1[i])
        }
        if (i < string2.length) {
            newString.push(string2[i])
        }
    }

    return newString.join("")

}

console.log(mergeAlternately("pp", "sss"))