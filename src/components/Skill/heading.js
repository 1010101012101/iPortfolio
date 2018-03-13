import React, { Component } from 'react';
import {
    Container,
    Header
} from 'semantic-ui-react';
const Heading = () => (
    <Container fluid>
        <Header size='huge' textAlign='center'
            style={{ fontSize: '3em', marginTop: '8%' }}>
            <Header.Content>
                My Skills
            </Header.Content>
        </Header>
        <Header size='large' textAlign='center'
            style={{
                marginTop: '5%',
                marginBottom: '5%'
            }}>
            Lorem ipsum dolor sit amet
        </Header>
    </Container>
);

export default Heading;