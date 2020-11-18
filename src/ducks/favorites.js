import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    favorites: [],
    favoritesFilterQuery: ''
};

const favorites = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(favorite => favorite.collectionId !== action.payload);
        },
        setFavoriteFilterQuery: (state, action) => {
            state.favoritesFilterQuery = action.payload;
        }
    }
});

export const selectFavorites = state => state.favorites.favorites;
export const selectFavoritesFilterQuery = state => state.favorites.favoritesFilterQuery;
export const selectFavoritesCollectionNames = createSelector(
    selectFavorites,
    favorites => favorites.map(favorite => favorite.collectionName)
);
export const selectFavoritesCollectionIds = createSelector(
    selectFavorites,
    favorites => favorites.map(favorite => favorite.collectionId)
);
export const selectFavoritesLength = createSelector(
    selectFavorites,
    favorites => favorites.length
);
export const selectFilteredFavorites = createSelector(
    selectFavorites,
    selectFavoritesFilterQuery,
    (favorites, query) => favorites.filter(favorite => new RegExp(`^${query}`, 'i').test(favorite.artistName))
);
export const { addFavorite, removeFavorite, setFavoriteFilterQuery } = favorites.actions;
export default favorites.reducer;
