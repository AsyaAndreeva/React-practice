import { useState } from "react";

export const Counter = (props)=>{
    const [count, setCount] = useState(props.start || 0);

    const increadeHandler = ()=>{
        setCount(oldCount => oldCount + 1);
    }
    
    const decreasedeHandler = ()=>{
        setCount(oldCount => oldCount - 1);
    }

    const clearHandler = () =>{
        setCount(0);
    }

    return(
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={increadeHandler}>+</button>
            <button onClick={clearHandler}>Clear</button>
            <button onClick={decreasedeHandler}>-</button>
        </div>
    )
}