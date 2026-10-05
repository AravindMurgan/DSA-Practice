// function mergeData(sessions) {
//     const copy = sessions.slice()
//     const map = new Map()

//     for (let i = 0; i < copy.length; ++i) {
//         const session = map.get(copy[i].user)
//         if (session) {
//             session.duration += copy[i].duration
//             session.equipment = Array.from(new Set([...session.equipment, ...copy.equipment]))

//         } else {
//             let clonedSession = copy[i]
//             // clonedSession ={...clonedSession,equipment:Array.from(new Set(clonedSession.equipment))}
//             map.set(copy[i].user, clonedSession);
//         }
//     }

//     return map.values()
// }

export default function mergeData(sessions) {
    const copy = sessions.slice()
    const map = new Map()

    for (let i = 0; i < copy.length; ++i) {
        const session = map.get(copy[i].user)
        if (session) {
            session.duration += copy[i].duration
            // session.equipment = [...session.equipment,...new Set(copy[i].equipment)]
            session.equipment = Array.from(new Set([...session.equipment, ...copy[i].equipment])).sort()

        } else {
            let clonedSession = { ...copy[i] }
            clonedSession = { ...clonedSession, equipment: [...clonedSession.equipment] }
            map.set(copy[i].user, clonedSession);
        }
    }

    return [...map.values()]
}
arr = [
    { user: 8, duration: 50, equipment: ['bench'] },
    { user: 7, duration: 150, equipment: ['dumbbell'] },
    { user: 1, duration: 10, equipment: ['barbell'] },
    { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
    { user: 7, duration: 200, equipment: ['bike'] },
    { user: 2, duration: 200, equipment: ['treadmill'] },
    { user: 2, duration: 200, equipment: ['bike'] },
];
mergeData(arr)