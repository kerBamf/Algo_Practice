var stringMatching = function(words) {
    let subStrings = []
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words.length; j++) {
            if(words[j].length < words[i].length && words[j] !== words[i]){
                if(words[i].includes(words[j]) == true && subStrings.includes(words[j]) == false ) {
                    subStrings.push(words[j])
                }
            }
        }
    }
    return subStrings
};

var stringMatchingObj = function(words) {
    let subStrings = []
    let subKeyPair = {}
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words.length; j++) {
            if(words[j].length < words[i].length && words[j] !== words[i]){
                if(words[i].includes(words[j])) {
                        subKeyPair = {
                        string: words[i],
                        subString: words[j]
                    }
                    subStrings.push(subKeyPair)
                }
            }
        }
    }
    return subStrings
};

console.log(stringMatchingObj(['mass', 'as', 'hero', 'superhero']))

var stringMatching = function(words) {
    let subStrings = []
    for(let i = 0; i < words.length; i++){
        words.some((value, idx) => {
            if (words[i] !== value && value.length < words[i].length && words[i].contains(value)) {
                subStrings.push(value)
                return true
            }
        })
    }
    return subStrings
};


