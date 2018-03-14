import React, { Component } from 'react';
import { Divider, Segment, Container, Header, Grid, Button, Icon, Image } from 'semantic-ui-react';

import NavBar from '../NavBar/navBar';
class Project extends Component {
    render() {
        return (
            <Container fluid style={{ width: '90%', marginTop: '10%' }}>
                <Header color='red' size='huge' textAlign='center'>
                    <Header.Content>
                        My Projects
                <Divider />
                    </Header.Content>
                </Header >
                <Grid
                    container
                    style={{ marginTop: '7%' }}
                    verticalAlign='middle'>
                    <Grid.Row textAlign='center'>
                        <Grid.Column width={7} textAlign='center'>
                            <Segment basic>
                                <Header color='red' size='large' textAlign='center'>
                                    <Header.Content>
                                        Project Name
                                    </Header.Content>
                                    <Divider />
                                    <Header.Subheader>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </Header.Subheader>
                                </Header>
                                <Segment basic size='large'>
                                    <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam incididunt ut labore et dolore magna aliqua. Ut enim a</p>
                                </Segment>
                                <Button basic size='large' primary style={{ marginTop: '5%' }}>
                                    View more..
                                </Button>
                            </Segment>

                        </Grid.Column>

                        <Grid.Column width={2}>

                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Image src='https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/0eaa14d11e8930f5?w=400&h=400' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid
                    container
                    style={{ marginTop: '10%' }}
                    verticalAlign='middle'>
                    <Grid.Row textAlign='center'>
                        <Grid.Column width={7} textAlign='center'>
                            <Segment basic>
                                <Header color='red' size='large' textAlign='center'>
                                    <Header.Content>
                                        Project Name
                                    </Header.Content>
                                    <Divider />
                                    <Header.Subheader>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </Header.Subheader>
                                </Header>
                                <Segment basic size='large'>
                                    <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam incididunt ut labore et dolore magna aliqua. Ut enim a</p>
                                </Segment>
                                <Button basic size='large' primary style={{ marginTop: '5%' }}>
                                    View more..
                                </Button>
                            </Segment>

                        </Grid.Column>

                        <Grid.Column width={2}>

                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Image src='https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/0eaa14d11e8930f5?w=400&h=400' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid
                    container
                    style={{ marginTop: '10%' }}
                    verticalAlign='middle'>
                    <Grid.Row textAlign='center'>
                        <Grid.Column width={7} textAlign='center'>
                            <Segment basic>
                                <Header color='red' size='large' textAlign='center'>
                                    <Header.Content>
                                        Project Name
                                    </Header.Content>
                                    <Divider />
                                    <Header.Subheader>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </Header.Subheader>
                                </Header>
                                <Segment basic size='large'>
                                    <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam incididunt ut labore et dolore magna aliqua. Ut enim a</p>
                                </Segment>
                                <Button basic size='large' primary style={{ marginTop: '5%' }}>
                                    View more..
                                </Button>
                            </Segment>

                        </Grid.Column>

                        <Grid.Column width={2}>

                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Image src='https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/0eaa14d11e8930f5?w=400&h=400' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Grid
                    container
                    style={{ marginTop: '10%' }}
                    verticalAlign='middle'>
                    <Grid.Row textAlign='center'>
                        <Grid.Column width={7} textAlign='center'>
                            <Segment basic>
                                <Header color='red' size='large' textAlign='center'>
                                    <Header.Content>
                                        Project Name
                                    </Header.Content>
                                    <Divider />
                                    <Header.Subheader>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </Header.Subheader>
                                </Header>
                                <Segment basic size='large'>
                                    <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam incididunt ut labore et dolore magna aliqua. Ut enim a</p>
                                </Segment>
                                <Button basic size='large' primary style={{ marginTop: '5%' }}>
                                    View more..
                                </Button>
                            </Segment>

                        </Grid.Column>

                        <Grid.Column width={2}>

                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Image src='https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/0eaa14d11e8930f5?w=400&h=400' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container >

        );
    }
}

export default Project;