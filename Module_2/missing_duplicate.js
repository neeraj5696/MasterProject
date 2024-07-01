function findErrorNums(nums) {
    const hashmap = new Map();
    const output = [];
    let duplicate;
    let missing;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (hashmap.has(num)) {
            duplicate = num;
        } else {
            hashmap.set(num, true);
        }
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!hashmap.has(i)) {
            missing = i;
        }
    }

    output.push(duplicate);
    output.push(missing);

    return output;
}
let nums= [1, 2, 3, 4, 5, 6, 7, 8, 8];

console.log(findErrorNums(nums))