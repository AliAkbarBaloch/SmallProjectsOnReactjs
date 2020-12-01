import React from 'react'


function SlotM(props){
    if((props.x===props.y)&&(props.y===props.z)){
            return(
                <React.Fragment>
                    <h1>{props.x} {props.y} {props.z}</h1>
                    <h1>This is Matching...</h1>
                </React.Fragment>
            )
    }
    else{

        return(
            <React.Fragment>
                <h1>{props.x} {props.y} {props.z}</h1>
                <h1>This is not Matching...</h1>
            </React.Fragment>
        )

    }
}

function SlotGame(){
       return(
           <React.Fragment>
               <h1 className="heading_style">🎰 Welcome to <span style={{ fontWeight:'bold' }}>Slot Machine Game</span> 🎰</h1>
               <div className="slotmachine">
               <SlotM x='😄' y='😄' z='😄'/>
               <SlotM x='😄' y='😄' z='🍎'/>
               <SlotM x='💑' y='😄' z='😠'/>
               <SlotM x='👫' y='👫' z='👫'/></div>
           </React.Fragment>

       )
};
export default SlotGame;