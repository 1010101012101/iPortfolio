import React, { Component } from 'react';
import { Segment, Container, Button, Icon, Grid, Header, Divider } from 'semantic-ui-react';
class Contact extends Component {
    render() {
        return (
            <Container fluid>
                <Header color='red' size='huge' textAlign='center'
                    style={{ fontSize: '3em', marginTop: '5%' }}>
                    <Header.Content>
                        My Skills
                <Divider />
                    </Header.Content>
                </Header>
                <Header color='blue' size='large' textAlign='center'
                    style={{
                        marginTop: '2%',
                        marginBottom: '5%'
                    }}>
                    Lorem ipsum dolor sit amet
        </Header>
                <Grid centered divided columns={3} style={{ width: '30%' }}>
                    <Grid.Row >
                        <Grid.Column>

                            <Button icon>
                                <Icon size='large' name='github' />
                            </Button>
                        </Grid.Column>
                        <Grid.Column>

                        </Grid.Column>
                        <Grid.Column>

                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Container >
        );
    }
}
export default Contact;