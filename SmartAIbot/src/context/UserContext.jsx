import React, { createContext, useState } from 'react'

export const dataContext=createContext()

export let user={
    data:null,
    mime_type:null,
    imgUrl:null
}

export let prevUser={
  data:null,
  mime_type:null,
  prompt:null,
  imgUrl:null
}

function UserContext({children}) {

    {/* this state hook is made for chat.it is initialy set to false means it will not be displayed on the screen. */}
    let [startRes,setStartRes]=useState(false)

    let [popUp,setPopUp]=useState(false)

    {/* this hook is for input logic.
        like there is nothing in input
        field. then our submit(ArrowUp) should not appear
        on the screen. */}
      let [input, setInput]=useState("")

      let [feature,setFeature]=useState("chat")

      let [showResult,setShowResult]=useState("")

      let [prevFeature, setPrevFeature]=useState("chat")

      let [genImgUrl,setGenImgUrl]=useState("")
 

    let value={
        startRes,setStartRes,
        popUp, setPopUp,
        input, setInput,
        feature,setFeature,
        showResult,setShowResult,
        prevFeature, setPrevFeature,
        genImgUrl,setGenImgUrl
      
             }

  return (
    <div>
        {/*Keep it in mind Here children is our App.jsx. Because we wrapped it inside the UserContext in main.jsx*/}
        <dataContext.Provider value={value}>
         {children}
         </dataContext.Provider>
    </div>
  )
}

export default UserContext