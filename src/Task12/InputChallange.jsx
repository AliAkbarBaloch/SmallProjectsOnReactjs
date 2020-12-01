import React, { useState } from 'react'


function InputChallange(){

    const[form,setForm]=useState();
    const[Name,setName]=useState();

    const submit=(event)=>{
        setForm(event.target.value);
    }
    const Sub=(event)=>{
        setName(form);
    }

    return(
        <React.Fragment>
        
           <h1>Hello {Name}</h1>
           <form>
           <input type="text" placeholder="Enter Something"
             onChange={submit}
             value={form}
           />
           <button onClick={Sub}>Submit</button>
           </form>
        </React.Fragment>
    )
}
export default InputChallange;