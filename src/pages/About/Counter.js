import React from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";
function Counter({number}){
   const [counterOn, setCounterOn] = useState(false)
   
   return(
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
     <div >
     <h1 >
        {counterOn && <CountUp  style={{color:'#86C3B2'}} start={0} end={number} duration={2} delay={0}/>}
      </h1>
     </div>
    </ScrollTrigger>
   )

}
export default Counter;
