import styled, { css } from 'styled-components';
import { RiEmotionHappyLine, RiAttachmentLine, RiSendPlaneLine } from "react-icons/ri"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92px;
    
    > form {
        width: 100%; 
    }
`;


export const InputWrapper = styled.div`
    display: grid;
    grid-template-columns: 50px auto 50px 50px;

    width: 100%;
    height: 50px;
    padding: 0 16px;

    > input {
        width: 100%;
        background: var(--light);
        padding: 15px;
        border-radius: 25px;
    }
`;

const iconCSS = css`
    width: 20px;
    height: 20px;

    color: var(--primary);
`;

export const EmojiIcon = styled(RiEmotionHappyLine)`
    ${iconCSS}
`;

export const AttachmentIcon = styled(RiAttachmentLine)`
    ${iconCSS}
`;

export const SendPlaneIcon = styled(RiSendPlaneLine)`
    ${iconCSS}
    color: var(--white);
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer; 
`;

export const ButtonEnter = styled(Button)`
    background: var(--primary);
    border-radius: 5px;
`;

