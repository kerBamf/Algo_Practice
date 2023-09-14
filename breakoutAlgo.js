var reduce = function(nums, fn, init) {
    let val = init
    let accum = 0
    reduceArray = []
    if (nums.length === 0) {
        return init
    } else{
    
    for(let i = 0; i < nums.length; i++){
       val = fn(val,nums[i])
        reduceArray.push(val)
    }
}
return reduceArray
};