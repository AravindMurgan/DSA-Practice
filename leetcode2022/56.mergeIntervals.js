// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.



// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    const res = [intervals[0]];

    for (let [start2, end2] of intervals) {
        let end1 = res[res.length - 1][1];
        // let start2=interval[0];
        // let end2=interval[1];

        if (end1 >= start2) {
            res[res.length - 1][1] = Math.max(end1, end2)
        } else {
            res.push([start2, end2])
        }
    }

    return res
};