import{createSlice} from "@reduxjs/toolkit";
const MySlice=createSlice(
    {
        name:"MySlice",
        initialState:[
        {name:"Nilesh",Age:22,Course:"MERN",Batch:"2021"},
        {name:"Samay",Age:25,Course:"MERN",Batch:"2021"},
        {name:"Rupali",Age:26,Course:"MERN",Batch:"2020"},
        {name:"Aditi",Age:22,Course:"MERN",Batch:"2023"},
        {name:"Rutuja",Age:23,Course:"MERN",Batch:"2023"},
        {name:"Kshitija",Age:24,Course:"MERN",Batch:"2012"},
    ],
    reducers:
    {
        editData:(state,action)=>{
            state[action.payload.index]=action.payload.currData;
            console.log(state)
            return(state)
        },
        addUser:(state,action)=>{
            console.log(action.payload);
            state[state.length]=action.payload
            // state.push(action.payload.newObj)
            return(state)
        }
        
    }
    }
)
export const {editData}=MySlice.actions;
export const {addUser}=MySlice.actions
export default MySlice.reducer;