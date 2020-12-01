import React, { useState } from 'react'

function ClickMe(){
    const purple="#8e44ad";
    const[bg,setColor]=useState(purple);
    const[name,setName]=useState('Click Me');

    const abc=()=>{
            let newbg="#34495e";
            setColor(newbg);
            setName('Ouch!!');

    }
    const def=()=>{
        setColor(purple);
        setName('Ayyo!! 😠');
    }
     return(
        <React.Fragment>
            <div style={{ backgroundColor:bg}}>
                <button onClick={abc} onDoubleClick={def}>{name}</button>
            </div>
        </React.Fragment>
     )
}
export default ClickMe;