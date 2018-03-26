import React, { Component } from 'react';
import { Divider, Responsive, Container, Grid, Segment, Header, Button, Icon } from 'semantic-ui-react';
import { animateScroll as scroll } from 'react-scroll';

class AboutContent extends Component {
    render() {
        return (
            <Container text style={{ lineHeight: '220%' }}>
                <Responsive {...Responsive.onlyComputer}>
                    <Container textAlign='center' style={{ fontSize: '3em', fontWeight: '600' }}>
                        <p>Hello, I'm Khang..</p>
                    </Container>
                    <Segment size='big' basic >
                        <Container>I am living in Toronto, Ontario. I have been writing code for a couple of years and have gotten my hand dirty in various languages and frameworks. I love to code back-end development but also comfortable if I have to code in the front-end.</Container>
                        <Divider hidden />
                        <Container>Everything started with my love and passion for the technology, come from the old computer my dad bought for me back when I was a kid. Ever since then, I try to control it, to make friend with it and when the first time I knew about Pascal and what I could do, I realized I found the purpose of my life.</Container>
                        <Divider hidden />
                        <Container>I am responsible for my own project and take self-development seriously.I task and try to push myself to the limit every single day and enjoy every second of it. My goal is to work as a web developer in a team of passionate, amazing people and work hard to achieve it.</Container>
                        <Divider hidden />
                        <Container>If you are an employer looking to hire or a friend who just wanna talk, feel free to contact me &nbsp;
                        <Icon size='large' name='mail' link onClick={() => scroll.scrollToBottom()} />.
                        </Container>
                    </Segment>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Container textAlign='center' style={{ fontSize: '1em', fontWeight: '900' }}>
                        <p>Hello, I'm Khang..</p>
                    </Container>
                    <Segment size='small' basic >
                        <Container>I am living in Toronto, Ontario. I have been writing code for a couple of years and have gotten my hand dirty in various languages and frameworks. I love to code back-end development but also comfortable if I have to code in the front-end.</Container>
                        <Container>Everything started with my love and passion for the technology, come from the old computer my dad bought for me back when I was a kid. Ever since then, I try to control it, to make friend with it and when the first time I knew about Pascal and what I could do, I realized I found the purpose of my life.</Container>
                        <Container>I am responsible for my own project and take self-development seriously.I task and try to push myself to the limit every single day and enjoy every second of it. My goal is to work as a web developer in a team of passionate, amazing people and work hard to achieve it.</Container>
                        <Container>If you are an employer looking to hire or a friend who just wanna talk, feel free to contact me &nbsp;
                        <Icon name='mail' size='large' link onClick={() => scroll.scrollToBottom()} />.
                        </Container>
                    </Segment>
                </Responsive>

            </Container>

        );
    }
}

export default AboutContent;