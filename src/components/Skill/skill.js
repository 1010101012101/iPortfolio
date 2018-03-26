import React, { Component } from 'react';
import {
    Responsive,
    Container,
    Header,
    Icon,
    Grid
} from 'semantic-ui-react';
import SkillGroup from './skillGroup';
import Heading from './heading';
class Skill extends Component {
    render() {
        let languages = [{ name: 'C#', icon: 'devicon-csharp-plain colored' }, { name: 'JavaScript', icon: 'devicon-javascript-plain colored' }, { name: 'C++', icon: 'devicon-cplusplus-plain colored' }, { name: 'HTML/CSS', icon: 'devicon-html5-plain colored' }];
        let frameworks = [{ name: 'ASP.NET', icon: 'devicon-dot-net-plain colored' }, { name: 'React', icon: 'devicon-react-original colored' }, { name: 'Node.js', icon: 'devicon-nodejs-plain colored' }, { name: 'Angular', icon: 'devicon-angularjs-plain colored' }, { name: 'Oracle', icon: 'devicon-oracle-original colored' }, { name: 'PostgresSQL', icon: 'devicon-postgresql-plain colored' }];
        let others = [{ name: 'Github', icon: 'devicon-github-plain colored' }, { name: 'Docker', icon: 'devicon-docker-plain colored' }, { name: 'Visual Studio', icon: 'devicon-visualstudio-plain colored' }, { name: 'Webpack', icon: 'devicon-webpack-plain colored' }];
        return (
            <Container fluid style={{ marginTop: '10%', borderBottom: '2px solid #E0E0E0' }}>
                <Responsive {...Responsive.onlyComputer}>
                    <Heading />
                    <Grid centered divided columns={3} style={{ marginBottom: '10%' }}>
                        <Grid.Column>
                            <SkillGroup
                                header="Languages"
                                content="I started with C and C++, migrated to C# soon later and now really interested in JavaScript."
                                skills={languages}
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
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Heading />
                    <Grid centered stackable divided columns={3} style={{ marginBottom: '10%' }}>
                        <Grid.Column>
                            <SkillGroup
                                header="Languages"
                                content="I started with C and C++, migrated to C# soon later and now really interested in JavaScript."
                                skills={languages}
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
                                content="I also know about tools and utilities to make the development process easier."
                                skills={others}
                            />
                        </Grid.Column>
                    </Grid>
                </Responsive>
            </Container>
        );
    }
}

export default Skill;