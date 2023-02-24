const buildCharMap = (s) => {

    const graph = {}

    for (let c of s) {
        if (graph[c]) {
            graph[c]++
        } else {
            graph[c] = 1
        }
    }

    return graph
}
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const map = buildCharMap(s)

    for (let char of t) {
        if (!(map[char])) return false

        map[char]--
    }

    return true
};