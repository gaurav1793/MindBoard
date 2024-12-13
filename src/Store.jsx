import {configureStore} from '@reduxjs/toolkit'
import  MindBoardSliceReducer from './Features/MindBoardSlice'

export const store = configureStore({
  reducer: {
    MindBoarding:MindBoardSliceReducer
  },
})