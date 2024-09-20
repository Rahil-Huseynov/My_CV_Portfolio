import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
  
  },
})

export default counterSlice.reducer