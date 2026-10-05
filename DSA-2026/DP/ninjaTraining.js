class Solution {

    ninjaTraining(matrix) {
        const dp = Array.from({ length: matrix.length }, () => Array(4).fill(-1));
        dp[0][0] = Math.max(matrix[0][1], matrix[0][2])
        dp[0][1] = Math.max(matrix[0][0], matrix[0][2])
        dp[0][2] = Math.max(matrix[0][0], matrix[0][1])
        dp[0][3] = Math.max(matrix[0][0], Math.max(matrix[0][1], matrix[0][2]))

        for (let days = 1; days < matrix.length; ++days) {
            for (let last = 0; last < 4; ++last) {
                dp[days][last] = 0;

                for (let task = 0; task < 3; ++task) {
                    if (task !== last) {
                        let points = matrix[days][task] + dp[days - 1][task]
                        dp[days][last] = Math.max(dp[days][last], points)
                    }
                }
            }
        }

        console.log(dp)
        return dp[matrix.length - 1][3]


    }
}

matrix = [[10, 40, 70], [20, 50, 80], [30, 60, 90]]
const sol = new Solution()
sol.ninjaTraining(matrix)
