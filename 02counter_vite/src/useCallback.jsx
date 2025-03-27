import React, { useCallback, useState } from "react";
import './App.css'
import Header from './components/header';



function App4(){

    const [count , setcount]=useState(0);


    const increase_count=()=>{
        setcount(count +1)
    }

    const newFn=useCallback(()=>
{},[])

    return (
        <>
        <Header newFn={newFn}/>
        
        <h1>{count}</h1>
        <buttton onClick={increase_count}>Click Here</buttton>
        </>
    )
}

export default App4