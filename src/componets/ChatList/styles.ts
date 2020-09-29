import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100vh;

    @media(max-width: 1000px){
        max-height: calc(100vh - 52px);
    }
`;

export const Chats = styled.div`
    padding: 0 10px;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 4px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: var(--gray);
    }
    ::-webkit-scrollbar-track{
        background-color: var(--secondary);
    }

    > p {
        text-transform: uppercase; 
        padding: 15px 10px;
        font-weight: bold;
        color: var(--gray);
    }
`;