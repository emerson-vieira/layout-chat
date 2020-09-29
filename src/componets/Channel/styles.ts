import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CH;
    display: flex;
    flex-direction: column;
    background: var(--white);

    box-shadow: 0 2px 4px rgba(15,34,58,.12);
    transition: all .4s;
    max-height: 100%;

    @media(max-width: 1000px){
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        visibility: hidden;
        transform: translateX(100%);
        z-index: 99;

        &.user-chat-show {
            visibility: visible;
            transform: translateX(0); 
        }
    }
    
`;
