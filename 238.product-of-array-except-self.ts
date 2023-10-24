function productExceptSelf(nums: number[]): number[] {
  const result = new Array(nums.length).fill(1);
  let left = 1;
  let right = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] *= left;
    left *= nums[i];
    result[nums.length - 1 - i] *= right;
    right *= nums[nums.length - 1 - i];
  }

  return result;
}

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
