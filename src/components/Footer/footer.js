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
                    <Button color='facebook'>
                        <Icon name='facebook' /> Facebook
                    </Button>
                    <Button color='google plus'>
                        <Icon name='google plus' /> Google Plus
                    </Button>
                    <Button color='linkedin'>
                        <Icon name='linkedin' /> LinkedIn
                    </Button>
                    <Button color='black'>
                        <Icon name='github' /> Github
                    </Button>

                </Button.Group>
            </Grid.Row>
        </Grid>
    </Container>
);

export default Footer;