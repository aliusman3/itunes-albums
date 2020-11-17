import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Album from './Album';
import { selectFilteredFavorites, selectFavoritesFilterQuery, setFavoriteFilterQuery } from '../ducks/favorites';

const FavoritesContainer = styled.div`
    margin: 10px var(--container-width);
    grid-column: -1/1;
`;

const FavoritesFilterInput = styled.input`
    margin: 10px 0;
    border: 1px solid black;
    padding: 10px 10px;
    width: 30%;
`;

function FavoritesPage(props) {
    const dispatch = useDispatch();
    const favoriteAlbums = useSelector(selectFilteredFavorites);
    const favoritesFilterQuery = useSelector(selectFavoritesFilterQuery);
    const onFilter = useCallback(e => {
        dispatch(setFavoriteFilterQuery(e.target.value));
    }, [dispatch]);
    return (
        <FavoritesContainer>
            <FavoritesFilterInput value={favoritesFilterQuery} onChange={onFilter} placeholder="Filter by Artist Name"/>
            {favoriteAlbums.map(favorite => <Album key={favorite.collectionName} album={favorite}/>)}
        </FavoritesContainer>
    )
}

export default FavoritesPage;