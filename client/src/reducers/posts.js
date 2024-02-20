import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [], // your initial state here
  reducers: {
    fetchAll: (state, action) => {
      // handle FETCH_ALL action (mutating logic is okay here)
      return state; // or update the state accordingly
    },
    create: (state, action) => {
      // handle CREATE action (mutating logic is okay here)
      return state; // or update the state accordingly
    },
  },
});

export const { fetchAll, create } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
