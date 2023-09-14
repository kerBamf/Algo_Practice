var searchInsert = function(nums, target) {
    targetIndex = nums.indexOf[target]
    if (targetIndex !== -1) return targetIndex
    else {
        for(let i = 0; i < nums.length; i++) {
            if (nums[i] < target && nums[i+1] > target) {
                return (i + 1)
            }
        }
    }
};