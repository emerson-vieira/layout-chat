import React from 'react';

import { Container, InputWrapper, InputIcon, Separator } from './styles';

interface Props {
    title: string;
    placeholder: string;
}

const HeaderLeftSiderbar: React.FC <Props> = ({title, placeholder}) => {
    return (
        <>
            <Container>
                <h4>{title}</h4>
                <InputWrapper>
                    <input type='text' placeholder={placeholder}/>
                    <InputIcon />
                </InputWrapper>
            </Container>
            <Separator />
        </>
    );
}

export default HeaderLeftSiderbar;