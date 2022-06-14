import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const idToToggle = action.payload;
      const newFavoritesArray = [...state.favorites];
      if (newFavoritesArray.includes(idToToggle)) {
        state.favorites = newFavoritesArray.filter(
          (favorite) => favorite !== idToToggle
        );
      } else {
        state.favorites.push(idToToggle);
      }
    },
  },
});

export const { toggleFavorites } = userSlice.actions;

export default userSlice.reducer;
