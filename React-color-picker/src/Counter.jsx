import React, {useState} from "react";
export default function Counter(){
    useState
    // useState Hook for updating variables or Stateful Variables
    //function Components
    const [count, setCount] = useState(0) //default value for the state
    //function to increment state count
    const incrementCount = ()=>{
        setCount(c => c + 1)
    }
    //function to
    const resetCount = ()=>{
        setCount(c => c = 0)
    }
    const decrementCount =()=>{
        setCount (c => c -1)
    }

    
    return(
        <>
        <div className="container">
            <p className="counter-container">
                Counter: <br></br>
                {count}
            </p>
            &nbsp;
            <button className="button-container-decrement" onClick = {decrementCount}>decrement</button>
            <button className="button-container-reset" onClick = {resetCount}>reset</button>
            <button className="button-container-increment" onClick = {incrementCount}>increment</button>
        </div>
        </>
    )
} 