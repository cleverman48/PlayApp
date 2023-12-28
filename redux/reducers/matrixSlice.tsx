import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const matrixSlice = createSlice({
  name: 'matrix',
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateData } = matrixSlice.actions;
export default matrixSlice.reducer;