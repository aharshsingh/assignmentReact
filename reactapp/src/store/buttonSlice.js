import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buttonClicked: false,
};

const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    toggleButtonClicked: (state) => {
      state.buttonClicked = !state.buttonClicked;
    },
  },
});

export const { toggleButtonClicked } = buttonSlice.actions;
export default buttonSlice.reducer;
