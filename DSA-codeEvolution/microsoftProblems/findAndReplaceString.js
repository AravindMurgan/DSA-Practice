// 833. Find And Replace in String
// Input: s = "abcd", indices = [0, 2], sources = ["a", "cd"], targets = ["eee", "ffff"]
// Output: "eeebffff"
// Explanation:
// "a" occurs at index 0 in s, so we replace it with "eee".
// "cd" occurs at index 2 in s, so we replace it with "ffff".

var findReplaceString = function (s, indices, sources, targets) {
    let idx = 0
    let str = s
    for (let num of indices) {
        if (s.split('').splice(num, sources[num].length).join('') === sources[num]) {
            str = str.replace(sources[num], targets[idx])
        }
        idx++
    }

    console.log(str)
};

findReplaceString("abcd",
    [0, 2],
    ["a", "cd"],
    ["eee", "ffff"])