import React, { Component } from 'react';
import { Segment, Header, Container, Grid, Image } from 'semantic-ui-react';
class About extends Component {
    render() {
        return (
            <Container style={{ width: '80%' }}>
                <Header size='huge' textAlign='center'
                    style={{
                        marginTop: '5%',
                        marginBottom: '10%',
                        fontSize: '2.5em'

                    }}>
                    About me
                </Header>
                <Grid centered columns={2}>
                    <Grid.Row>
                        <Grid.Column width={7} verticalAlign='top'>
                            <Image avatar size='medium' bordered src='https://img00.deviantart.net/2100/i/2015/108/5/5/tony_stark__iron_man_by_mannaz11-d70u4p8.jpg' circular />
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={9}>
                            <Segment padded='very' size='huge'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Container >


        );
    }
}
export default About;