import React, {useMemo, useState} from 'react'
import './App.css'

function App3()
{
    const [number ,setNumber]=useState(0)

    const [counter, setCounter]=useState(0)

    function cubeNum(num){
        console.log("Calculation done");
        return Math.pow(num,3)

    }

    const result=useMemo(()=>{return  cubeNum(number)},[number]);

    const increasecounter=()=>{
        setCounter(counter+1)
    };


    return(
        <>
        <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
        <h1>Cube of this number is {result} </h1>

        <button onClick={increasecounter}>Counter++</button>
        <h1>Counter : {counter}</h1>

        
        
        
        </>
    );
}

export default App3