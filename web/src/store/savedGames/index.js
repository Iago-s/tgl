import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  games: [],
  types: [],
};

const savedGamesReducer = createSlice({
  name: 'games',
  initialState: INITIAL_STATE,
  reducers: {
    addGames(state, action) {
      state.games.push(action.payload);
    },
    addTypes(state, action) {
      state.types = action.payload;
    },
  },
});

export const savedGamesActions = savedGamesReducer.actions;

export default savedGamesReducer;
