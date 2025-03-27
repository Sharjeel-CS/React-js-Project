import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Product from './components/Product'
import {Provider} from 'react-redux'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import Rootlayout from './components/Rootlayout';
import store from "./store/Store";


function App() {
  
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Rootlayout/>}>
        <Route index element={<Dashboard/>}/>

        <Route path='cart' element={<Cart/>} />
       

    </Route>
  ))

  return (
    <>
    <Provider store={store}>
      <div className='App'>
        <RouterProvider router={router}/>
      </div>
      </Provider>
    </>
  )
}

export default App
