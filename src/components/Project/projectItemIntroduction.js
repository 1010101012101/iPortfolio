import React, { Component } from 'react';
import { Header, Divider } from 'semantic-ui-react';

const ProjectItemIntroduction = ({ heading, subHeading }) => (
    <Header color='red' size='large' textAlign='center'>
        <Header.Content>
            {heading}
        </Header.Content>
        <Divider />
        <Header.Subheader>
            Build tools: {subHeading}
        </Header.Subheader>
    </Header>
);

export default ProjectItemIntroduction;