import React, { Component } from 'react';
import { Segment, Header, Container, Grid, Image } from 'semantic-ui-react';
class About extends Component {
    render() {
        return (
            <Container>
                <Header size='large' textAlign='center'>
                    <Header.Content>
                        About me
                    </Header.Content>
                </Header>
                <Grid centered columns={1}>
                    <Grid.Column width={10}>
                        <Image centered src='https://pickaface.net/gallery/avatar/rosetyler52fed54e670fb.png' size='medium' circular />
                        <Segment basic>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}
export default About;