import React, { useEffect, useRef } from "react";
import { useState } from "react";
function Timer() {
  let [timer,setTimer] = useState(0)
  const timerRef = useRef(null)

  const start = () => {
    timerRef.current = setInterval(()=>{
        setTimer((prevtime) => prevtime + 1)
    },1000)
    return() => {
        clearInterval(timerRef.current)
    } 
  }
  const reset = () =>{
    clearInterval(timerRef.current)
    setTimer(timer = 0)
   
  }
  const puse = () =>{
    clearInterval(timerRef.current)
  }
  return(
    <div>
        <div>timer: {timer}</div>
        <button onClick={start}>start</button>
        <button onClick={puse}>puse</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}
export default Timer;
