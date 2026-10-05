
// function mergeData(sessions) {

//     const copy = sessions.slice()
//     const map = {}

//     for (let i = 0; i < copy.length; ++i) {
//         const session = map[String(copy[i].user)]

//         if (session) {
//             session.duration += copy[i].duration
//             session.equipment = Array.from(new Set([...session.equipment, ...copy[i].equipment])).sort()

//         } else {
//             const clonedSession = { ...copy[i] }
//             map[clonedSession.user] = clonedSession;
//         }
//     }

//     return Object.values(map)

// }

// mergeData([
//     { user: 8, duration: 50, equipment: ['bench'] },
//     { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
//     { user: 8, duration: 50, equipment: ['bench'] },
//     { user: 7, duration: 150, equipment: ['bench', 'kettlebell'] },
// ])

// o / p
//     [
//     { user: 8, duration: 100, equipment: ['bench'] },
//     {
//         user: 7,
//         duration: 300,
//         equipment: ['bench', 'dumbbell', 'kettlebell'],
//     },
//     ]

function mergeData(sessions) {

    const result = []
    const map = new Map()

    for (let i = 0; i < sessions.length; ++i) {
        const key = sessions[i].user

        if (map.has(key)) {
            let session = map.get(key)
            session.duration += sessions[i].duration
            session.equipment = Array.from(new Set([...session.equipment, ...sessions[i].equipment])).sort()

        } else {
            const clonedSession = { ...sessions[i] }
            clonedSession.equipment = [...clonedSession.equipment]
            map.set(key, clonedSession)
        }
    }

    return map.values()
}

mergeData([
    { user: 1, duration: 10, equipment: ['barbell'] },
    { user: 1, duration: 30, equipment: [] },
])