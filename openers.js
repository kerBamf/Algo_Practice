var isValid = function(s) {
    let string = s.split("")
    if (string.length % 2 > 0){
        return false
    }
        while(string.length > 0){
            if(string[0] == ")" || string[0] == "}" || string [0] == "]"){
                return false
            }
            console.log(string[0])
            if(string[0] == "("){
                closeIdx = string.indexOf(")");
                console.log(closeIdx)
                if(closeIdx !== -1){
                    string.splice(0, 1)
                    string.splice(closeIdx - 1, 1)
                } else {
                    return false
                }
            }
            if(string[0] == "{"){
                closeIdx = string.indexOf("}");
                console.log(closeIdx)
                if(closeIdx !== -1){
                    string.splice(0, 1)
                    string.splice(closeIdx - 1, 1)
                } else {
                    return false
                }
            }
            if(string[0] == "["){
                closeIdx = string.indexOf("]");
                console.log(closeIdx)
                if(closeIdx !== -1){
                    string.splice(0, 1)
                    string.splice(closeIdx - 1, 1)
                } else {
                    return false
                }
            }
            console.log(string[0])

        }

        return true

};

console.log(isValid("{[(]})"))