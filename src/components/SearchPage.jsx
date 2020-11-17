import React from 'react';
import { useSelector } from 'react-redux';
import { selectAlbumsData, selectAlbumsError, selectAlbumsLoading } from '../ducks/albums';
import { SearchContainer } from '../styled';
import SearchBar from './SearchBar';
import Album from './Album';

function SearchPage(props) {
    const albumsLoading = useSelector(selectAlbumsLoading);
    const albumsData = useSelector(selectAlbumsData);
    return (
        <SearchContainer>
            <SearchBar />
            <div style={{gridArea:'results', width: '100%'}}>
                {albumsData && albumsData.map(album => <Album key={album.collectionName} album={album} />)}
            </div>
        </SearchContainer>
    )
}

export default SearchPage;