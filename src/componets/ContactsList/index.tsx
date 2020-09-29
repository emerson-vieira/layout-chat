import React from 'react';

import HeaderLeftSiderbar from '../HeaderLeftSiderbar';
import Avatar from '../Avatar';

import { Container, List, Role, User } from './styles';

const ContactsList: React.FC = () => {
    return (
        <Container>
            <HeaderLeftSiderbar title='Contatos' placeholder='Pesquisar contato' />
            <List>
                <Role>Disponivel - 4</Role>
                <UserRow nickname='Usuário' />
                <UserRow nickname='Usuário' />
                <UserRow nickname='Usuário' />
                <UserRow nickname='Usuário' />
                <Role>Offine - 10</Role>
                <UserRow nickname='Usuário'/>
                <UserRow nickname='Usuário'/>
                <UserRow nickname='Usuário'/>
                <UserRow nickname='Usuário'/>
                <UserRow nickname='Usuário'/>
                <UserRow nickname='Usuário'/>
                <UserRow nickname='Usuário'/>
                <UserRow nickname='Usuário'/>
                <UserRow nickname='Usuário'/>
                <UserRow nickname='Usuário'/>

            </List>
        </Container>
    );
}

interface UserProps {
    nickname: string;
}
const UserRow: React.FC<UserProps> = ({nickname}) => {
    return (
        <User>
            <Avatar />
            <strong>{nickname}</strong>
        </User>
    )
}

export default ContactsList;