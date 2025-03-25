function setHasOverlap(setA, setB) {
  // Bundler doesn't transpile properly when doing for-of for sets.
  for (const val of Array.from(setA)) {
    if (setB.has(val)) {
      return true;
    }
  }

  return false;
}

function selectData(sessions, options = {}) {
    const sessionsProcessed=[]
    const sessionsUser= new Map()
    const reversedSessions=[...sessions].reverse()

    reversedSessions.forEach((session)=>{
      if(options.merge && sessionsUser.has(session.user)){
        const userSession = sessionsUser.get(session.user)
        userSession.duration +=session.duration
        session.equipment.forEach(eq=>{
          userSession.equipment.add(eq)
        })

      }else{
        const cloneSession = {
          ...session,
          equipment:new Set(session.equipment)
        }

        if(options.merge){
          sessionsUser.set(session.user,cloneSession)
        }

        sessionsProcessed.push(cloneSession)
      }
    })

    console.log(sessionsProcessed)
}

let sessions =[
    { user: 8, duration: 50, equipment: ['bench'] },
    { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
    { user: 1, duration: 10, equipment: ['barbell'] },
    { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
    { user: 7, duration: 200, equipment: ['bike'] },
    { user: 2, duration: 200, equipment: ['treadmill'] },
    { user: 2, duration: 200, equipment: ['bike'] },
  ];


console.log(selectData(sessions,{user:2,merge:true}))