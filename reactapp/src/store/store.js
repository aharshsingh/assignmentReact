import { configureStore } from '@reduxjs/toolkit';
import buttonReducer from './buttonSlice';
import tileReducer from './tileSlice';

const store = configureStore({
  reducer: {
    button: buttonReducer,
    tile: tileReducer,
  },
});

export default store;
