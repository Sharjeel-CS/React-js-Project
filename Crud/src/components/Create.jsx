import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/UserDetailSlice'
import { useNavigate } from 'react-router-dom'

const Create = () => {


    const [users , setUsers]=useState({})

    const dispatch=useDispatch()

    const navigate=useNavigate();

    

    const getUserData=(e)=>{



        setUsers({...users, [e.target.name]  : e.target.value})

        console.log(users)

    } 

    const handleClick=(e)=>{


        e.preventDefault();
        console.log("users...", users);
        dispatch(createUser(users));
        navigate("/read");

    }

  return (
    <div>
        <h1>Fill the Data</h1>
        
        <form  className='w-100  mx-auto'  onSubmit={handleClick}  >
    

    
    <div className="mb-3">
      <label  className="form-label">Name</label>
      <input type="text" name="name" className="form-control" onChange={getUserData} />
      </div>
    
    
    
    <div className="mb-3">
      <label  className="form-label">Email</label>
      <input type="email" name="email" className="form-control" onChange={getUserData}/>
      </div>


      <div className="mb-3">
      <label  className="form-label">Age</label>
      <input type="text" name="age" className="form-control" onChange={getUserData}/>
      </div>






    
    <div className="form-check">
  <input className="form-check-input" type="radio" name="gender"  value="Male" onChange={getUserData}/>
  <label className="form-check-label" >
        Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="gender" value="Female" onChange={getUserData}/>
  <label className="form-check-label">
    Female
  </label>
</div>

    <button type="submit" className="btn btn-primary">Submit</button>
  </form></div>
  )
}

export default Create