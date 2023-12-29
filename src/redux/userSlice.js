import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



export const LoginUser =createAsyncThunk(
  'login',
  async(usercradential)=>{
       const request = await axios.post("https://cht.clevpro.com/api/v1/login", usercradential)
       const response = await request.data
       localStorage.setItem("user",JSON.stringify(response))
       return response
  }
)



const userSlice = createSlice({
    name : "user",
    initialState:{
        user:null,
        loading : false,
        error : null
    }, extraReducers:(builder)=>{
        builder.addCase(LoginUser.pending,(state)=>{
            state.loading=true
            state.user=null
            state.error=null
        }) .addCase(LoginUser.fulfilled,(state , action)=>{
            state.loading=false
            state.user= action.payload
            state.error=null
        }) .addCase(LoginUser.rejected,(state , action)=>{
            state.loading=false
            state.user=null
            console.log(action.error.message)
            state.error=null
        })
    }

})
export default userSlice.reducer