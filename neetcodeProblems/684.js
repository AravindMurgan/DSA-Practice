// var findRedundantConnection = function (edges) {

//     let par = Array.from({ length: edges.length + 1 }, (_, i) => i)
//     console.log(par)
//     // const find = x => x === par[x] ? par[x] : par[x] = find(par[x])
//     const find = function (x) {
//         const found = x === par[x] ? par[x] : par[x] = find(par[x])
//         return found
//     }
//     const union = function (x, y) {
//         return par[find(y)] = find(x)
//     }
//     // const union = (x, y) => par[find(y)] = find(x)
//     for (let [a, b] of edges) {
//         if (find(a) === find(b)) {
//             return [a, b]
//         }
//         else {
//             union(a, b)
//         }
//     }
// };

var findRedundantConnection = function (edges) {
    const parent = new Array(edges.length + 1)
    const rank = new Array(edges.length + 1).fill(1)
    for (let i = 0; i < edges.length; i++) parent[i] = i

    const find = function (n) {
        p = parent[n]
        while (p != parent[p]) {
            parent[p] = parent[parent[p]]
            p = parent[p]
        }
        return p
    }

    const union = function (n1, n2) {
        const p1 = find(n1), p2 = find(n2)
        if (p1 == p2) {
            // same parent means connection between n1 & n2 is redundant
            return false
        }

        if (rank[p1] > rank[p2]) {
            parent[p2] = p1
            rank[p1] += rank[p2]
        } else {
            parent[p1] = p2
            rank[p2] += rank[p1]
        }
        return true
    }

    for (const [a, b] of edges) {
        if (!union(a, b)) {
            return [a, b]
        }
    }
};

findRedundantConnection([[1, 2], [1, 3], [2, 3]])

// let str = 'hello'
// console.log([...str])
// console.dir([])
// console.dir(Array)
