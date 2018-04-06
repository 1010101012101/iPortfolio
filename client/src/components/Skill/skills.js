import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import SkillGroup from './skillGroup';
import Heading from './heading';
import MobileContext from '../Context/mobileContext';

class Skills extends Component {
    render() {
        const languages = [{ name: 'C#', icon: 'devicon-csharp-plain colored' }, { name: 'JavaScript', icon: 'devicon-javascript-plain colored' }, { name: 'C++', icon: 'devicon-cplusplus-plain colored' }, { name: 'HTML/CSS', icon: 'devicon-html5-plain colored' }];
        const frameworks = [{ name: 'ASP.NET', icon: 'devicon-dot-net-plain colored' }, { name: 'React', icon: 'devicon-react-original colored' }, { name: 'Node.js', icon: 'devicon-nodejs-plain colored' }, { name: 'Angular', icon: 'devicon-angularjs-plain colored' }, { name: 'Oracle', icon: 'devicon-oracle-original colored' }, { name: 'PostgresSQL', icon: 'devicon-postgresql-plain colored' }];
        const others = [{ name: 'Github', icon: 'devicon-github-plain colored' }, { name: 'Docker', icon: 'devicon-docker-plain colored' }, { name: 'Visual Studio', icon: 'devicon-visualstudio-plain colored' }, { name: 'Webpack', icon: 'devicon-webpack-plain colored' }];
        const headers = [
            'Languages',
            'Frameworks',
            'Others'
        ];
        let skills = new Array();
        skills.push(languages, frameworks, others);
        const contents = [
            'I started with C and C++, migrated to C# soon later and now really interested in JavaScript.',
            'I started with WPF in Desktop application but now working mostly in Web Development.',
            'I also know about tools and utilities to make development process easier.'
        ];
        return (
            <MobileContext.Consumer>
                {mobile =>
                    <Container fluid style={{ marginTop: '10%', borderBottom: '2px solid #E0E0E0' }}>
                        <Heading mobile={mobile} />
                        <Grid centered stackable divided columns={3} style={{ marginBottom: '10%' }}>
                            {skills.map((value, index) =>
                                <Grid.Column key={index}>
                                    <SkillGroup
                                        skills={skills[index]}
                                        header={headers[index]}
                                        content={contents[index]}
                                        mobile={mobile} />
                                </Grid.Column>)}
                        </Grid>
                    </Container>
                }
            </MobileContext.Consumer>
        );
    }
}

export default Skills;