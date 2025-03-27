import React, { useContext } from 'react'
import { dataContext, prevUser } from '../context/UserContext'

function Chat() {

    let {input,setInput,showResult,setShowResult,prevFeature,prevSetFeature,genImgUrl,setGenImgUrl}=useContext(dataContext)

  return (
    <div className='chat-page'>
         <div className="user">
          {prevFeature==="upimg"?<>
          
            {
              //applying extra condition for betterment.
              /*
                If prevUser.imgUrl exists, it shows the <img> tag.

                If prevUser.imgUrl is null or undefined, it doesn't render the <img>, avoiding unnecessary space.
               */
              prevUser.imgUrl && <img src={prevUser.imgUrl} alt="" />}
           <span>{prevUser.prompt}</span>
           </>:<span>{prevUser.prompt}</span>}
          
         </div>
         <div className="ai">
           

           {prevFeature==="genimg"?

          /*Keep it in mind. You can use curly braces just after curly braces. {{}:{}}
          {feature==="genimg"?{...}:{...}} ❌

          instead you can use
          {feature==="genimg" ? (...) : (...)} ✅

          means{():()}

          */
           (<>
           {!genImgUrl?<span>Generating image...</span>:
           <img src={genImgUrl} alt="" />
          
           }
           </>) 
           :(!showResult?
            <span>Loading...</span>:<span>{showResult}</span>)

             }
           
         </div>
    </div>
  )
}

export default Chat