import React, { Component } from 'react';
import {
    Container,
    Header,
    Icon,
    Grid
} from 'semantic-ui-react';
import NavBar from '../NavBar/navBar';
import Skill from './skill';
class SkillGroup extends Component {
    render() {
        const { header, content } = this.props;
        return (
            <Container fluid>
                <Header size='large' textAlign='center'>
                    <Header.Content>
                        {this.props.header}
                    </Header.Content>
                    <Header.Subheader style={{ marginTop: '2%', marginBottom: '2%' }}>
                        {this.props.content}
                    </Header.Subheader>
                </Header>
                <Container>
                    <Grid columns={2} textAlign='center'>
                        <Grid.Row>
                            <Grid.Column>
                                <Skill header="Account Settings" icon="settings" />
                            </Grid.Column>
                            <Grid.Column>
                                <Skill header="Account Settings" icon="settings" />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column>
                                <Skill header="Account Settings" icon="settings" />
                            </Grid.Column>
                            <Grid.Column>
                                <Skill header="Account Settings" icon="settings" />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Container>
        );
    }
}

export default SkillGroup;