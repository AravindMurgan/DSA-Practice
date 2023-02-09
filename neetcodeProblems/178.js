function isValidTree(n, edges) {
    if (edges.length !== n - 1) return false;

    let graph = new Map();
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }

    for (let [u, v] of edges) {
        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    let visited = new Array(n).fill(false);
    let parent = new Array(n).fill(-1);

    function dfs(node, parentNode) {
        visited[node] = true;
        parent[node] = parentNode;
        for (let neighbor of graph.get(node)) {
            if (!visited[neighbor]) {
                if (dfs(neighbor, node)) return true;
            } else if (neighbor !== parent[node]) {
                return true;
            }
        }
        return false;
    }

    return !dfs(0, -1);
}

console.log(isValidTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]))