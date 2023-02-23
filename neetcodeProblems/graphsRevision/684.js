var findRedundantConnection = function (edges) {
    const parent = Array.from({ length: edges.length + 1 }, (_, i) => i)

    const find = function (n) {
        return n === parent[n] ? parent[n] : parent[n] = find(parent[n])
    }

    const union = function (x, y) {
        return parent[find(y)] = find(x)
    }

    for (let [a, b] of edges) {
        if (find(a) === find(b)) {
            return [a, b]
        } else {
            union(a, b)
        }
    }

};

edges = [[1, 2], [1, 3], [2, 3]]
findRedundantConnection(edges);