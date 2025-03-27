import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card';
import { food_items } from '../food';
import { RxCross2 } from "react-icons/rx";
import { dataContext } from '../context/UserContext';
import Card2 from '../components/Card2';
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";


function Home() {
 
    {/*First we initialed the states of Cate and setCate here But
         Now we are accessing them as destructured from UserContext which are being passed as props to dataContext  so that  we can access them anywhere in our code*/}
    let {Cate,setCate,input,showCart,setShowCart}=useContext(dataContext)

     {/*Note::
        food_items.map((item)
        since Cate's initial state is food_item so we
       replaced food_items with Cate in map function
        Cate.map((item)
        */}

        function filter(category){
            if(category==="All")
               { setCate(food_items)}
            else{

                {/* Note:
                    keep it in mind that filter always return an array so we stored it in a variable then pass it to setCate to update the food_items
                    */}
                let newList=food_items.filter((item)=>(item.food_category===category))

                setCate(newList)

            }
        }

        let items=useSelector(state=>state.cart)

        

        {/* Caculations of delivery, tax and pice of total items  */}
        let subtotal=items.reduce((total,item)=>total+item.price*item.qty,0)


        let deliveryFee=20;
        {/* applying 5% tax on subtotal price */}
        let taxes= subtotal*5/100;
        let grandTotal=Math.floor(subtotal+deliveryFee+taxes);


  return (
    <div className=' bg-slate-200 w-full min-h-screen'>
        <Nav/>

        {!input?  <div className='flex flex-wrap justify-center items-center gap-5 w-full'>
        {Categories.map((item) => {
          return (<div key={item.name} className='w-[140px] h-[140px] bg-white flex flex-col items-start justify-start gap-5 p-5 shadow-md rounded-lg text-[20px] font-semibold text-gray-600  hover:bg-green-200 cursor-pointer transition-all duration-200 ' onClick={()=>filter(item.name)}>
            {item.icon}
            {item.name}
            </div>);
          
        })}
        </div> : null}

       

      {/* this div is for cards */}
        <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
        
        {/*Adding condition that if the searched item does't found */}
        {
          Cate.length>1?  
            Cate.map((item)=>
                (
                <Card 
                id={item.id}
                name={item.food_name}
                image={item.food_image}  
                price={item.price}  
                type={item.food_type} />
            )): <div className='text-center text-2xl text-green-500 font-semibold pt-5'>No such dish is found</div>}
        </div>

        {/*Cart secction */}
        <div className={`w-[100%] h-[100%] md:w-[40vw] md:h-auto md:max-h-[80vh] md:overflow-y-auto  fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center ${showCart?"translate-x-0":"translate-x-full"}`}>
            <header className='w-[100%] flex justify-between items-center'>
                <span className='text-green-400 text-[18px] font-semibold'>Order items</span>
                <RxCross2 className=' w-[30px] h-[30px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600' onClick={()=>setShowCart(false)}/>
            </header>

     {/* Applying the condition when to show cart */}

     {items.length>0?   
     <>
     {/* Cards section in Cart */}
            <div className='w-full mt-9 flex flex-col gap-8 '>
                 {items.map((item)=>(
                    <Card2 

                    /*Note:  key is not passed to Card2.jsx as a prop. It is only used internally by React to efficiently track list items.   */
                    key={item.id}

                     /*Note: But id={item.id} → Passed as a prop and accessible in Card2.jsx  */


                    id={item.id}
                    name={item.name} 
                    price={item.price} 
                    image={item.image} 
                    qty={item.qty} />
                 ))}
            </div>

      {/* Prices section in Cart with border top and bottom*/}
      <div className='w-ful border-t-2 border-b-2  border-gray-400 mt-7 flex flex-col gap-2 p-8'>
           
           {/* Subtotal */}
            <div className='w-full flex justify-between items-center gap-7'>
               <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
               <span className='text-green-400 font-semibold text-lg'>Rs {subtotal}/-</span>  
            </div>

           {/* Delivery */}
           <div className='w-full flex justify-between items-center gap-7'>
               <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
               <span className='text-green-400 font-semibold text-lg'>Rs {deliveryFee}/-</span>  
            </div>

            {/* Taxes */}
            <div className='w-full flex justify-between items-center gap-7'>
               <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
               <span className='text-green-400 font-semibold text-lg'>Rs {taxes }/-</span>  
            </div>


          </div>

              {/* Total bill under the border */}
          <div className='w-full flex justify-between items-center p-9'>
               <span className='text-2xl text-gray-600 font-semibold'>Total</span>
               <span className='text-green-400 font-semibold text-2xl'>Rs {grandTotal}/-</span>  
            </div>

             {/* Place order Button */}
             
             <button className='w-[80%] p-4 bg-green-600 rounded-lg  text-white font-semibold hover:bg-green-350  transition-all  cursor-pointer ' onClick={()=>{
                toast.success("Order placed successfully")
             }}>Place order</button>

             </> : <div className='text-center text-2xl text-green-500 font-semibold pt-5'>Empty Cart</div>}

     



        </div>
    </div>
  )
}

export default Home