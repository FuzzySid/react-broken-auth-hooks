import { useEffect, useState } from "react"

export default function useSession({session_id}){

    const [sessionId,setSessionId]=useState()

    useEffect(()=>{
        if(session_id) setSessionId(session_id);
        else{
            if(localStorage.session_id) setSessionId(localStorage.session_id)
        }
    },[])

    useEffect(()=>{
        if(!localStorage.session_id) localStorage.setItem('session_id',sessionId)
    },[sessionId])

    return{
        sessionId
    }
}