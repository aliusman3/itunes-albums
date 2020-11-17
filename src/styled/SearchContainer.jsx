import styled from 'styled-components';

export default styled.div`
    display: grid;
    grid-template-rows: 40px 1fr;
    grid-template-columns: var(--container-width) 1fr var(--container-width);
    grid-template-areas:
        ". searchbar ."
        ". results .";
    grid-column: -1/1;
    justify-items: center;
`;