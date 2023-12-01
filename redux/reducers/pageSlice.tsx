import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageState {
  page: string;
}
const initialState: PageState = {
  page: "firstPage",
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
