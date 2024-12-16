import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Timedisplay =()=>{
    const [time,setTime]=useState(new Date());
    const [is24hr,setIs24hr]=useState(true);

useEffect(()=>{
    const interval=setInterval(()=>{
        setTime(new Date());
    },1000)

    return()=>{
        clearInterval(interval);
    }
},[])

const clock=(date)=>{
    const hours= is24hr ? date.getHours() : date.getHours()%12 || 12;
    const minutes= String(date.getMinutes()).padStart(2,"0");
    const seconds= String(date.getSeconds()).padStart(2,'0');
    const ampm= is24hr ? "" : date.getHours()>=12 ? "pm":"am";
    return(`${hours}:${minutes}:${seconds}:${ampm}`)
}

return(
    <div>
        <h1>Time display</h1>
        <button onClick={()=>setIs24hr(!is24hr)}>Toggle{is24hr ? "12hr":"24hr"}FORMAT</button>
        <h2>{clock(time)}</h2>
    </div>
)
}

export default Timedisplay;