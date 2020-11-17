import styled from 'styled-components';

export default styled.main`
    min-height: 100vh;
    display: grid;
    grid-template-rows: 40px 1fr;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
        "navbar navbar navbar navbar"
        "landing landing landing landing"
`;