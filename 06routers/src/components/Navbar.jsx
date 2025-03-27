import React from 'react'
import logo1 from '../assets/logo1.png'
import { NavLink,useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate=useNavigate();
  return (
    <div className='navbar' >
        <img src={logo1} alt=""  width="80px"/>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>

            <NavLink to='/products'><li>Products</li></NavLink>

            <NavLink to='/about'><li>About</li></NavLink>

            <NavLink to='/contact'><li>Contact</li></NavLink>

            
            <NavLink to='/jobs'><li>Jobs</li></NavLink>
        
        </ul>
        <button onClick={()=>navigate('/about' , {replace:true}) } >Get Started</button>
    </div>
  )
}

export default Navbar