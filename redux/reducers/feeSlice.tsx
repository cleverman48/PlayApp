import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FeeState {
  playFee: number;
  maxFee: number;
  nurseFee: number;
}
const initialState: FeeState = {
  playFee: 0,
  maxFee: 0,
  nurseFee: 0,
};

const feeSlice = createSlice({
  name: 'fee',
  initialState,
  reducers: {
    setFee: (state, action) => {
      state.playFee = action.payload.playFee;
      state.maxFee = action.payload.maxFee;
      state.nurseFee = action.payload.nurseFee;
    },
  },
});

export const { setFee } = feeSlice.actions;
export default feeSlice.reducer;
