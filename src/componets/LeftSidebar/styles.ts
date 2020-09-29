import styled from 'styled-components';

export const Container = styled.div`
    grid-area: LS;
    background: var(--secondary);
    max-height: 100vh;

    @media(max-width: 1000px){
        max-height: calc(100vh - 52px);
    }
`;
