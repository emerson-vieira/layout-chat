import React from "react";

import ChatList from "../ChatList";
import ContactsList from "../ContactsList";

import { Container } from "./styles";

interface Props {
    menuSelected: string;
}

const LeftSidebar: React.FC<Props> = ({ menuSelected }) => {
/*
    const items = {
        ChatList: <ChatList /> ,
        ContactsList: <ContactsList />
    }
*/
    if(menuSelected === 'ChatList'){
        return (
            <Container>
                <ChatList />     
            </Container>
        );
    }else if(menuSelected === 'ContactsList'){
        return (
            <Container>
                <ContactsList />     
            </Container>
        );

    }

    return (
        <Container>    
        </Container>
    );
};

export default LeftSidebar;
