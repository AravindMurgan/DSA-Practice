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

// var canFinish = function (numCourses, prerequisites) {
//     const graph = buildGraph(prerequisites)
//     const visited = new Set()

//     function dfs(course) {
//         if (visited.has(course)) return false
//         if (graph[course] == []) return true

//         visited.add(course)
//         for (let preReq of graph[course]) {
//             if (!dfs(preReq)) return false
//         }
//         visited.delete(course)
//         graph[course] = []
//         return true
//     }

//     for (let course = 0; course < numCourses; ++course) {
//         if (!dfs(course)) return false
//     }

//     return true
// };



var canFinish = function (numCourses, prerequisites) {
    const graph = new Map();
    const visiting = new Set();
    const visited = new Set();

    for (let [v, e] of prerequisites) {
        if (graph.has(v)) {
            let edges = graph.get(v);
            edges.push(e);
            graph.set(v, edges);
        } else {
            graph.set(v, [e]);
        }
    }

    var DFS = function (v) {
        visiting.add(v);
        let edges = graph.get(v);   // get all the edges to explore

        if (edges) {
            //console.log(edges)
            for (let e of edges) {
                if (visited.has(e)) { //skip if it is explored already
                    continue;
                }

                if (visiting.has(e)) { //found e is being explored
                    return true;
                }

                if (DFS(e)) { // DFS deeper if this e is cyclic
                    return true;
                }
            }
        }

        visiting.delete(v); // remove from visiting set when all decedant v are visited
        visited.add(v);
        return false;
    }


    for (const [v, e] of graph) {
        if (DFS(v)) {
            return false; //if cyclic it will not finish so it is false
        }
    }

    return true;
}


console.log('ans::::', canFinish(5, [[0, 1], [0, 2], [2, 3], [3, 4], [1, 4]]))