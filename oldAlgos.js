function create_phone_number(numArr){
    let newStringArr = ["(",")"," ","-"]
    for(let i = 0; i < numArr.length; i++){
        if(i <= 2) {
            strVal = numArr[i].toString()
            newStringArr.splice(i+1, 0, strVal)
        } else if (i > 2 && i <= 5) {
            strVal = numArr[i].toString()
            newStringArr.splice(i+3, 0, strVal)
        } else {
            strVal = numArr[i].toString()
            newStringArr.splice(i+10, 0, strVal)
        }
        
    }
    string = newStringArr.join("")
    console.log(string)
    
}

create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

// function hexConverter(first, second, third)

