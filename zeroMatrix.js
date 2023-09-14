function zeroMatrix(matrix) {
    let outputArr = []
    let zeroColumns = []
    let zeroRow = null
    function makeZeroRow() {
        let arr = []
        for (let i = 0; i < matrix[0].length; i++) {
            arr.push(0)
        }
        zeroRow = arr
    }
    makeZeroRow()
    for (let m = 0; m < matrix.length; m++){
        let outputRow = []
        let isZeroed = false
        for (let n = 0; n < matrix[0].length; n++) {
            if (matrix[m][n] != 0) { 
                if(!zeroColumns.includes(n)){
                outputRow.push(matrix[m][n])
                } else {
                    outputRow.push(0)
                }
                
            } else {
                isZeroed = true
                if (!zeroColumns.includes(n)) {
                    zeroColumns.push(n)
                }
                if(outputArr.length != 0) {
                    outputArr.forEach((value, idx) => {
                        outputArr[idx].splice(n, 1, 0)  
                    })
                }
            }
        }
        if(isZeroed == false){
            outputArr.push(outputRow)
        } else {
            outputArr.push(zeroRow)
        }
    }
    return outputArr
}

console.log(zeroMatrix([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))