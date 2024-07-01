function sortColors(nums) {
    let redPtr = 0;
    let whitePtr = 0;
    let bluePtr = nums.length - 1;

    while (whitePtr <= bluePtr) {
        if (nums[whitePtr] === 0) {
            // Swap nums[redPtr] and nums[mid]
            [nums[redPtr], nums[whitePtr]] = [nums[whitePtr], nums[redPtr]];
            redPtr++;
            whitePtr++;
        } else if (nums[whitePtr] === 1) {
            whitePtr++;
        } else { // nums[mid] === 2
            // Swap nums[mid] and nums[bluePtr]
            [nums[whitePtr], nums[bluePtr]] = [nums[bluePtr], nums[whitePtr]];
            bluePtr--;
        }
    }
}

// Example usage:
let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums); // Output: [0, 0, 1, 1, 2, 2]


// Use a three-pointer approach to partition the array into three sections: red, white, and blue.
//  Initialize three pointers: redPtr, whitePtr, and bluePtr. 
// Iterate through the array and perform the following operations:
// If the current element is 0, swap it with the element at the redPtr position and increment both redPtr and whitePtr.
// If the current element is 1, increment whitePtr.
// If the current element is 2, swap it with the element at the bluePtr position and decrement bluePtr. 
// Note that after the swap, the current element should be re-evaluated without incrementing whitePtr.
