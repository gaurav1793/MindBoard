import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


const initialState ={
    pastes : localStorage.getItem("pastes")? JSON.parse(localStorage.getItem("pastes")): []
}

export const MindBoardSlice = createSlice({
  name: 'MindBoarding',
  initialState,
  reducers: {
    AddToPaste: (state,action) => {
      const paste = action.payload
      state.pastes.push(paste)
      localStorage.setItem("pastes",JSON.stringify(state.pastes))
      toast.success("Paste Created")
    },
    UpdateToPaste: (state,action) => {
      const paste= action.payload;
      const index = state.pastes.findIndex((item)=>item._id===paste._id);
      if(index>=0){
        state.pastes[index]=paste;
        localStorage.setItem("pastes",JSON.stringify(state.pastes))
        toast.success("Paste Updated")
      }
    },
    ResetAllPaste: (state) => {
      state.pastes=[];
      localStorage.removeItem("pastes")
    },
    RemoveFromPaste: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item)=>item._id===pasteId)

      if(index>=0){
        state.pastes.splice(index,1);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Paste Removed")
      }
    },
  },
})


export const { AddToPaste, UpdateToPaste, ResetAllPaste,RemoveFromPaste } = MindBoardSlice.actions

export default MindBoardSlice.reducer