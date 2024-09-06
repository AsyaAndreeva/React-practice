import { useState } from "react";

export const CLicker = ()=>{
    const [clicks, setClicks] = useState(0);

    const clickHandler = (e) =>{
        console.log(e);
        setClicks(oldClicks => oldClicks + 1);
    }

    const dangerClicks = clicks > 20;

    if(clicks > 30){
        return <h1>Finished Clicks</h1>
    }

    return (
        <div>
            <div>
                {dangerClicks && <h1>Danger Clicks</h1>}
                {clicks > 10
                    ? <h2>Medium clicks</h2>
                    : <h4>Normal clicks</h4>
                }
            </div>
            <button onClick={clickHandler}>{clicks}</button>
        </div>
);
}