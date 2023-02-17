import {createSlice} from '@reduxjs/toolkit';

let initialState = [
  {
    id: '1',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: 'Human',
    gender: 'Male',
    origin: 'Earth (C-137',
    location: 'Citadel of Ricks',
  },
];

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    addCharacter: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const {addCharacter} = characterSlice.actions;
export default characterSlice.reducer;
