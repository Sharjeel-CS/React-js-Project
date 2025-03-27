import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 {/* const [count, setCount] = useState(0)



let increase_counter=()=>{
setCount(count+1)
}

let decrease_counter=()=>{
if(count>0)
  {setCount(count-1)}
else
{
console.log("We can't decrease further")
};*/}





const [car, setCar]=useState({
  brand: "Ferrari",
  model:"Roma",
  year:"2024",
  color:"red"
});

const changeColor=()=>{

  {/*pass any parameter here. let's we use prev*/}
  setCar((prev)=>{
    return{...prev, color:"Blue"}
  }) 
  };








  return (
    <>

      <h1>Vite + React</h1>
      <div className="card">
       {/* <button onClick={increase_counter}>
          increase count {count}</button>

          <br/>

        <button onClick={decrease_counter}> decrease count {count} </button>

        <br/>*/}

        {/*If we want to change multiple things we will use object with multiple properties-->*/}
         <h1>My {car.brand}</h1>           
        <h2>It is a {car.color}  {car.model} from {car.year} </h2>

        <button onClick={changeColor}>Blue </button>



          
        

      </div>
       
    </>
  )

}


export default App
