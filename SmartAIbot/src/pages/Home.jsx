import React, { useContext ,useRef} from 'react'
import "../App.css"
import { RiImageAiFill } from "react-icons/ri";
import { RiImageAddLine } from "react-icons/ri";
import { MdChatBubbleOutline } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";
import { dataContext, prevUser, user } from '../context/UserContext';
import Chat from './Chat';
import { generateResponse } from '../gemini';
import { query } from '../huggingFace';






function Home() {

    const fileInputRef = useRef(null);


    {/*accessing {startRes,setStartRes,
        popUp,setPopUp,input, setInput,
        feature,setFeature,showResult,setShowResult,prevFeature, prevSetFeature}  
        as destructured from UserContext which are being passed as props to dataContext  so that  we can access them anywhere in our code*/}

    let {startRes,setStartRes,popUp,setPopUp,input, setInput,feature,setFeature,showResult,setShowResult,prevFeature, setPrevFeature,genImgUrl,setGenImgUrl }=useContext(dataContext)

    

    async function handleSubmit(e) { 

        //When handleSubmit() is called, it first updates prevUser with the latest input and image data.
        setStartRes(true);
         prevUser.data=user.data;
         prevUser.mime_type=user.mime_type;
         prevUser.imgUrl=user.imgUrl;
         prevUser.prompt=input;

         user.data=null;
         user.mime_type=null;
         user.imgUrl=null;

        //Since prevUser was updated before calling generateResponse(), the function automatically picks up the new values when making the API request.
        setInput("") 
        let result=await generateResponse()
       // console.log(result)

       setPrevFeature(feature)

        setShowResult(result)

        

       
        setFeature("chat")


    }

    function handleImage(e){

        setFeature("upimg")
        
        let file=e.target.files[0]

        if (!file) return; // Prevents issues when no file is selected

    //converting image into url

    let reader=new FileReader()

    reader.onload=(event)=>{
        let base64=event.target.result.split(",")[1]

        //this user is an object which is defined in UserContext
        user.data=base64 //Stores the Base64-encoded image.

        user.mime_type=file.type // Stores the MIME type (like image/png or image/jpeg).

        console.log(event)

        user.imgUrl=`data:${user.mime_type};base64,${user.data}`
          };

          reader.readAsDataURL(file);

          setPopUp(false)
        }

       async function handleGenerateImg(){
            setStartRes(true);
            setPrevFeature(feature)
            prevUser.prompt=input
            setGenImgUrl("")
            let result=await query().then((e)=>{
                let url=URL.createObjectURL(e)

                console.log(url)
                setGenImgUrl(url)
            })

            setInput("")
            setFeature("chat")



        }

  return (
    <div className='home'>
        <nav>
            <div className="logo" onClick={()=>{
                setStartRes(false)
                setFeature("chat")
                setPopUp(false)
                user.data=null;
                user.mime_type=null;
                user.imgUrl=null;

            }}>
                Smart AI Bot
            </div>
        </nav>

     {/*Applying condition when to show chat */}

        {!startRes?
        <div className="hero">
        <span id='tag'>What can I help with ?</span>
        <div className="cate">
        <div className="upImg" onClick={()=>{
              if (fileInputRef.current) {
                  console.log("Clicking file input...");
                  setTimeout(() => fileInputRef.current.click(), 0);
                } else {
                  console.log("File input ref is null! Waiting for React...");
                }

                setFeature("chat")
}}>
                <RiImageAddLine />
                <span>Upload Image</span>
            </div>
            <div className="genImg" onClick={()=>{
                setPopUp(false)
                setFeature("genimg")
                }}>
                 <RiImageAiFill />
                 <span>Generate Image</span>
            </div>
            <div className="chat" onClick={()=>setFeature("chat")}>
                 <MdChatBubbleOutline />
                 <span>Let's Chat</span>
           </div>
        </div>
        </div>:
        <Chat/>}

        {/*This input is made for handling images */}
        <input
        type='file'
        accept='image/* '
        hidden
        id='inputImg'
        ref={fileInputRef}
        onChange={handleImage}
       />

        <form className="input-box" onSubmit={(e)=>{

            e.preventDefault();
            if(input)
            {
                if(feature=="genimg")

                    {
                       handleGenerateImg()
                    }
                    else{
                        handleSubmit(e)
                    }
            }
            

           } }>
{/* Applying condition for image.
Means If user.imgUrl exists, show the image.

If user.imgUrl is null, don’t render the <img> element at all. */}
{user.imgUrl && <img src={user.imgUrl} id='im' />}


         {/* creating popUp section */}

        {popUp?
         <div className="pop-up">

                <div className="select-up"  onClick={
                    ()=>{

                        //Applying condition for extra safety

                        if (fileInputRef.current) {
                            console.log("Clicking file input...");
                            setTimeout(() => fileInputRef.current.click(), 0); // Ensures React update is complete
                        } else {
                            console.log("File input ref is null! Waiting for React...");
                        }

                        setFeature("chat")
            }}>
                    <RiImageAddLine />
                    <span>Upload Image</span>
                </div>

                <div className="select-gen" onClick={()=>{
                    setPopUp(false)
                    setFeature("genimg")}
                   }>
        
                     <RiImageAiFill />
                     <span>Generate Image</span>
                </div>

         </div>:null}

          
          
           <div id="add" onClick={()=>{
                 setPopUp(prev=>!prev)   
             }}>

            {/*Applying conditions for feature state.
            means when to show plus icon and other icons */}

            {feature==="genimg"? <RiImageAiFill id='gen_Img' />:<FiPlus />}

            
           </div>

           <input type='text' placeholder='Ask Something..'  onChange={(e)=>setInput(e.target.value)} value={input}/>

           {input?<button id="submit">
              <FaArrowUpLong />
           </button>:null}

           



        </form>

    </div>
  )
}


export default Home