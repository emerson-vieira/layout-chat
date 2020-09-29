import React from 'react';

import { RiUser3Fill } from "react-icons/ri";

import { Container } from './styles';

export interface Props {
    url?: string;
    isOnline?: boolean;
}

const Avatar: React.FC <Props> = ({url, isOnline}) => {
    return (
        <Container isOnline={isOnline}>
            {!!url ? (
                (<img src={url} alt='Avatar' />)
            ) :
                (<RiUser3Fill />)
            }
        </Container>
    );
}

export default Avatar;