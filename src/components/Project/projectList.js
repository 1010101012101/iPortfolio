import React, { Component } from 'react';

import {
    Container,
    Header
} from 'semantic-ui-react';

import ProjectItem from './projectItem';
class ProjectList extends Component {
    render() {
        return (
            <Container fluid style={{ marginTop: '10%' }}>
                <Header color='red' size='huge' textAlign='center'>
                    <Header.Content>
                        My Projects
                </Header.Content>
                </Header>
                <ProjectItem position='left' />
                <ProjectItem position='right' />
                <ProjectItem position='left' />

            </Container>
        );
    }
}

export default ProjectList;