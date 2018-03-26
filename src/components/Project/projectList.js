import React, { Component } from 'react';

import {
    Container,
    Header,
    Transition
} from 'semantic-ui-react';

import ProjectItem from './projectItem';
class ProjectList extends Component {
    render() {
        let infos = [
            {
                projectName: 'OrganicShop',
                intro: 'Angular, Firebase, TypeScript',
                description: 'OrganicShop is a single page application that allows users to buy organic food online.',
                imageSrc: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
                url: 'https://github.com/Khang-Tran/Metro-StudentManagement'
            },
            {
                projectName: 'MusicLovers',
                intro: 'ASP.NET MVC 5, EF Code First, Bootstrap, jQuery, AJAX.',
                description: 'MusicLovers is a multi-page web application that allows logged in users create music events. It also allows users to follow someone and get notifications when that person creates a new event.',
                imageSrc: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
                url: 'https://github.com/Khang-Tran/MusicLovers'
            },
            {
                projectName: 'iShop',
                intro: 'ASP.NET Core Web API, EF Core, Angular, JWT.',
                description: 'iShop is a single page online shopping website that allows logged in or anonymous users to buy things and get shipped to their house.',
                imageSrc: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
                url: 'https://github.com/Khang-Tran/iShop'
            }
        ]
        return (
            <Transition visible={this.props.visible} animation='slide up' duration={500}>

                <Container fluid style={{ marginTop: '10%', marginBottom: '10%' }}>
                    <Header color='red' size='huge' textAlign='center'>
                        <Header.Content>
                            My Projects
                        </Header.Content>
                        <Header.Subheader>
                            Let's learn about what I built!.
                        </Header.Subheader>
                    </Header>
                    <ProjectItem info={infos[0]} position='left' />
                    <ProjectItem info={infos[1]} position='right' />
                    <ProjectItem info={infos[2]} position='left' />

                </Container>
            </Transition>
        );
    }
}

export default ProjectList;