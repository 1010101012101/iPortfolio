import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';
const Introduction = ({ content, mobile }) => (
    <Header color='blue' size={mobile ? 'small' : 'large'} textAlign='center'
        style={{
            marginTop: '2%',
            marginBottom: '5%'
        }}>
        {content}
        <Icon name='angle double down' />
    </Header>
);

export default Introduction;