function majorityElement(nums: number[]): number {
    let majorityElement: number | null = null;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            majorityElement = num;
            count = 1;
        } else if (num === majorityElement) {
            count++;
        } else {
            count--;
        }
    }

    return majorityElement!;
}


majorityElement([3,2,3])
majorityElement([2,2,1,1,1,2,2])