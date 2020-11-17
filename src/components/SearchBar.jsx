import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchAlbumsByTerm } from '../ducks/albums';

function SearchBar(props) {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const onSubmit = useCallback((e, term) => {
        e.preventDefault();
        dispatch(fetchAlbumsByTerm({ term }));
        history.push('/search');
    }, [dispatch]);
    return (
        <div className="search-bar" style={{ gridArea: 'searchbar' }} >
            <form onSubmit={e => onSubmit(e, term)}>
                <input type="text" value={term} onChange={e => setTerm(e.target.value)}/>
            </form>
        </div>
    )
}

export default SearchBar;