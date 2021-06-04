import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart';
import gamesReducer from './savedGames';

const store = configureStore({
  reducer: {
    cart: cartReducer.reducer,
    games: gamesReducer.reducer,
  },
});

export default store;
