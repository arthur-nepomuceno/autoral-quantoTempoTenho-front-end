import React, { useState, useEffect } from "react";
import { getRemainingTime } from "./utils/TimerUtils";

const defaultRemainingTime = {
    days: '00',
    hours: '01',
    minutes: '00',
    seconds: '00'
}

export default function Timer({timestampDeadline}){
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {

        const interval = setInterval(() => {
            updateRemainingTime(timestampDeadline)
        }, 1000)

        return () => clearInterval(interval);

    }, [])


    function updateRemainingTime(timestamp){
        setRemainingTime(getRemainingTime(timestamp))
    }

    return (
        <>
            <span>{remainingTime.days}</span>
            <span>d :</span>
            <span>{remainingTime.hours}</span>
            <span>h :</span>
            <span>{remainingTime.minutes}</span>
            <span>m :</span>
            <span>{remainingTime.seconds}</span>
            <span>s</span>
        </>
    )
}