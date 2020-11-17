import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = [];

const favorites = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.push(action.payload);
        },
        removeFavorite: (state, action) => state.filter(favorite => favorite.collectionName !== action.payload)
    }
});

export const selectFavorites = state => state.favorites;
export const selectFavoritesCollectionNames = createSelector(
    selectFavorites,
    favorites => favorites.map(favorite => favorite.collectionName)
);
export const { addFavorite, removeFavorite } = favorites.actions;
export default favorites.reducer;
