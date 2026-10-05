const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum == 0) return []
    if (targetSum < 0) return null;

    let shortestTargetArray = null;

    for (let num of numbers) {
        const diff = targetSum - num;
        const arr = bestSum(diff, numbers, memo)

        if (arr !== null) {
            const combo = [...arr, num];
            if (shortestTargetArray == null || combo.length < shortestTargetArray.length) {
                shortestTargetArray = combo;
            }
        }
    }

    memo[targetSum] = shortestTargetArray
    return shortestTargetArray;

}

console.log(bestSum(7, [5, 3, 4, 7]));     // [7]
// console.log(bestSum(8, [2, 3, 5]))         // [3, 5]
// console.log(bestSum(8, [1, 4, 5]))         // [4, 4]
// console.log(bestSum(100, [1, 2, 5, 25]))   // [25, 25, 25, 25]
// console.log(bestSum(7, [2, 4]))            // null