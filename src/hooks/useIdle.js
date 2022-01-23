import { useState, useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer'

export default function useIdle({
    onIdle,         //Function that gets executed when user is idle
    debounce=500,   //Debounce, default value is 500
    idleTime=15     //Idle time in minutes
}){
    const [isIdle,setIsIdle]=useState();

    const handleOnIdle = event => {
        setIsIdle(true);
        console.log('user is idle', event)
        console.log('last active', getLastActiveTime())
        onIdle();
    }
    
    const handleOnActive = event => {
        setIsIdle(false)
        console.log('user is active', event)
        console.log('time remaining', getRemainingTime())
    }
    
    const handleOnAction = event => {
        setIsIdle(false)
        console.log('user did something', event)
    }
    
    const { getRemainingTime, getLastActiveTime } = useIdleTimer({
        timeout: 1000 * 60 * idleTime,
        onIdle: handleOnIdle,
        onActive: handleOnActive,
        onAction: handleOnAction,
        debounce: 500
    })

      return {
          getRemainingTime,
          getLastActiveTime,
          isIdle
      }
}