import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

//create action
export const createUser=createAsyncThunk("createUser" , async (data , {rejectWithValue})=>{
       const response= await fetch("https://67c31f7c1851890165ae3b6d.mockapi.io/crud" , {
        method: "POST" ,
        headers: {
            "Content-Type" : "application/json",
        },

        body: JSON.stringify(data)
       });


       try{

        const result= await response.json();
        return result;

       }

       catch(error){
        
        return rejectWithValue(error);

       };
       
})

//Showing user
export const showUser=createAsyncThunk("showUser" , async (_,{rejectWithValue})=>{
    const response= await fetch("https://67c31f7c1851890165ae3b6d.mockapi.io/crud" , {
     method: "Get" ,
    });


    try{

     const result= await response.json();
     return result;

    }

    catch(error){
     
     return rejectWithValue(error);

    };
    
})


//Delete user
export const deleteUser=createAsyncThunk("deleteUser" , async (id,{rejectWithValue})=>{
    const response= await fetch(`https://67c31f7c1851890165ae3b6d.mockapi.io/crud/${id}` , {
     method: "DELETE" ,
    });


    try{

     const result= await response.json();
     return result;

    }

    catch(error){
     
     return rejectWithValue(error);

    };
    
})



//Update Data
export const updateUser=createAsyncThunk("updateUser" , async (data , {rejectWithValue})=>{
    const response= await fetch(`https://67c31f7c1851890165ae3b6d.mockapi.io/crud/${data.id}`, {
     method: "PUT" ,
     headers: {
         "Content-Type" : "application/json",
     },

     body: JSON.stringify(data)
    });


    try{

     const result= await response.json();
     return result;

    }

    catch(error){
     
     return rejectWithValue(error);

    };
    
})



export const userDetails = createSlice({
    name:'userDetails',
    initialState:{
        users: [],
        loading: false,
        error: null,
        searchData: [],
    },

    reducers:{
                   searchUser:(state,action)=>{
                    state.searchData=action.payload;
                   }
    },
        extraReducers :(builder)=>{
            builder
            .addCase(createUser.pending ,(state)=>{
                state.loading=true;
            })
            .addCase(createUser.fulfilled ,(state,action)=>{
                state.loading=false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.error.message;
            })

            //for showing user
            .addCase(showUser.pending ,(state)=>{
                state.loading=true;
            })
            .addCase(showUser.fulfilled ,(state,action)=>{
                state.loading=false;
                state.users=action.payload;
            })
            .addCase(showUser.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.error.message;
            })


             //for Deleting user
             .addCase(deleteUser.pending ,(state)=>{
                state.loading=true;
            })
            .addCase(deleteUser.fulfilled ,(state,action)=>{
                state.loading=false;

                const {id}=action.payload;

                if(id){

                    state.users=state.users.filter((ele)=>ele.id!==id )
                }

                
            })
            .addCase(deleteUser.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.error.message;
            })


            //for updating user
            .addCase(updateUser.pending ,(state)=>{
                state.loading=true;
            })
            .addCase(updateUser.fulfilled ,(state,action)=>{
                state.loading=false;
                state.users=state.users.map((ele)=>
                    ele.id===action.payload.id ? action.payload : ele
                )
            })
            .addCase(updateUser.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.error.message;
            })
        }
      


});

export default userDetails.reducer;
export const {searchUser}= userDetails.actions;