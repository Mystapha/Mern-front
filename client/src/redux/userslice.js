import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const getuser=createAsyncThunk("user/get",async()=>{
    try {
        let result=await axios.get("https://mern-contact-telg.vercel.app//user/");
        return result;
    } catch (error) {
        console.log(error);
    }
})
export const adduser=createAsyncThunk("user/add",async(newuser)=>{
  try {
      let result=await axios.post("https://mern-contact-telg.vercel.app//user/add",newuser);
      return result;
  } catch (error) {
      console.log(error);
  }
});

export const deleteuser=createAsyncThunk("user/delete",async(id)=>{
    try {
        let result=await axios.delete(`https://mern-contact-telg.vercel.app//user/${id}`);
        return result;
    } catch (error) {
        console.log(error);
    }
  });

  export const edituser=createAsyncThunk("user/edit",async({id,edited})=>{
    try {
        let result=await axios.put(`https://mern-contact-telg.vercel.app//user/${id}`,edited);
        return result;
    } catch (error) {
        console.log(error);
    }
  })
  
  
  



const initialState = {
  userlist: null,
  status:null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
  },
  extraReducers:(builder) =>{
    builder
    // getuser
    .addCase(getuser.pending,(state)=>{
        state.status = "padding";
    })
    .addCase(getuser.fulfilled,(state,action)=>{
        state.status="success";
        state.userlist=action.payload.data.user;
    })
    .addCase(getuser.rejected,(state)=>{
        state.status = "fail";
    })
    // adduser
    .addCase(adduser.pending,(state)=>{
      state.status = "padding";
  })
  .addCase(adduser.fulfilled,(state,action)=>{
      state.status="success";
  })
  .addCase(adduser.rejected,(state)=>{
      state.status = "fail";
  })

//deleteuser

  .addCase(deleteuser.pending,(state)=>{
    state.status = "padding";
})
.addCase(deleteuser.fulfilled,(state,action)=>{
    state.status="success";
})
.addCase(deleteuser.rejected,(state)=>{
    state.status = "fail";
})

// edituser
.addCase(edituser.pending,(state)=>{
    state.status = "padding";
})
.addCase(edituser.fulfilled,(state,action)=>{
    state.status="success";
})
.addCase(edituser.rejected,(state)=>{
    state.status = "fail";
});

    
  },


});

// Action creators are generated for each case reducer function


export default userSlice.reducer