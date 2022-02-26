var threeSum = function (nums) {
    let res = [];
    let sortedNum = nums.sort((a, b) => a - b);

    for (let i = 0; i < sortedNum.length; i++) {
        let a = sortedNum[i];
        let b = sortedNum[i - 1];

        if (a === b) {
            continue;
        }

        let lp = i + 1;
        let rp = sortedNum.length - 1;

        while (lp < rp) {
            let le = sortedNum[lp];
            let re = sortedNum[rp];
            let threeSum = a + le + re;

            if (threeSum > 0) {
                rp--;
            } else if (threeSum < 0) {
                lp++;
            } else {
                res.push([a, le, re]);
                while (nums[lp + 1] === nums[lp]) ++lp;
                while (nums[rp - 1] === nums[rp]) --rp;
                ++lp;
                --rp;
            }

        }
    }
    return res;
};