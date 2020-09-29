import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px 20px;
    color: #7a7f9a;
    transition: all .4s;
    border-top: 1px solid #f5f7fb;
    border-radius: 4px;
   /* background: ${props => props.unreadMessage && props.unreadMessage > 0 ? 'var(--light)' : ''}; */
    transition: background-color .3s;
    position: relative;

    cursor: pointer;

    & + div {
        margin-top: 2px;
    }

    &:hover {
        background: var(--light); 
    }

    &.active{
        color: var(--white); 
        background: var(--primary); 
        border: 1px solid var(--primary);
    }
`;

export const User = styled.div`
    display: flex;
        
`;

export const WrapperAvatar = styled.div``;

export const UnreadMessage = styled.div<Props>`
    display: ${props => props.unreadMessage && props.unreadMessage > 0 ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    
    min-width: 20px;
    height: 20px;
    color: var(--notification-text);
    background-color: var(--notification);
    padding: 5px;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 700;
`;

export const InfoUser = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
    > time {
        color: ${props => props.unreadMessage && props.unreadMessage > 0 ? 'var(--notification-text)' : ''};
        font-size: 11px; 
        margin-bottom: 5px;      
    }
`;


export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    margin-left: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    > h5 {
        font-size: 15px;
        margin-bottom: 4px;
    }

    > p {
        font-size: 14px;
    }
`;

