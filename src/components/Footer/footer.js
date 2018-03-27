import React, { Component } from 'react';

import { Image, Responsive, Segment, Container, Grid, Header, Button, Icon } from 'semantic-ui-react';

import { animateScroll as scroll } from 'react-scroll';

import logoImage from '../../assets/logo.png';
const Footer = () => (
    <React.Fragment>
        <Responsive {...Responsive.onlyComputer}>
            <Container fluid style={{ width: '100%', backgroundColor: '#ff7961' }}>

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
                        <Button icon='facebook' circular as='a' href='https://www.facebook.com/khangishere' target='_blank' className='hvr-wobble-vertical' color='facebook'>
                        </Button>
                        <Button icon='mail' as='a' circular href='mailto:cktran16x2@gmail.com' className='hvr-wobble-vertical' color='google plus'>
                        </Button>
                        <Button icon='linkedin' as='a' circular href='https://www.linkedin.com/in/khangtranx/' target='_blank' className='hvr-wobble-vertical' color='linkedin'>
                        </Button>
                        <Button icon='github' as='a' href='http://github.com/Khang-Tran' target='_blank' className='hvr-wobble-vertical' color='black'>
                        </Button>
                    </Grid.Row>
                </Grid>
            </Container>
        </Responsive>

        <Responsive {...Responsive.onlyMobile}>
            <Container fluid style={{ width: '100%', backgroundColor: '#ff7961', display: 'table-cell' }}>

                <Grid container textAlign='center' verticalAlign='middle' >
                    <Grid.Row>
                        <Header size='medium' textAlign='center'>
                            <Header.Content>
                                <Icon size='small' onClick={() => scroll.scrollToTop()} link name='home' />
                            </Header.Content>

                            <Header.Subheader>
                                Handmade by me - Khang Tran &copy; 2018
                    </Header.Subheader>
                        </Header>
                        <Button.Group size='tiny'>
                            <Button as='a' href='https://www.facebook.com/khangishere' target='_blank' className='hvr-wobble-vertical' color='facebook'>
                                <Icon name='facebook' /> Facebook
                    </Button>
                            <Button as='a' href='mailto:cktran16x2@gmail.com' className='hvr-wobble-vertical' color='google plus'>
                                <Icon name='mail' /> Gmail
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
            </Container>

        </Responsive>
    </React.Fragment>
);

export default Footer;