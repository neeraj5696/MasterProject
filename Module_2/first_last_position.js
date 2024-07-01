var searchRange = function(nums, target) {
    const result = [-1, -1];

    // Helper function to find the first occurrence of target
    function findFirst(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                if (mid === 0 || nums[mid - 1] !== target) {
                    return mid;
                }
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    // Helper function to find the last occurrence of target
    function findLast(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                if (mid === nums.length - 1 || nums[mid + 1] !== target) {
                    return mid;
                }
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    result[0] = findFirst(nums, target);
    if (result[0] !== -1) {
        result[1] = findLast(nums, target);
    }

    return result;
};


let nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

console.log(searchRange(nums, target))