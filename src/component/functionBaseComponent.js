import React,{useState} from "react";

function CounterFunction(){

    let [number,setNumber]=useState(0)
    return(
        <div>
            <h3>Functional component</h3>
            <h1>counter={number}</h1>
            <button onClick={event => increment()}>F_increment</button>
        </div>
    )

    function increment(){
        setNumber(number+1)
    }


}
export default CounterFunction;