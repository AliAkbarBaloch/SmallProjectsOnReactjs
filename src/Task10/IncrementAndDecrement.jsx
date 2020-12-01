
import React, { useState } from 'react'




function IncrementAndDecrement(){
    const [count,setCount]=useState(0);

    const Inc=()=>{
        setCount(count+1);
    }
    const Dec=()=>{
        if(count<=0){
            alert("Sorry limit Exceed bro!");
        }
        else{
            setCount(count-1);
        }
        
    }

   return(
       <React.Fragment>
          <h1>{count}</h1>
           <button onClick={Inc}>Increment</button>
           <button onClick={Dec}>Decrement</button>
       </React.Fragment>
   )
}
export default IncrementAndDecrement;