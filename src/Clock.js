import React, { useState } from 'react';
import "./Clock.css";


const Clock = () => {
    const curTime = new Date().toLocalTimeString();
    const [time, setTime] = useState(curTime);

    const update =() => {
        const curTime = new Date().toLocalTimeString();
        setTime(curTime)
    }

    setInterval(()=>{
        update()
    },1000);

  return (
    <>
    <div>
        <h1>Digital Clock</h1>
        <h1>{time}</h1>
    </div>
    </>
  );
};

export default Clock;