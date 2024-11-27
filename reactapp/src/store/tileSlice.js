import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTile: '', 
};

const tileSlice = createSlice({
  name: 'tile',
  initialState,
  reducers: {
    updateTile: (state, action) => {
      state.selectedTile = action.payload; 
    },
  },
});

export const { updateTile } = tileSlice.actions;
export default tileSlice.reducer;
