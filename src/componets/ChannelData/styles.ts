import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    padding: 24px;
    border-top: 1px solid var(--light);
    border-bottom: 1px solid var(--light);
    max-height: calc(100vh - 184px);
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
`;

export const MessageList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0 20px;

    > li {
        display: flex;

        & + li {
            margin-top: 10px;
        }

        &.left {
            justify-content: flex-start;
        }

        &.right {
            justify-content: flex-end;
        }
    }

`;

export const Message = styled.div`
    /* width: max-content; */
    max-width: 550px;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;


    display: flex;
    flex-direction: column;

    &.message-left {
        align-items: flex-start;
        background: var(--light);
        color: var(--gray);
        
    }

    &.message-right {
        align-items: flex-end;
        background: var(--primary);
        color: var(--white);
    }


    > p {
        margin-bottom: 5px;
        white-space: pre-wrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: justify;
    }

    > time {
        font-size: 10px;
        color: var(--grey);
    }
`;