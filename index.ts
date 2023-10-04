function twoSum(nums: number[], target: number): number[] {
    for (let index1 = 0; index1 < nums.length; index1++) {
        for (let index2 = index1+1; index2 < nums.length; index2++) {
            if((nums[index1] + nums[index2]) === target){
                return[index1, index2]
            }
        }
    }

    return []
};

    twoSum([2,7,11,15], 9)
    twoSum([3,2,4], 6)
    twoSum([3,3], 6)