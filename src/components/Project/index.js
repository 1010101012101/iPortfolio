import React, { Component } from 'react';
import { Segment, Container, Header, Grid, Button, Icon, Image } from 'semantic-ui-react';

import NavBar from '../NavBar/navBar';
class Project extends Component {
    render() {
        return (
            <Container>
                <NavBar />
                <Grid relaxed centered>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <Header size='huge' textAlign='center'>
                                <Header.Content>
                                    My Personal Project
                    </Header.Content>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Column width={7}>
                        <Header size='large' textAlign='center'>
                            <Header.Content>
                                Project Name
                            </Header.Content>
                            <Header.Subheader>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </Header.Subheader>
                        </Header>
                        <Segment basic>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </Segment>
                        <Button primary positive>
                            View more..
                        </Button>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Image src='https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/0eaa14d11e8930f5?w=400&h=400' />
                    </Grid.Column>

                </Grid>
            </Container>
        );
    }
}

export default Project;