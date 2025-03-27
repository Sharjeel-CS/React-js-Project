import React from 'react'
import {createSlice} from '@reduxjs/toolkit';



const initialState=[] 

const CartSlices = createSlice({
    name:'cart',
    initialState,

    reducers:{
        add(state,action){
            state.push(action.payload)
        },

        remove(state,action){

            return state.filter(item=> item.id!=action.payload)

        }
    }
})

export  const {add,remove} =CartSlices.actions;

export default CartSlices.reducer;