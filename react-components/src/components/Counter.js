import { useState } from "react";

export const Counter = (props)=>{
    const [count, setCount] = useState(props.start || 0);
    const [direction, setDirection] = useState('None');


    const increadeHandler = ()=>{
        setCount(oldCount => oldCount + 1);
        setDirection('Increment');
    }
    
    const decreasedeHandler = ()=>{
        setCount(oldCount => oldCount - 1);
        setDirection('Decrement');
    }

    const clearHandler = () =>{
        setCount(0);
    }

    let title = '';
    
    if(count < 10){
        title = 'Counter'
    } else if (count < 20){
        title = 'Turbo counter'
    } else if (count < 30){
        title = 'Mega counter'
    } else if (count < 40){
        title = 'Giga counter'
    } else{
        title = 'Counter'
    }
    

    return(
        <div>
            <h1 style = {{fontSize: 16 + count + 'px'}}>{direction}: {title}</h1>
            <h2>{count}</h2>
            <button onClick={increadeHandler}>+</button>
            <button onClick={clearHandler}>Clear</button>
            <button onClick={decreasedeHandler}>-</button>
        </div>
    )
}