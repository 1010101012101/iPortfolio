import React, { Component } from 'react';
import {
    Container,
    Header,
    Icon,
    Grid
} from 'semantic-ui-react';
import NavBar from '../NavBar/navBar';
import SkillGroup from './skillGroup';
import Heading from './heading';
class Index extends Component {
    render() {
        return (
            <Container>
                <NavBar />
                <Heading />
                <Grid centered divided columns={3}>
                    <Grid.Column>
                        <SkillGroup
                            header="More Comfortable"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <SkillGroup
                            header="Comfortable"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <SkillGroup
                            header="Less Confortable"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        />
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default Index;