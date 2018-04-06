import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

const Introduction = ({ mobile, headerContent, subContent }) => (
    <Header color='red' size={mobile ? 'large' : 'huge'} textAlign='center'
        style={{ marginTop: '5%' }}>
        <Header.Content>
            {headerContent}
        </Header.Content>
        <Header.Subheader>
            {subContent}
        </Header.Subheader>
    </Header>
);

export default Introduction;