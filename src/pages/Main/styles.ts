import styled, { css } from 'styled-components';
import { RiGroupLine, RiMessage3Line, RiContactsLine } from "react-icons/ri";

export const Container = styled.div``;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 75px 380px auto 75px;
    /*grid-template-rows: 92px auto 92px;*/

    grid-template-areas: 
        'SM LS CH SMR'
        'SM LS CH SMR'
        'SM LS CH SMR'
    ;

    height: 100vh;

    @media(max-width: 1000px){
        display: flex;
        flex-direction: column;

        max-height: calc(100vh - 52px);
    }
`;

export const BottomMenu = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    border-top: 1px solid var(--ligth);  
    padding: 8px min(46px, max(10vw, 10px));

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(min-width: 1000px){
        display: none;
    }
`;

const iconCSS = css`
    width: 31px;
    height: 31px;



`;

export const MessageIcon = styled(RiMessage3Line)`
    ${iconCSS}
`;

export const ContactsIcon = styled(RiContactsLine)`
    ${iconCSS}
`;

export const GroupIcon = styled(RiGroupLine)`
    ${iconCSS}
`;

export const ButtonMenu = styled.button`
    color: var(--gray);
    cursor: pointer;

    &:hover,
    &.active {
        color: var(--primary);         
    }
`;
