import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { AddItem } from '../redux/cartSlice';
import { useDispatch } from 'react-redux'; 
import { toast } from 'react-toastify';

function Card({name,image,id,price,type}) {

  let dispatch=useDispatch()
  return (
    <div   className='w-[280px] h-[400px] bg-white p-3 flex flex-col gap-3 rounded-lg shadow-lg hover:border-3 border-green-300'>


{/*this div is for image */}
<div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
<img src={image} alt="" className='object-cover'/>
</div>


{/*this div is for name */}
<div className='text-2xl font-semibold'>

    {name}

</div>


{/*this div is for price */}
<div className='w-full flex justify-between items-center'>
    <div className='text-lg font-bold text-green-500 '> {price}  </div>
    <div className='flex justify-center items-center text-green-500 text-lg font-bold'>{type==="veg"?<LuLeafyGreen />:<GiChickenOven />}
     <span> {type} </span>
     </div>
</div>

{/*Button */}
<button className='w-full p-4 bg-green-700 rounded-lg  text-white font-semibold hover:bg-green-400  transition-all  cursor-pointer' onClick={()=>{
  
    dispatch(AddItem({id:id,name:name, price:price,image:image,qty:1}));

    toast.success("Item added successfully")

               }
  }> Add to dish </button>


    </div>
  )
}

export default Card