import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import MaterialIcon from '@material/react-material-icon';
import { useSelector, useDispatch } from 'react-redux';
import { Anchor } from '../styled';
import { addFavorite, removeFavorite, selectFavoritesCollectionNames } from '../ducks/favorites';

const AlbumContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const AlbumImage = styled.img`
    flex: 0 0 auto;
    min-width: 50px;
    width: calc(100px + 4vw);
    margin-right: 10px;
    object-fit: contain;
`;

const AlbumDescription = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const AlbumName = styled.h2`
    font-size: 1.4rem;
    margin-bottom: 2px;
`;

const AlbumPrice = styled.span`
    font-weight: 500;
    font-size: 1.2rem;
`;

const ArtistName = styled.p`
    font-size: 1.2rem;
    margin-bottom: 2px;
`;

const GenreName = styled.p`
    font-size: 1.2rem;
`;

const ReleaseDate = styled.p`
    margin-top: auto;
`;

const FavoritesIconContainer = styled.div`
    position: absolute;
    bottom: 15px;
    right: 15px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

function Album({album}) {
    const dispatch = useDispatch();
    const favoritedCollectionNames = useSelector(selectFavoritesCollectionNames);
    const isFavorited = useMemo(() => favoritedCollectionNames.includes(album.collectionName), [favoritedCollectionNames, album.collectionName]);
    const onFavorite = useCallback(
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (isFavorited) {
                dispatch(removeFavorite(album.collectionName));
            } else {
                dispatch(addFavorite(album));
            }
        },
        [album, dispatch, isFavorited],
    );
    return (
        <AlbumContainer>
            <Anchor style={{ position: 'relative' }} href={album.collectionViewUrl}>
                <AlbumImage src={album.artworkUrl100}/>
                <FavoritesIconContainer onClick={onFavorite}>
                    <MaterialIcon style={{ fontSize: '16px' }} icon={`${isFavorited ? 'star': 'star_outline'}`}/>
                </FavoritesIconContainer>
            </Anchor>
            <AlbumDescription>
                <Anchor href={album.collectionViewUrl}><AlbumName>{album.collectionName} <AlbumPrice>${album.collectionPrice}</AlbumPrice> </AlbumName></Anchor>
                <Anchor href={album.artistViewUrl} ><ArtistName>{album.artistName} </ArtistName></Anchor>
                <GenreName>{album.primaryGenreName} </GenreName>
                <ReleaseDate>Released: {new Date(album.releaseDate).toDateString()}</ReleaseDate>
            </AlbumDescription>
        </AlbumContainer>
    );
}

export default Album;