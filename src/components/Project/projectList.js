import React, { Component } from 'react';

import {
    Container,
    Header,
    Transition
} from 'semantic-ui-react';

import ProjectItem from './projectItem';
import iShopImage from '../../assets/iShop.png';
import oShopImage from '../../assets/oShop.png';
import musicLoversImage from '../../assets/musicLovers.png';
class ProjectList extends Component {
    render() {
        let infos = [
            {
                projectName: 'iShop',
                intro: 'ASP.NET Core Web API, EF Core, Angular, JWT.',
                description: 'iShop is a single page online shopping website that allows logged in or anonymous users to buy things and get shipped to their house. It also has admin page for manage products.',
                imageSrc: { iShopImage },
                url: 'https://github.com/Khang-Tran/iShop'
            },
            {
                projectName: 'MusicLovers',
                intro: 'ASP.NET MVC 5, EF Code First, Bootstrap, jQuery, AJAX.',
                description: 'MusicLovers is a multi-page web application that allows logged in users create music events. It also allows users to follow someone and get notifications when that person creates a new event.',
                imageSrc: { musicLoversImage },
                url: 'https://github.com/Khang-Tran/MusicLovers'
            },

            {
                projectName: 'OrganicShop',
                intro: 'Angular, Firebase, TypeScript',
                description: 'OrganicShop is a single page application that allows users to buy organic food online. It also provides administrator role for adding and manage products.',
                imageSrc: { oShopImage },
                url: 'https://github.com/Khang-Tran/Metro-StudentManagement'
            },
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