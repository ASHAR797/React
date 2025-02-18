import { useState } from "react";

let Counter = ()=>{
       let [CounterVal , setCounterval] = useState(0)

    return<>
    <h1>Counter value is {CounterVal}</h1>
    <button onClick={
        ()=>{
            setCounterval(CounterVal + 1)
        }
    } className="p-2 m-2 rounded-md bg-green-500 text-white">Increment</button>
    <button onClick={()=>{
        if(CounterVal > 0)
        {
            setCounterval(CounterVal - 1)
        }
        else{
            console.log("Value cannot be in Minus -")
        }
    }} className="p-2 m-2 rounded-md bg-red-500 text-white">Decrement</button>
    </>


}
export default Counter;