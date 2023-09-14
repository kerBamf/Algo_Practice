//reverse an array

// function reverseWords(arr) {
//     return arr.join('').split(' ').reverse().join(' ').split('')
// }

// function reverseWords(arr) {

//     arr = arr.join('').split(' ')

//     for (let i = 0, j = arr.length-1; i<j; i++, j--) {
//         let hold = arr[j]
//         arr[j] = arr[i]
//         arr[i] = hold
//     }

//     arr = arr.join(' ').split('')

//     return arr
// }

// function reverseWords(arr, s, e) {

//     function reverse(array, start, end) {
//         for (let i = start, j = end; i<j; i++, j--) {
//         let hold = array[j]
//         array[j] = array[i]
//         array[i] = hold
//         }
//     }

//     reverse(arr, s, e)

//     let count = 0
//     let idx = 0

    // for(let i = 0; i < arr.length; i++) {
    //     if (arr[i-1] == ' ' || i == 0 && arr[i] !== ' ') {
    //         idx = i
    //     } else if (arr[i] !== ' ') {
    //         count ++
    //     }
    //     if (arr[i] == ' ' || i == arr.length-1) {
    //         reverse(arr, idx, idx + count)
    //         count = 0
    //     }
    // }

//     return arr
// }

// let array = ['L', 'e', 't', ' ', ' ', ' ', 'm', 'e', ' ', 'd', 'o', ' ', ' ', ' ', ' ', ' ', 'm', 'y', ' ', 'o', 'w', 'n', ' ', 'c', 'o', 'd', 'e']

// console.log(reverseWords(array, 0, array.length-1))

var reverseWords = function(s) {
    let array = s.split('').reverse()

    console.log(array)

    //Reverse helper function
    function reverse2(arr, start, end) {
        for(let i = start, j = end; i < j; i++, j--) {
            let hold = arr[j]
            arr[j] = arr[i]
            arr[i] = hold
        }
    }

    //Remove extra spaces in and around
    for(let i = 0; i < array.length; i++) {
        if(i == 0 && array[i] == ' ') {
            array.shift()
            i--
        } else if (array[i-1] == ' ' && array[i] == ' ') {
            array.splice(i, 1)
            i--
        } else if (i == array.length - 1 && array[i] == ' ') {
            array.pop()
            i--
        }
    }

    console.log(array)

    //Reverse individual words
    let idx = 0
    let count = 0

    for(let i = 0; i < array.length; i++) {
        if (i == 0 || array[i-1] == ' ' && array[i] !== ' ') {
            idx = i
        } else if (array[i] !== ' ') {
            count++
        } else if (array[i] == ' ' || i == array.length - 1) {
            reverse2(array, idx, idx + count)
            count = 0
        }
    }

    console.log(array)

    let string = array.join('')

    console.log(string)
    return string


};

reverseWords("the sky is   blue")