import React, { Component } from 'react';
import {
    Container,
    Header,
    Icon,
    Grid
} from 'semantic-ui-react';
import SkillGroup from './skillGroup';
import Heading from './heading';
import MobileContext from '../Context/mobileContext';

class Skills extends Component {
    render() {
        const languages = [{ name: 'C#', icon: 'devicon-csharp-plain colored' }, { name: 'JavaScript', icon: 'devicon-javascript-plain colored' }, { name: 'C++', icon: 'devicon-cplusplus-plain colored' }, { name: 'HTML/CSS', icon: 'devicon-html5-plain colored' }];
        const frameworks = [{ name: 'ASP.NET', icon: 'devicon-dot-net-plain colored' }, { name: 'React', icon: 'devicon-react-original colored' }, { name: 'Node.js', icon: 'devicon-nodejs-plain colored' }, { name: 'Angular', icon: 'devicon-angularjs-plain colored' }, { name: 'Oracle', icon: 'devicon-oracle-original colored' }, { name: 'PostgresSQL', icon: 'devicon-postgresql-plain colored' }];
        const others = [{ name: 'Github', icon: 'devicon-github-plain colored' }, { name: 'Docker', icon: 'devicon-docker-plain colored' }, { name: 'Visual Studio', icon: 'devicon-visualstudio-plain colored' }, { name: 'Webpack', icon: 'devicon-webpack-plain colored' }];
        return (
            <MobileContext.Consumer>
                {mobile =>
                    <Container fluid style={{ marginTop: '10%', borderBottom: '2px solid #E0E0E0' }}>
                        <Heading mobile={mobile} />
                        <Grid centered stackable divided columns={3} style={{ marginBottom: '10%' }}>
                            <Grid.Column>
                                <SkillGroup
                                    header="Languages"
                                    content="I started with C and C++, migrated to C# soon later and now really interested in JavaScript."
                                    skills={languages}
                                    mobile={mobile}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <SkillGroup
                                    header="Frameworks"
                                    content="I started with WPF in Desktop application but now working mostly in Web Development."
                                    skills={frameworks}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <SkillGroup
                                    header="Others"
                                    content="I also know about tools and utilities to make development process easier."
                                    skills={others}
                                />
                            </Grid.Column>
                        </Grid>
                    </Container>
                }
            </MobileContext.Consumer>
        );
    }
}

export default Skills;