


var plusOne = function(digits) {
    let arr = digits
    let idxValue = 1
    function pluserator() {
    if (arr[arr.length-idxValue] + 1 <= 9) {
        arr[arr.length-idxValue] = arr[arr.length-idxValue] + 1
        console.log(arr)
        return arr
    } else if (arr[arr.length-idxValue] + 1 > 9 && arr[arr.length-idxValue-1] !== undefined){
        arr[arr.length-idxValue] = 0
        idxValue = idxValue + 1
        console.log(`Second: ${arr}`)
        pluserator()
    } else {
        arr[arr.length-idxValue] = 0
        idxValue = idxValue + 1
        arr.unshift(1)
        console.log(`Third: ${arr}`)
        return arr
    }
    }
    pluserator()
    return arr
};

let thisArray = [9,9]

console.log(plusOne(thisArray))