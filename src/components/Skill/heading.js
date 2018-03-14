import React, { Component } from 'react';
import { Divider, Container, Header } from 'semantic-ui-react';
const Heading = () => (
    <Container fluid>
        <Header color='red' size='huge' textAlign='center'
            style={{ fontSize: '3em', marginTop: '5%' }}>
            <Header.Content>
                My Skills
                <Divider />
            </Header.Content>
        </Header>
        <Header color='blue' size='large' textAlign='center'
            style={{
                marginTop: '2%',
                marginBottom: '5%'
            }}>
            Lorem ipsum dolor sit amet
        </Header>
    </Container>
);

export default Heading;