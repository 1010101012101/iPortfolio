import React, { Component } from 'react';
import { Divider, Segment, Container, Header, Grid, Button, Icon, Image } from 'semantic-ui-react';

import NavBar from '../NavBar/navBar';
class Project extends Component {
    render() {
        return (
            // <Container>
            //    
            //     <Grid columns={2} relaxed centered verticalAlign='center'
            //         style={{
            //             marginTop: '5em'
            //         }}>
            //         <Grid.Column width={7}>
            //             <Grid.Row>

            //             </Grid.Row>
            //             <Grid.Row>


            //             </Grid.Row>
            //             <Grid.Row>

            //             </Button>
            //             </Grid.Row>
            //         </Grid.Column>
            //     <Grid.Column width={5}>
            //         <Image src='https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/0eaa14d11e8930f5?w=400&h=400' />
            //     </Grid.Column>

            //     </Grid>
            <Container style={{ width: '90%' }}>
                <Grid
                    container
                    style={{ marginTop: '5em' }}
                    verticalAlign='middle'>
                    <Grid.Row textAlign='center'>
                        <Grid.Column width={7} textAlign='center'>
                            <Segment basic>
                                <Header size='large' textAlign='center'>
                                    <Header.Content>
                                        Project Name
                                    </Header.Content>
                                    <Divider />
                                </Header>
                                <Segment size='large' basic padded>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                </Segment>
                                <Button basic size='large' secondary positive>
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
                </Grid >
            </Container >

        );
    }
}

export default Project;