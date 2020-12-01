import React, { useState } from 'react'
import './todoCss.css'
// import './index.css'
import Auto from './Task08/AutoTime'
import TimeWithButton from './Task09/TimeWithButton'
import IncrementAndDecrement from './Task10/IncrementAndDecrement'
import SlotGame from './Task07/SlotGame'
import ClickMe from './Task11/ClickMe'
import InputChallange from './Task12/InputChallange'
import ToDoList from './ToDoList13/ToDoList'


function App(){
    return(
        <React.Fragment>
            <ToDoList/>
        </React.Fragment>
    )
 }
 export default App;
 

//This Function is For Task07 to Task12
// function Application(){
//    return(
//        <React.Fragment>
//            <SlotGame/>
//            <Auto/>
//            <TimeWithButton/>
//            <IncrementAndDecrement/>
//            <ClickMe/>
//            <InputChallange/>
//        </React.Fragment>
//    )
// }
// export {Application};


