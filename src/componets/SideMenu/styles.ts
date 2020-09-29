import styled from 'styled-components';

export const Container = styled.div`
    grid-area: SM;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width: 1000px){
        display: none;
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;

    > img {
        width: 35px;
        height: 35px;
    }
`;

export const Options = styled.ul`
    display:flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;

    > li {
        display: flex;
        justify-content: center;
        align-items: center;
        
        margin: 7px;
        font-size: 28px;
        color: var(--gray);
        width: 56px;
        height: 56px;
        border-radius: 8px;
        padding: 0;
        border: 0;
        cursor: pointer;

        &.active,
        &:hover {
            border: 0;
            background-color: var(--secondary);
            color: var(--primary);  
        }
    }
`;
