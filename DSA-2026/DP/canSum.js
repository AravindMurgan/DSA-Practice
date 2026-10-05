function canSum(target, numbers, memo = {}) {
    if (target in memo) return memo[target]
    if (target === 0) return true;
    if (target < 0) return false;
    // console.log(target)

    for (let number of numbers) {
        const remainder = target - number
        if (canSum(remainder, numbers, memo) === true) {
            memo[target] = true
            return true;
        };
    }

    memo[target] = false;
    return false;
}
console.log(canSum(5, [2, 3]));