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
class Skill extends Component {
    state = {
        moreComfortableList: [{ name: 'Account Settings1', icon: 'settings' }, { name: 'Account Settings2', icon: 'settings' }, { name: 'Account Settings3', icon: 'settings' }, { name: 'Account Settings4', icon: 'settings' }],
        comfortableList: [{ name: 'Account Settings1', icon: 'settings' }, { name: 'Account Settings2', icon: 'settings' }, { name: 'Account Settings3', icon: 'settings' }, { name: 'Account Settings4', icon: 'settings' }],
        lessComfortableList: [{ name: 'Account Settings1', icon: 'settings' }, { name: 'Account Settings2', icon: 'settings' }, { name: 'Account Settings3', icon: 'settings' }, { name: 'Account Settings4', icon: 'settings' }],
    }
    render() {
        return (
            <Container fluid style={{ marginTop: '10%' }}>
                <Heading />
                <Grid centered divided columns={3}>
                    <Grid.Column>
                        <SkillGroup
                            header="More Comfortable"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            skills={this.state.moreComfortableList}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <SkillGroup
                            header="Comfortable"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            skills={this.state.comfortableList}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <SkillGroup
                            header="Less Confortable"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            skills={this.state.lessComfortableList}
                        />
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default Skill;