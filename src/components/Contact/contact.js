import React, { Component } from 'react';
import { Form, Input, TextArea, Modal, Segment, Container, Button, Icon, Grid, Header, Divider } from 'semantic-ui-react';
class Contact extends Component {
    state = { open: false };

    handleOpen = () => this.setState({ open: true });
    handleClose = () => this.setState({ open: false });
    render() {
        return (
            <Container fluid textAlign='center'>
                <Header color='red' size='huge' textAlign='center'
                    style={{ fontSize: '3em', marginTop: '5%' }}>
                    <Header.Content>
                        Lorem ipsum dolor
                    </Header.Content>
                </Header>
                <Header color='blue' size='large' textAlign='center'
                    style={{
                        marginTop: '2%',
                        marginBottom: '5%'
                    }}>
                    Lorem ipsum dolor sit amet
                </Header>
                <Modal
                    trigger={<Button primary positive basic size='massive' onClick={this.handleOpen}>Get started</Button>}
                    open={this.state.open}
                    onClose={this.handleClose}
                    basic
                    size='fullscreen'>
                    <Container style={{ width: '50%', marginTop: '30%' }}>
                        <Header size='huge' inverted textAlign='center'>
                            <Header.Content>
                                Lorem ipsum dolor sit amet
                                    </Header.Content>
                            <Header.Subheader>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    </Header.Subheader>
                        </Header>
                        <Grid textAlign='center' style={{ marginTop: '15%' }}>
                            <Grid.Row verticalAlign='middle'>
                                <Grid.Column>
                                    <Modal.Content>
                                        <Form inverted>
                                            <Segment basic>
                                                <Form.Input fluid placeholder='Name' />
                                            </Segment>
                                            <Segment basic>
                                                <Form.Input fluid placeholder='Email' />
                                            </Segment>
                                            <Segment basic>
                                                <Form.TextArea placeholder='Message' />
                                            </Segment>
                                        </Form>
                                    </Modal.Content>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row textAlign='center'>
                                <Modal.Actions>
                                    <Segment basic padded='very'>
                                        <Button size='large' basic positive onClick={this.handleClose} inverted>
                                            <Icon name='checkmark' /> Submit
                                        </Button>
                                    </Segment>
                                </Modal.Actions>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Modal>
            </Container>
        );
    }
}
export default Contact;