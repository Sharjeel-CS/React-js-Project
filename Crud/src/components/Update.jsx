import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../features/UserDetailSlice';


const Update = () => {


//getting id from url
const {id}= useParams();

const navigate=useNavigate();

const dispatch=useDispatch();


const [updateData , setUpdateData]=useState({})


const {users , loading}= useSelector((state)=>state.app);



useEffect(()=>{

    if(id){
        const singleUser= users.filter((ele)=> ele.id===id);

        setUpdateData(singleUser[0]);

    }

         },[])


         const newData=(e)=>{

              setUpdateData({...updateData , [e.target.name]:e.target.value})
                }


                const handleUpdate=(e)=>{
                    e.preventDefault();
                    dispatch(updateUser(updateData));
                    navigate('/read')
                    
                }


  return (
    <div>
        <h1>Edit the Data</h1>
        
        <form  className='w-50  mx-auto'  onSubmit={handleUpdate}  >
    

    
    <div className="mb-3">
      <label  className="form-label">Name</label>
      <input type="text" name="name" className="form-control"
      value={updateData && updateData.name} 
      onChange={newData} 
      />
      </div>
    
    
    
    <div className="mb-3">
      <label  className="form-label">Email</label>
      <input type="email" name="email" className="form-control" 
      value={updateData && updateData.email}
      onChange={newData}
      />
      </div>


      <div className="mb-3">
      <label  className="form-label">Age</label>
      <input type="text" name="age" className="form-control"
      value={updateData && updateData.age} 
      onChange={newData}
      />
      </div>






    
    <div className="form-check">
  <input className="form-check-input" type="radio" name="gender"  value="Male" checked={updateData.gender === 'Male'}
   onChange={newData}
   />
  <label className="form-check-label" >
        Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="gender" value="Female"  checked={updateData.gender === 'Female'}
  onChange={newData}
  />
  <label className="form-check-label">
    Female
  </label>
</div>

    <button type="submit" className="btn btn-primary">Submit</button>
  </form></div>
  ) 
}

export default Update