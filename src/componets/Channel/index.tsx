import React, { useRef } from "react";

import ChannelHeader from "../ChannelHeader";
import ChannelData from "../ChannelData";
import ChannelInput from "../ChannelInput";

import { Container } from "./styles";

const Channel: React.FC = () => {
    const refDiv = useRef<HTMLDivElement>(null);

    function goBack(){
        refDiv.current.classList.remove('user-chat-show');
    }

    return (
        <Container ref={refDiv} className="user-chat-show">
            <ChannelHeader subSubcribeGoBackFunction={goBack} />
            <ChannelData />
            <ChannelInput />
        </Container>
    );
};

export default Channel;
