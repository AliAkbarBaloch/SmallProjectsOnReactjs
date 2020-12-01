import React, { useState } from 'react'

function AutoTime(){
    const[state,setTime]=useState();

    const random=()=>{
        setTime(new Date().toLocaleTimeString());
    }
    setInterval(random,1000);
   return(
       <React.Fragment>
           <h1>{state}</h1>
       </React.Fragment>
   )
}
export default AutoTime;