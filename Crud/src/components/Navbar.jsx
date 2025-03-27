import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchUser } from '../features/UserDetailSlice';

export const Navbar = () => {

    const AllUsers= useSelector((state)=>state.app.users);
    const dispatch=useDispatch();
    
    //Logic for searching data
    const [searchData ,setSearchData]= useState("")
    useEffect(()=>{
        dispatch(searchUser(searchData));
    },[searchData]);

  

  return (
  
  <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
    <div className="container-fluid">
    <h4 className="navbar-brand mx-5">Sharjeel</h4>
      
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to='/' className="nav-link active" aria-current="page" >Create Post</Link>
          </li>
          <li className="nav-item">
            <Link to='/read' className="nav-link" >All posts ({AllUsers ?.length || 0})</Link>
          </li>
          
        </ul>
       
          <input className="form-control me-2 w-50" type="search" placeholder="Search" 
          onChange={(e)=>setSearchData(e.target.value)}
          aria-label="Search"/>
         
       
      </div>
    </div>
  </nav>
)
}

export default Navbar;
