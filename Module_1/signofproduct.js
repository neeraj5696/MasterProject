function signOfProduct(nums) {
  // Write your code inside this function only.
  let empty = 1;
  function product(nums) {
    for (let i = 0; i < nums.length; i++) {
      empty *= nums[i];
    }
    return empty;
  }
  let x = product(nums);

  if (x > 0) {
    return 1;
  } else if (x < 0) {
    return -1;
  } else {
    return 0;
  }
}
let nums = [2, 3, 43, -1];
console.log(signOfProduct(nums));
