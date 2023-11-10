import { Slice, createSlice } from "@reduxjs/toolkit";


const initialState={
  numOfCakes:1
}
const cakeSline=createSlice({
  //when we create slice the Slice Objects accepts 3 properties:
  //1: Name
  name:'cake',
  //2: Initial state
  initialState:initialState,
  //3: Reducers as an object 

  reducers:{
    ordered:(state)=>{
      state.numOfCakes--
    },
    reStocked:(state,action)=>{
      state.numOfCakes=action.payload
    },

  }
})