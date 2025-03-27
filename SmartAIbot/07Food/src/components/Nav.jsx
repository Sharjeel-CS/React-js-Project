import React, { useEffect,useRef } from 'react'
import { IoFastFoodSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { useContext } from 'react';
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

function Nav() {

    {/* Here we are accessing input and setInput as destructured from UserContext which are being passed as props to dataContext , so that  we can access them anywhere in our code*/}
    let {input,setInput,setCate,Cate,showCart,setShowCart}=useContext(dataContext)

    {/* using useRef*/}
    const searchRef = useRef(null);

    {/* Here useEffect will filter the food items*/}
    useEffect(()=>{
        // Debounce function to limit filtering calls
        const timeoutId=setTimeout(()=>{
        let newList=food_items.filter((item)=>item.food_name.toLowerCase().includes(input.toLowerCase()))

        setCate(newList)
      },300  ) // Wait for 300ms before applying the filter


      return () => clearTimeout(timeoutId); // Cleanup function

    },[input])

    let items=useSelector(state=>state.cart)
    console.log(items)

  return (
    <div className='w-full h-[100px] bg-slate-200 flex justify-between items-center px-5 md:px-8 '>

        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
        <IoFastFoodSharp className='w-[30px] h-[30px] text-green-500'/>
        </div>

       <form className='w-[50%] md:w-[70%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md' onSubmit={(e)=>e.preventDefault( )} >
        <FaSearch className='text-green-500 w-[20px] h-[20px]' />
        <input
        ref={searchRef}
         type="text"
         placeholder='search items...'
          className='w-[100%] outline-none text-[16px] md:text-[20px]'
          onChange={(e)=>setInput(searchRef.current.value)}
          value={input} />

        </form>

        {/* Show Cart functionality applied here*/}

        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={()=>{setShowCart(true)
        }}>
            <span className='absolute top-0 right-2 text-green-500 font-bold text-[16px]'>{items.length}</span>
        <FiShoppingBag  className='w-[30px] h-[30px] text-green-500'/>
        </div>

    </div>
  )
}

export default Nav