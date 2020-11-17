import { createSlice } from '@reduxjs/toolkit';
import itunesApi from '../clients/itunes';

const initialState = {
    loading: null,
    data: null,
    error: null
};

const albums = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        getAlbumsByTerm: (state) => {
            state.loading = true
        },
        getAlbumsByTermSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        getAlbumsByTermFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export default albums.reducer;
const selectors = {
    selectAlbumsData: state => state.albums.data,
    selectAlbumsLoading: state => state.albums.loading,
    selectAlbumsError: state => state.albums.error
};
export const { selectAlbumsData, selectAlbumsLoading, selectAlbumsError } = selectors;
const { getAlbumsByTerm, getAlbumsByTermFailure, getAlbumsByTermSuccess } = albums.actions;

export function fetchAlbumsByTerm(params) {
    return dispatch => {
        dispatch(getAlbumsByTerm());
        return itunesApi.search({
            ...params,
            entity: 'album',
            media: 'music'
        })
        .then(({ data }) => {
            dispatch(getAlbumsByTermSuccess(data.results));
            return data;
        })
        .catch(e => {
            const error = e.toString();
            dispatch(getAlbumsByTermFailure(error));
            return error;
        });
    };
}