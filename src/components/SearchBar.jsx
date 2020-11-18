import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import MaterialIcon from '@material/react-material-icon';
import { selectAlbumsLoading } from '../ducks/albums';
import { fetchAlbumsByTerm } from '../ducks/albums';

const SearchInput = styled.input`
    border: 1px solid black;
    padding: 10px 10px;
    width: 30%;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled(MaterialIcon)`
  margin-left: -30px;
  animation: ${rotate} 2s linear infinite;
`;

function SearchBar(props) {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const albumsLoading = useSelector(selectAlbumsLoading);
    const onSubmit = useCallback((e, term) => {
        e.preventDefault();
        dispatch(fetchAlbumsByTerm({ term }));
        history.push('/search');
    }, [dispatch, history]);
    return (
        <div className="search-bar" style={{ gridArea: 'searchbar' }} >
            <form style={{ display: 'flex', alignItems: 'center' }} onSubmit={e => onSubmit(e, term)}>
                <SearchInput placeholder="Search for your favorite artists..." type="text" value={term} onChange={e => setTerm(e.target.value)} />
                {albumsLoading && <Loader icon="cached" />}
            </form>
        </div>
    )
}

export default SearchBar;