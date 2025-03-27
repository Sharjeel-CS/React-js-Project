import React, { useEffect } from "react"

import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';


import {useState } from "react"
import { useDispatch , useSelector } from "react-redux";
import { add } from "../store/CartSlices";
import { getProducts } from "../store/ProductSlice";


const Product = () => {

  const dispatch=useDispatch();

  const {products,loading}=useSelector(state=>state.products);

  //const [products,getProducts]=useState([]);


  const addToCart=(product)=>{

    dispatch(add(product));

  }

  const cards=products.map(product=>(
    <div className="col-md-3"  style={{marginBottom:'10px'}}>

<Card key={product.id} className="h-100px"> 

  <div className="text-center">      
    <Card.Img variant="top" src={product.image} style={{width : '100px' , height: '130px'}} />
  </div>

      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          PKR : {product.price}
        </Card.Text>
        
      </Card.Body>

      <Card.Footer style={{background:"white"}}>
      <Button variant="primary"  onClick={()=>addToCart(product)}>Buy now</Button>
      </Card.Footer>

    </Card>

    </div>
  ))

  useEffect(
    ()=>{
          
      
      
      dispatch(getProducts());
      
      
    },[dispatch]);

     if(loading===true){
      return <p>Loading....</p>
     }

     

  return (
    <>
    <h1>Product Dashboard</h1>

      <div className="row">
        
       {cards} 

      </div>

    </>
  )
}

export default Product