class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
    }
}

const graph = function () {
    const g = new Graph();
    ["A", "B", "C", "D", "E"].forEach((v) => g.addVertex(v));
    g.addEdge("A", "B");
    g.addEdge("A", "C");
    g.addEdge("B", "D");
    g.addEdge("C", "D");
    g.addEdge("D", "E");
    return g;
}();

console.log('graph:::', graph);
const buildGraph = (edges) => {
    const graph = {}
    for (let edge of edges) {
        const [a, b] = edge
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }

    return graph
}

const graph2 = buildGraph([['A', 'B'], ['A', 'D'], ['D', 'E'], ['B', 'E']])
console.log('graph2', graph2)

function dfsTopSortHelper(v, n, visited, topNums) {
    visited[v] = true;
    const neighbors = graph.adjacencyList[v];
    for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
            n = dfsTopSortHelper(neighbor, n, visited, topNums);
        }
    }
    topNums[v] = n;
    return n - 1;
}

function dfsTopSort(graph) {
    const vertices = Object.keys(graph.adjacencyList);
    const visited = {};
    const topNums = {};
    let n = vertices.length - 1;
    for (const v of vertices) {
        if (!visited[v]) {
            n = dfsTopSortHelper(v, n, visited, topNums)
        }
    }
    return topNums;
}

console.log(dfsTopSort(graph));