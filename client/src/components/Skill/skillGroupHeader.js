import React, { Component } from 'react';

import { Header } from 'semantic-ui-react';
const SkillGroupHeader = ({ mobile, header, content }) => (
    <Header color='blue' size={mobile ? 'medium' : 'large'} textAlign='center'>
        <Header.Content style={{ marginBottom: '2%' }}>
            {header}
        </Header.Content>
        <Header.Subheader style={{ marginTop: '2%', marginBottom: '5%' }}>
            {content}
        </Header.Subheader>
    </Header>
);

export default SkillGroupHeader;