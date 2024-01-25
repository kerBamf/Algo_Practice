var gcdOfStrings = function(str1, str2) {
    let divArr = []
    //Step 1, find the largest common string
    for (let i = 0; i < str1.length && i < str2.length; i++) {
        if (str1[i] === str2[i]) {
            divArr.push(str1[i])
        } else {
            return ""
        }
    }
    
    //Check for even division and adjust divisor
    function checkDivision(string) {
        console.log("Starting check")
        let divPointer = 0
        for (let i = 0; i < string.length && divArr.length > 0; i++) {
            if (string.length % divArr.length !== 0 && divArr.length > 2) {
                divArr.pop()
                i = -1;
                divPointer = 0
                continue
            }
            if (divArr[divPointer] !== string[i] && divArr.length > 2) {
                divArr.pop();
                i = -1;
                divPointer = 0;
            }
            if (divPointer === divArr.length - 1) {
                    divPointer = -1;
                }
            divPointer += 1
            }
        }

    checkDivision(str1)
    checkDivision(str2)

    if(divArr.length > 0) {
        let divisor = divArr.join("")
        console.log(divisor)
        return divisor
    } else {
        console.log("")
        return ""
    }
};

gcdOfStrings("ABCDEF", 'ABC')