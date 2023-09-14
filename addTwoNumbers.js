var addTwoNumbers = function(l1, l2) {
    let numOne = []
    let numTwo = []

    function retrieveNumber(root, numArr) {
        if(root == null) return
        if(root.next) retrieveNumber(root.next, numArr)
        numArr.push(root.val.toString())
    }

    retrieveNumber(l1, numOne)
    retrieveNumber(l2, numTwo)

    let sum = numOne.join().parseInt() + numTwo.join().parseInt()

    let sumArr = sum.toString().split() 
};