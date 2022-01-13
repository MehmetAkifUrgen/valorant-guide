import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'sepet',
  initialState: {
    language: '',
  },
  reducers: {
    getLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getLanguage } = counterSlice.actions;
export default counterSlice.reducer;
