import React, { Component } from 'react';
import { Transition, Divider, Container, Grid } from 'semantic-ui-react';
import Heading from './heading';
import Content from './content';
import InView from '../InView/inView';

class About extends Component {

    render() {
        const header = 'About me';
        const paragraph = 'My name is Khang Tran. I am living in Toronto, Ontario. I have been writing code for couple of years and have gotten my hand dirty in various languages and frameworks. I love to code back-end development but also comfortable in front-end. \nEverything started with my love and passion for the technology, come from the old computer my dad bought for me back when I was a kid. Ever since then, I try to to control it, to make friend with it and when the first time I knew about Pascal and what I could do, I realized I found the purpose of my life. \n I task and try to push myself to the limit every single day and enjoy every second of it. My goal is to work as a web developer in a team of passionate, amazing people and work hard to achive it. \
        If you are an employer looking to hire or a friend just wanna talk, feel free to contact me here.';
        return (
            <Container fluid style={{ borderBottom: '2px solid #E0E0E0' }}>
                <Grid style={{ marginTop: '5%', marginBottom: '10%' }}>
                    <Grid.Row centered stretched>
                        <Heading header={header} />
                    </Grid.Row>
                    <Grid.Row>
                        <Content />
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}
export default About;