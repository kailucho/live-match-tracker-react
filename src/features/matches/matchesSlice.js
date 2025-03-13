import { createSlice } from '@reduxjs/toolkit';

const matchesSlice = createSlice({
  name: 'matches',
  initialState: [],
  reducers: {
    setMatches: (state, action) => action.payload, 
  },
});

export const { setMatches } = matchesSlice.actions;
export default matchesSlice.reducer;