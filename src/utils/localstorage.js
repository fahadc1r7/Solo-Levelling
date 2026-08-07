export const getJoinedChallenges = ()=>{
    const data = localStorage.getItem("joinedChallenges")
    return data ? JSON.parse(data) : []
}

export const joinedChallenge = (id)=>{
 const joined = getJoinedChallenges()
 if(!joined.includes(id)){
    joined.push(id)
    localStorage.setItem("joinedChallenges", JSON.stringify(joined))
 }
}

export const isJoined = (id) =>{
    return getJoinedChallenges().includes(id)
}

export const leaveChallenge = (id)=>{
    const joined = getJoinedChallenges()
    const updated = joined.filter((cid)=> cid !== id)
    localStorage.setItem("joinedChallenges", JSON.stringify(updated))
}

export const getUser = ()=>{
    const data = localStorage.getItem("users")
    return data ? JSON.parse(data) : []
}

export const registerUser = (email, password)=>{
    const users = getUser()
    users.push({email,password })
    localStorage.setItem("users", JSON.stringify(users))
}

export const emailExists = (email)=>{
    return getUser().some((u)=> u.email === email)
}

export const validateLogin = (email,password)=>{
    return getUser().some((u)=> u.email === email && u.password === password )
}

export const getProgressLogs = (challengeId)=>{
    const data = localStorage.getItem(`progress_${challengeId}`)
    return data ? JSON.parse(data) : []
}

export const addProgressLog = (challengeId, entry)=>{
    const logs = getProgressLogs(challengeId)
    logs.push(entry)
    localStorage.setItem(`progress_${challengeId}`, JSON.stringify(logs))
}