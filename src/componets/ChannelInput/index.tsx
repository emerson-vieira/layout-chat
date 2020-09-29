import React from "react";

import { Container, InputWrapper, Button, ButtonEnter, EmojiIcon, AttachmentIcon, SendPlaneIcon } from "./styles";

const ChannelInput: React.FC = () => {
    return (
        <Container>
            <form>
                <InputWrapper>
                    <Button type='button'>
                        <EmojiIcon />
                    </Button>
                    <input type="text" placeholder="Digite uma mensagem" />
                    <Button type='button'>
                        <AttachmentIcon />
                    </Button>
                    <ButtonEnter>
                        <SendPlaneIcon />
                    </ButtonEnter>
                </InputWrapper>
            </form>
        </Container>
    );
};

export default ChannelInput;
