import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Store from '../store/Store'
import { Provider } from 'react-redux'

const Rootlayout = () => {
  return (
    <>
  
    <NavBar/>

    <Outlet/>
  
    </>
  )
}

export default Rootlayout