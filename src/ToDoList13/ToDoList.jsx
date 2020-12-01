import React, { useState } from 'react'
import ToDo from './ToDo'


function ToDoList(){
    const[inputList,setName]=useState();
    const[Items,setItems]=useState([]);
    const Submit=(event)=>{
       setName(event.target.value);
    }
    const listOfItems=()=>{
        setItems((oldItems)=>{
            return[...oldItems,inputList];
        })
        setName("");

    };

    const deleteItems=(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !==id;
            })
        })

    }
    return(
        <React.Fragment>
           <div className="main_div">
            <div className="center_div">
            <br/>
            <h1>ToDo List</h1><br/>
            <input type="text" name="name"
               value={inputList}
              onChange={Submit} placeholder="Add a Items"/>
            <button onClick={listOfItems}>+</button>
        
            <ol>
              {Items.map((itemval,index)=>{
                 return <ToDo key={index} id={index}
                  onSelect={deleteItems}
                  text={itemval}/>
              })}
            </ol>
            </div>
            </div>
        </React.Fragment>
    )
}
export default ToDoList;