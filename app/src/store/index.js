import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart';

const store = configureStore({
  reducer: {
    cart: cartReducer.reducer,
  },
});

export default store;
