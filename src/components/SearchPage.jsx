import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectAlbumsData } from '../ducks/albums';
import SearchBar from './SearchBar';
import Album from './Album';

const SearchContainer = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-template-columns: var(--container-width) 1fr var(--container-width);
    grid-template-areas:
        ". searchbar ."
        ". results .";
    grid-column: -1/1;
`;

function SearchPage(props) {
    const albumsData = useSelector(selectAlbumsData);
    return (
        <SearchContainer>
            <SearchBar />
            <div style={{gridArea:'results', width: '100%'}}>
                {albumsData && albumsData.map((album, index) => <Album key={album.collectionId} album={album} />)}
            </div>
        </SearchContainer>
    )
}

export default SearchPage;