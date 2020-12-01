import React, { useState } from 'react'

function TimeWithButton(){
    
    const[ctime,setTime]=useState(new Date().toLocaleTimeString());
    const getTime=()=>{
        var time=new Date().toLocaleTimeString();
        setTime(time);
    }
   return(
       <React.Fragment>
           <h1>{ctime}</h1>
           <button onClick={getTime}>GET TIME</button>
       </React.Fragment>
   )
}
export default TimeWithButton;