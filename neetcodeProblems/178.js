function buildGraph(edges) {
    const graph = {}
    console.log(edges)
    for (let [a, b] of edges) {
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    console.log(graph)
    return graph
}

function isValidTree(n, edges) {
    // write your code here
    // Create an adjacency list to represent the graph
    // const adjList = new Array(n).fill(null).map(() => []);
    // for (let [u, v] of edges) {
    //     adjList[u].push(v);
    //     adjList[v].push(u);
    // }
    const adjList = buildGraph(edges);
    // const graph = new Map()

    // for(let [u,v] of edges){
    //   let edge = graph.get(u) ||[]
    //   edge.push(v)
    //   graph.set(u,edge)
    // }


    // Create an array to keep track of visited nodes
    const visited = new Array(n).fill(false);

    function dfs(node, parent) {
        visited[node] = true;
        let edge = adjList[node]
        if (edge) {
            for (let neighbor of adjList[node]) {
                // if (neighbor !== parent) {
                //     if (visited[neighbor]) {
                //         return false; // Graph contains a cycle
                //     }
                //     if (!dfs(neighbor, node)) {
                //         return false;
                //     }
                // }
                if (!(visited[neighbor])) {
                    if (dfs(neighbor, node)) return true
                } else if (neighbor !== parent) {
                    return true
                }
            }
        }

        return false;
    }

    // Check if the graph is acyclic and connected
    if (dfs(0, -1)) {
        return false;
    }

    // Check if all nodes are visited
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            return false;
        }
    }

    return true;
}

n = 5, edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
console.log(isValidTree(n, edges))

// Input: n = 5 edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
// Output: false.