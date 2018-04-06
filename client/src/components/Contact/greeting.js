import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
const Greeting = ({ header, mobile }) => (
    <Header color='red' size={mobile ? 'large' : 'huge'} textAlign='center'
        style={{ marginTop: '5%' }}>
        <Header.Content>
            {header}
        </Header.Content>
    </Header>
);

export default Greeting;