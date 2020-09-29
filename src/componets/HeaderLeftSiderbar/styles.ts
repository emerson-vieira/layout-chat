import styled from 'styled-components';

import { RiSearchLine } from 'react-icons/ri';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 24px 30px 24px;



    > h4 {
        color: var(--text);
        font-weight: 600;
        font-size: 24px;
        margin-bottom: 24px;
    }
`;

export const Separator = styled.div`
    width: 95%;
    height: 2px;
    background: var(--light);
`;

export const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    background: var(--light);
    padding: 10px 10px 10px 35px;
    position: relative;
    border-radius: 5px;

    > input {
        width: 100%;
        height: 30px;
        padding: 5px;
        color: var(--gray);
        border: 0;
        outline: 0;
    }
`;

export const InputIcon = styled(RiSearchLine)`
    position: absolute;
    left: 14px;
    top: 16px;
    font-size: 18px;
    color: var(--gray);
`;

