import React, { Component } from 'react';

import {
    Container,
    Header,
    Transition
} from 'semantic-ui-react';

import ProjectItem from './projectItem';
class ProjectList extends Component {
    render() {
        return (
            <Transition visible={this.props.visible} animation='slide up' duration={500}>

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
            </Transition>
        );
    }
}

export default ProjectList;