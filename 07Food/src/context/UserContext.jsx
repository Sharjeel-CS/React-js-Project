import React, { createContext, useState } from 'react'
import { food_items } from '../food'

{/* creating context*/}
export const dataContext=createContext()

function UserContext({children}) {

    
   
    let [Cate,setCate]=useState(food_items)

    {/* preparing states for our searchbar*/}
    let [input,setInput]=useState("")

    let [showCart,setShowCart]=useState(false)


    let data={
        input,
        setInput,
        Cate,
        setCate,
        showCart,
        setShowCart

    }

  return (
    <div>
         {/*Keep it in mind Here children is our App.jsx. Because we wrapped it inside the UserContext in main.jsx*/}
         <dataContext.Provider value={data}>
         {children}
         </dataContext.Provider>

    </div>
  )
}

export default UserContext