class Solution {
    getMinMax(arr, n) {
        let minValue = Infinity;
        let maxValue = -Infinity;

        for (let item of arr) {
            // find minimum value
            if (item < minValue)
                minValue = item;

            // find maximum value
            if (item > maxValue)
                maxValue = item;
        }
        console.log(minValue, maxValue);
        return [minValue, maxValue]

    }
}

const callSol = new Solution
callSol.getMinMax([5, 8, 1, 11], 4);