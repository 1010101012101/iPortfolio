import React, { Component } from 'react';
import {
    Container,
    Header,
    Icon,
    Grid
} from 'semantic-ui-react';
import NavBar from '../NavBar/navBar'
class Skill extends Component {
    render() {
        return (
            <Container>
            <NavBar />
                <Header size='huge' textAlign='center'
                    style={{ fontSize: '3em', marginTop: '8%' }}>
                    <Header.Content>
                        My Skills
                </Header.Content>
                </Header>
                <Header size='large' textAlign='center'
                    style={{
                        marginTop: '5%',
                        marginBottom: '5%'
                    }}>
                    Lorem ipsum dolor sit amet
                </Header>
                <Grid centered divided columns={3}>
                    <Grid.Column>
                        <Header size='large' textAlign='center'>
                            More comfortable
                        <Header.Subheader  style={{marginTop: '2%', marginBottom: '2%'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Header.Subheader>
                            </Header>
                        <Container>
                            <Grid columns={2} textAlign='center'>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Header size='small' icon>
                                            <Icon name='settings' />
                                            Account Settings
                                        </Header>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header size='small' icon>
                                            <Icon name='settings' />
                                            Account Settings
                                        </Header>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column>
                                        <Header size='small' icon>
                                            <Icon name='settings' />
                                            Account Settings
                                        </Header>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header size='small' icon>
                                            <Icon name='settings' />
                                            Account Settings
                                        </Header>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Header size='large' textAlign='center'>
                            Comfortable
                            <Header.Subheader 
                            style={{marginTop: '2%', marginBottom: '2%'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Header.Subheader>
                        </Header>

                        <Container>
                            <Grid columns={2} textAlign='center'>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Header size='small' icon>
                                            <Icon name='settings' />
                                            Account Settings
                                        </Header>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header size='small' icon>
                                            <Icon name='settings' />
                                            Account Settings
                                        </Header>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column>
                                        <Header size='small' icon>
                                            <Icon name='settings' />
                                            Account Settings
                                        </Header>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header size='small' icon>
                                            <Icon name='settings' />
                                            Account Settings
                                        </Header>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Container>
                    </Grid.Column>
                    <Grid.Column>
                        <Header size='large' textAlign='center'>

                            Less comfortable
                            <Header.Subheader  style={{marginTop: '2%', marginBottom: '2%'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Header.Subheader>
                            </Header>
                        <Container>
                            <Grid columns={2} textAlign='center'>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Header size='small' icon>
                                            <Icon name='settings' />
                                            Account Settings
                                        </Header>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header size='small' icon>
                                            <Icon name='settings' />
                                            Account Settings
                                        </Header>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column>
                                        <Header size='small' icon>
                                            <Icon name='settings' />
                                            Account Settings
                                        </Header>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header size='small' icon>
                                            <Icon name='settings' />
                                            Account Settings
                                        </Header>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Container>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default Skill;