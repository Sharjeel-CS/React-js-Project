import React, {useEffect}from 'react'
import { useState } from 'react'


function App2(){

    const [count,setcount]=useState(0)


    useEffect(()=>{
        setTimeout(()=>{
            setcount(count+1);
        },2000)
    },[count])


    return(
        <h1>I have rendered {count} times ! </h1>
    );
}

export default App2