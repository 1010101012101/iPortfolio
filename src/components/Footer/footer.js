import React, { Component } from 'react';

import { Image, Responsive, Segment, Container, Grid, Header, Button, Icon } from 'semantic-ui-react';

import { animateScroll as scroll } from 'react-scroll';

import logoImage from '../../assets/logo.png';
const Footer = () => (
    <Container fluid style={{ width: '100%', backgroundColor: '#ff7961' }}>
        <Responsive {...Responsive.onlyComputer}>
            <Grid textAlign='center'>
                <Grid.Row>
                    <Header textAlign='center'>
                        <Image href="#" style={{ marginBottom: '5%' }} src={logoImage} size='huge' onClick={() => scroll.scrollToTop()} />

                        <Header.Subheader>
                            Handmade by me - Khang Tran &copy; 2018
                    </Header.Subheader>
                    </Header>

                </Grid.Row>
                <Grid.Row>
                    <Button.Group size='large'>
                        <Button as='a' href='https://www.facebook.com/khangishere' target='_blank' className='hvr-wobble-vertical' color='facebook'>
                            <Icon name='facebook' /> Facebook
                    </Button>
                        <Button as='a' href='mailto:cktran16x2@gmail.com' className='hvr-wobble-vertical' color='google plus'>
                            <Icon name='mail' /> Email
                    </Button>
                        <Button as='a' href='https://www.linkedin.com/in/khangtranx/' target='_blank' className='hvr-wobble-vertical' color='linkedin'>
                            <Icon name='linkedin' /> LinkedIn
                    </Button>
                        <Button as='a' href='http://github.com/Khang-Tran' target='_blank' className='hvr-wobble-vertical' color='black'>
                            <Icon name='github' /> Github
                    </Button>
                    </Button.Group>
                </Grid.Row>
            </Grid>
        </Responsive>

        <Responsive {...Responsive.onlyMobile}>
            <Grid container textAlign='center' verticalAlign='middle'>
                <Grid.Row>
                    <Header size='medium' textAlign='center'>
                        <Header.Content>
                            <Icon size='small' onClick={() => scroll.scrollToTop()} link name='home' />
                        </Header.Content>

                        <Header.Subheader>
                            Lorem ipsum dolor sit amet
                    </Header.Subheader>
                    </Header>
                    <Button.Group size='tiny'>
                        <Button as='a' href='https://www.facebook.com/khangishere' target='_blank' className='hvr-wobble-vertical' color='facebook'>
                            <Icon name='facebook' /> Facebook
                    </Button>
                        <Button as='a' href='https://plus.google.com/105861925169691513017' className='hvr-wobble-vertical' color='google plus'>
                            <Icon name='google plus' /> Google Plus
                    </Button>
                        <Button as='a' href='https://www.linkedin.com/in/khangtranx/' target='_blank' className='hvr-wobble-vertical' color='linkedin'>
                            <Icon name='linkedin' /> LinkedIn
                    </Button>
                        <Button as='a' href='http://github.com/Khang-Tran' target='_blank' className='hvr-wobble-vertical' color='black'>
                            <Icon name='github' /> Github
                    </Button>
                    </Button.Group>

                </Grid.Row>
            </Grid>
        </Responsive>
    </Container>
);

export default Footer;