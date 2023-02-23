// var canFinish = function (numCourses, prerequisites) {
//     const graph = new Map()
//     const visited = new Set()
//     const visiting = new Set()

//     for (let [u, v] of prerequisites) {
//         let edge = graph.get(u) || []
//         edge.push(v)
//         graph.set(u, edge)
//     }

//     console.log(graph)

//     function dfs(i) {
//         visiting.add(i)

//         let edge = graph.get(i)

//         if (edge) {
//             for (let e of edge) {
//                 if (visited.has(e)) continue
//                 if (visiting.has(e)) return true

//                 if (dfs(i)) return true
//             }
//         }
//         visiting.delete(i)
//         visited.add(i)
//         return false
//     }

//     for (let i = 0; i < numCourses; ++i) {
//         if (dfs(i)) return false
//     }

//     return true
// };
// console.log(canFinish(2, [[1, 0], [0, 1]]))

const data = [
    {
        service: 'test',
        time: '09:00',
        status: 'success'
    },
    {
        service: 'test',
        time: '09:15',
        status: 'fail'
    },
    {
        service: 'test',
        time: '09:45',
        status: 'success'
    },
    {
        service: 'test',
        time: '10:00',
        status: 'success'
    },
    {
        service: 'test',
        time: '10:15',
        status: 'fail'
    },
    {
        service: 'test',
        time: '10:30',
        status: 'success'
    },

]

function calculateFailureTime(data) {
    let totalFailureTime = 0;
    let currentFailureStartTime = null;

    for (let i = 0; i < data.length; i++) {
        const currentItem = data[i];
        if (currentItem.status === 'fail') {
            // If the status is "fail", set the current failure start time to the timestamp of this item
            currentFailureStartTime = new Date(`2000-01-01T${currentItem.time}:00.000Z`);
        } else if (currentItem.status === 'success' && currentFailureStartTime !== null) {
            // If the status is "success" and there is an ongoing failure, calculate the time difference between the current item's timestamp and the current failure start time
            const currentFailureEndTime = new Date(`2000-01-01T${currentItem.time}:00.000Z`);
            const failureTimeInMinutes = (currentFailureEndTime - currentFailureStartTime) / (1000 * 60);
            totalFailureTime += failureTimeInMinutes;
            currentFailureStartTime = null;
        }
    }

    return totalFailureTime;
}

console.log(calculateFailureTime(data))

// I have a array like this
// where i need to calculate the status failure in minutes
// can u please code in javascript