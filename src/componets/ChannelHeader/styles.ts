import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
    height: 92px;
    padding: 25px;
    color: var(--text);

    > strong {
        margin-left: 15px;
        font-size: 18px;
        font-weight: 600;
    }
`;

export const GoBack = styled.button`
    display: none;

    @media(max-width: 1000px){
        width: 30px;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        > svg {
            font-size: 36px;
        }
    }
`;
