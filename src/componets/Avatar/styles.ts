import styled from 'styled-components';

import { Props } from '.';

export const Container = styled.div<Props>`
    width: 36px;
    height: 36px;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: relative;
    font-size: 14px;

    > svg {
        color: var(--gray);
    }

    > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    &::after{
        position: absolute;
        display: ${props => props.isOnline ? 'inline' : 'none'}; 
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--green);
        border: 1px solid var(--white);
        content: '';
    }
`;
