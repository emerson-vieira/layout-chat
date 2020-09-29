import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100vh;

    @media(max-width: 1000px){
        max-height: calc(100vh - 52px);
    }
`;

export const List = styled.div`
    max-height: 100%;
    overflow-y: scroll;
    /* margin-bottom: 15px; */
    padding: 0 10px;

    ::-webkit-scrollbar{
        width: 4px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: var(--gray);
    }
    ::-webkit-scrollbar-track{
        background-color: var(--secondary);
    }
`;

export const Role = styled.div`
    padding: 15px 10px;
    font-weight: bold;
    text-transform: uppercase; 
    color: var(--gray);
`;

export const User = styled.div`
    margin-top: 5px;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;
    background: transparent;
    transition: background .2s;

    &:hover {
        background: var(--light);
    }

    > strong {
        margin-left: 13px;
        font-weight: 500;
        color: var(--gray);
        opacity: 0.7;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }   
`;
