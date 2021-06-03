import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  games: [],
  totalPrice: 0,
};

const cartReducer = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addCart(state, action) {
      state.games.push(action.payload.game);
      state.totalPrice += action.payload.game.price;
    },
    removeCart(state, action) {
      const gameDeleted = state.games.find(
        (game) => game.id === action.payload.id
      );

      if (gameDeleted) {
        state.games = state.games.filter(
          (game) => game.id !== action.payload.id
        );
        state.totalPrice -= gameDeleted.price;
      }
    },
  },
});

export const cartActions = cartReducer.actions;

export default cartReducer;
