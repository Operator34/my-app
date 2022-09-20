import React, { useState } from "react";

const Counter = (props) => {
       console.log(props); // props = value
        const{value} = props
        console.log(value);
   
        const formatValue = () => {
        return value === 0 ? "empty" : value
    }
    const getBageClasses = () => {
        let classes = "badge m-2 "
        classes += value === 0 ? "bg-warning" : "bg-primary"
        return classes
    }
    const handleIncrement = () => {
        //setValue((prevState) => prevState + 1) 
        console.log('handleIncrement', props.id);
        
        
    }
    const handleDecrement = () => {
        console.log('handleDecrement', props);
        //setValue((prevState) => prevState - 1) 
    }
    
    return ( 
        <div>
            <span>{props.name}</span>
            <React.Fragment>
                <span className={getBageClasses()}>{formatValue()}</span>
                <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
                    +
                </button>
                <button className="btn btn-primary btn-sm m-2" 
                onClick={handleDecrement}>
                    -
                </button>
                <button className="btn btn-danger btn-sm m-2" 
                onClick={()=>{props.onDelete(props.id)}}>Delete</button>
            </React.Fragment>
        </div>
    )
}

export default Counter;