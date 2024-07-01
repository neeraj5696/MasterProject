function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            // If the middle element is greater than the next element,
            // then the peak lies on the left side (including mid).
            right = mid;
        } else {
            // If the middle element is less than the next element,
            // then the peak lies on the right side (excluding mid).
            left = mid + 1;
        }
    }

    // At the end of the loop, left and right will converge to the peak element.
    return left;
}
let nums =  [1,2,1,3,5,6,4]
// Output: 2

console.log(findPeakElement(nums))