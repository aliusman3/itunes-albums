import styled from 'styled-components';

export default styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${props => props.theme.primaryColor};
    padding: 10px var(--container-width);
    color: ${props => props.theme.textLight1};
    font-size: 1.4rem;
    grid-area: navbar;
`;