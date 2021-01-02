var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right){
        let m = Math.floor((left + right)/2);
        if (target === nums[m]) {
            return nums.indexOf(target);
        } else if (target < nums[m]){
            right = m - 1;
        } else {
            left = m + 1;
        }
    }
    return -1;
};