import React, { Component } from 'react';
import { Divider, Responsive, Container, Grid, Segment, Header, Button, Icon } from 'semantic-ui-react';
import { animateScroll as scroll } from 'react-scroll';

import Paragraph from './paragraph';
import MobileContext from '../Context/mobileContext';
class Content extends Component {
    render() {
        const paragraphs = [
            'I am living in Toronto, Ontario. I have been writing code for a couple of years and have gotten my hand dirty in various languages and frameworks. I love coding back-end development but also comfortable if I have to code in the front-end.',
            'Everything started with my love and passion for the technology, come from the old computer my dad bought for me back when I was a kid. Ever since then, I try to control it, to make friend with it and when the first time I knew about Pascal and what I could do, I realized I found the purpose of my life.',
            'I am responsible for my own project and take self-development seriously.I task and try to push myself to the limit every single day and enjoy every second of it. My goal is to work as a web developer in a team of passionate, amazing people and work hard to achieve it.',
            'If you are an employer looking to hire or a friend who just wanna talk, feel free to contact me'
        ];
        return (
            <MobileContext.Consumer>
                {mobile =>
                    <Container text style={{ lineHeight: mobile ? '190%' : '220%' }}>
                        <Container textAlign='center' style={{ fontSize: mobile ? '1em' : '3em', fontWeight: '900' }}>
                            <p>Hello, I'm Khang..</p>
                        </Container>
                        <Segment size={mobile ? 'small' : 'big'} basic >
                            {paragraphs
                                .slice(0, paragraphs.length - 1)
                                .map((content, index) => <Paragraph key={index} mobile={mobile} content={content} />)}
                            <Container>
                                {paragraphs[paragraphs.length - 1]}
                                &nbsp;<Icon size='large' name='mail' link onClick={() => scroll.scrollToBottom()} />.
                        </Container>
                        </Segment>
                    </Container>
                }
            </MobileContext.Consumer>
        );
    }
}

export default Content;