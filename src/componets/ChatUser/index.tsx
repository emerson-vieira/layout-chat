import React from 'react';

import Avatar from '../Avatar';

import { Button, User, WrapperAvatar, Info, UnreadMessage, InfoUser } from './styles';

export interface Props {
    isOnline?: boolean;
    unreadMessage?: number;
    callbackFunction?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    url?: string;
}
const ChatUser: React.FC <Props> = ({callbackFunction, isOnline, unreadMessage, url}) => {
    return (
        <Button onClick={callbackFunction} unreadMessage={unreadMessage}>
            <User>
                <WrapperAvatar>
                    <Avatar isOnline={isOnline} url={url}/>
                </WrapperAvatar>
                <Info>
                    <h5>Usuário</h5>
                    <p>Primeira mensagem</p>
                </Info>
            </User>
            <InfoUser unreadMessage={unreadMessage}>
                <time>19:58</time>
                <UnreadMessage unreadMessage={unreadMessage}>{unreadMessage}</UnreadMessage>
            </InfoUser>
        </Button>
    );
}

export default ChatUser;