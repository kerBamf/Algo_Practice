function sortAbsolutes(nums) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(Math.abs(nums[i]) > Math.abs(nums[j])) { 
                nums.splice(i-1, 0, nums.splice(j, 1)[0]);
                i - 2
                j - 1
            } else if (Math.abs(nums[i]) === Math.abs(nums[j]) && nums[i] > nums[j]) {
                nums.splice(i-1, 0, nums.splice(j, 1)[0]);
                i - 2
                j - 1
            }
            console.log(nums)
        }
    }
    return nums
}

console.log(sortAbsolutes([1, 2, -2, 3, 4, 4, 6, -6, 7, -8, 9]))