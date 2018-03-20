import React, { Component } from 'react';

import { Container, Grid, Header, Button, Icon } from 'semantic-ui-react';
const Footer = () => (
    <Container fluid style={{ marginTop: '2%', marginBottom: '2%' }}>
        <Grid textAlign='center'>
            <Grid.Row>
                <Header>
                    Lorem ipsum dolor sit amet
                </Header>
            </Grid.Row>
            <Grid.Row>
                <Button.Group size='large'>
                    <Button className='hvr-wobble-vertical' color='facebook'>
                        <Icon name='facebook' /> Facebook
                    </Button>
                    <Button className='hvr-wobble-vertical' color='google plus'>
                        <Icon name='google plus' /> Google Plus
                    </Button>
                    <Button className='hvr-wobble-vertical' color='linkedin'>
                        <Icon name='linkedin' /> LinkedIn
                    </Button>
                    <Button className='hvr-wobble-vertical' color='black'>
                        <Icon name='github' /> Github
                    </Button>

                </Button.Group>
            </Grid.Row>
        </Grid>
    </Container>
);

export default Footer;