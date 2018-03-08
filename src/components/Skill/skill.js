import React, { Component } from 'react';
import {
    Container,
    Header,
    Icon,
    Grid
} from 'semantic-ui-react';
class Skill extends Component {
    render() {
        return (
            <Container>
                <Header size='large' textAlign='center'>
                    <Header.Content>
                        My Skills
                </Header.Content>
                </Header>

                <Grid centered divided columns={3}>
                    <Grid.Column>
                        <Header as='h2' icon>
                            <Icon name='lightbulb' />
                            <Header.Content>
                                Ideas
                        </Header.Content>
                            <Header.Subheader>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Header.Subheader>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h2' icon>
                            <Icon name='puzzle' />
                            <Header.Content>Adaptability</Header.Content>
                            <Header.Subheader>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Header.Subheader>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h2' icon>
                            <Icon name='code' />
                            <Header.Content>Code</Header.Content>
                            <Header.Subheader>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Header.Subheader>
                        </Header>

                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default Skill;