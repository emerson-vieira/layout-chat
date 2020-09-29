import React, { useRef, useEffect } from 'react';


import { Container, MessageList, Message } from './styles';

const ChannelData: React.FC = () => {

    const messageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const div = messageRef.current;
        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messageRef])

    return (
        <Container ref={messageRef}>
            <MessageList>
                <li className='right'>
                    <Message className='message-right'>
                        <p>ensando mais a longo prazo, o desafiador cenário globalizado promove a alavancagem dos modos de operação convencionais.</p>
                        <time>20:00</time>
                    </Message>    
                </li>
                <li className='left'>
                    <Message className='message-left'>
                        <p>O que temos que ter sempre em mente é que a estrutura atual da organização aponta para a melhoria dos modos de operação convencionais.</p>
                        <time>20:00</time>
                    </Message>    
                </li>
                <li className='right'>
                    <Message className='message-right'>
                        <p>Neste sentido, a competitividade nas transações comerciais apresenta tendências no sentido de aprovar a manutenção das posturas dos órgãos dirigentes com relação às suas atribuições.</p>
                        <time>20:00</time>
                    </Message>    
                </li>
                <li className='right'>
                    <Message className='message-right'>
                        <p>ensando mais a longo prazo, o desafiador cenário globalizado promove a alavancagem dos modos de operação convencionais.</p>
                        <time>20:00</time>
                    </Message>    
                </li>
                <li className='left'>
                    <Message className='message-left'>
                        <p>O que temos que ter sempre em mente é que a estrutura atual da organização aponta para a melhoria dos modos de operação convencionais.</p>
                        <time>20:00</time>
                    </Message>    
                </li>
                <li className='right'>
                    <Message className='message-right'>
                        <p>Neste sentido, a competitividade nas transações comerciais apresenta tendências no sentido de aprovar a manutenção das posturas dos órgãos dirigentes com relação às suas atribuições.</p>
                        <time>20:00</time>
                    </Message>    
                </li>
                <li className='right'>
                    <Message className='message-right'>
                        <p>ensando mais a longo prazo, o desafiador cenário globalizado promove a alavancagem dos modos de operação convencionais.</p>
                        <time>20:00</time>
                    </Message>    
                </li>
                <li className='left'>
                    <Message className='message-left'>
                        <p>O que temos que ter sempre em mente é que a estrutura atual da organização aponta para a melhoria dos modos de operação convencionais.</p>
                        <time>20:00</time>
                    </Message>    
                </li>
                <li className='right'>
                    <Message className='message-right'>
                        <p>Neste sentido, a competitividade nas transações comerciais apresenta tendências no sentido de aprovar a manutenção das posturas dos órgãos dirigentes com relação às suas atribuições.</p>
                        <time>20:00</time>
                    </Message>    
                </li>
            </MessageList>
        </Container>
    );
}

export default ChannelData;