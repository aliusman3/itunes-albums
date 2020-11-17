import styled from 'styled-components';

export default styled.header`
    grid-area: landing;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 10px repeat(2, 1fr) 10px;
    grid-template-areas: 
        ". landing-text landing-text ."
        ". searchbar searchbar .";
    justify-items: center;
`;