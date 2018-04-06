import React, { Component } from 'react';

import { Header } from 'semantic-ui-react';

const Introduction = ({ header, subHeader }) => (
    <Header color='red' size='huge' textAlign='center'>
        <Header.Content>
            {header}
        </Header.Content>
        <Header.Subheader>
            {subHeader}
        </Header.Subheader>
    </Header>
);

export default Introduction;