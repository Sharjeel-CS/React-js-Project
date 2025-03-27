import { configureStore } from "@reduxjs/toolkit";

import CartSlices from './CartSlices'
import ProductSlice from './ProductSlice';


const Store=configureStore(
    {

        reducer:{
            cart:CartSlices,
            products:ProductSlice,
        }
    }
)

export default Store;