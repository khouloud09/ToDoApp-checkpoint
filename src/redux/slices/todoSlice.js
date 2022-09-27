import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
       state.push(
          action.payload, 
        );
      },
      deleteTodo:(state,action)  =>{
         return state.filter ((el) =>el.id !==action.payload.id)
      },
      editTodo:(state,action) =>{
        return state.map((el)=>el.id=== action.payload.id ? action.payload :el)
  },}
});

export const { addTodo , deleteTodo ,editTodo} = todoSlice.actions;

export default todoSlice.reducer;