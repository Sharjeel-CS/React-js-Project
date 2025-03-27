import React from 'react'
import image1 from "../assets/image1.avif"
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { IncrementQty, RemoveItem,DecrementQty } from '../redux/cartSlice';

function Card2({name,id,price,image,qty}) {

    let dispatch=useDispatch()

  return (
    <div className='w-full h-[130px]  p-2 shadow-lg flex justify-between'> 

    {/*Left div of card section */} 

   {/* This div is for image and quantity section*/}
      <div className='w-[70%] h-full  flex gap-5'>
        
        {/*for image*/}
        <div className='w-[60%] h-full overflow-hidden rounded-lg border'>
            <img src={image} alt='' className='object-cover w-full h-full hover:scale-105 transition-all duration-300'/>
        </div>


         <div className='w-[50%] h-full flex flex-col gap-5'>
           {/*for image name*/}
           <div className='text-lg text-gray-800 font-semibold'>{name}</div>

           {/* for food_item quantity*/}
           <div className='w-[110px] h-[50px] bg-grey-200 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400 text-xl'>
            <button className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-300 transition-all duration-200 text-green-400' 
            onClick={() => {
              if (qty > 1) {
                  dispatch(DecrementQty(id));
                            }
                            }}>-</button>
            <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center font-bold text-gray-700'>{qty}</span>
            <button className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-300 transition-all duration-200 text-green-400' onClick={()=>dispatch(IncrementQty(id))}>+</button>
           </div>
        </div>

      </div>


    {/*right div of card section */} 
   {/* This div is for price*/}
      <div className='flex flex-col justify-start items-end gap-6'>
           <span className='text-xl text-green-400 font-semibold'>{price}</span>
           <RiDeleteBin6Line className='w-[30px] h-[30px] text-red-400 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
      </div>

    </div>
  )
}

export default Card2