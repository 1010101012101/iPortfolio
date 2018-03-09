import React, { Component } from 'react';
import {
    Container,
    Header,
    Icon,
    Button
} from 'semantic-ui-react';
const HomepageHeading = () => (
    <Container text>
        <Header
            as='h1'
            content='Imagine-a-Company'
            inverted
            style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '3em',
            }}
        />
        <Header
            as='h2'
            content='Do whatever you want when you want to.'
            inverted
            style={{
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginTop: '1.5em',
            }}
        />
        <Button primary size='huge'>
            Get Started
        <Icon name='right arrow' />
        </Button>
    </Container>
)

export default HomepageHeading;