import React, { Component } from 'react';
import {
    Responsive,
    Transition,
    TransitionablePortal,
    Form, Input, TextArea, Modal, Segment, Container, Button, Icon, Grid, Header, Divider
} from 'semantic-ui-react';
class Contact extends Component {
    state = { open: false };

    handleOpen = () => this.setState({ open: true });
    handleClose = () => this.setState({ open: false });
    render() {
        return (
            <Container fluid textAlign='center' style={{ marginTop: '5%', borderBottom: '2px solid #E0E0E0' }}>
                <Responsive {...Responsive.onlyComputer}>
                    <Header color='red' size='huge' textAlign='center'
                        style={{ marginTop: '5%' }}>
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
                    <Button positive className='hvr-rectangle-in' style={{ marginBottom: '5%' }} primary basic size='massive' onClick={this.handleOpen}>
                        Get started
                </Button>
                    {/* NOTE: maybe modal get called to close before transition get called so the there is no close animation */}
                    <Transition visible={this.state.open} animation='scale' duration={400}>
                        <Modal
                            open={this.state.open}
                            closeOnRootNodeClick={false}
                            basic
                            size='fullscreen'>
                            <Container fluid style={{ width: '50%', marginTop: '30%' }}>
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
                                                <Button.Group>
                                                    <Button className='hvr-grow' size='large' basic positive onClick={this.handleClose} inverted>
                                                        <Icon name='checkmark' /> Submit
                                                </Button>
                                                    <Button.Or />
                                                    <Button className='hvr-shrink' size='large' basic negative onClick={this.handleClose} inverted>
                                                        <Icon name='delete' /> Close
                                                </Button>
                                                </Button.Group>
                                            </Segment>
                                        </Modal.Actions>
                                    </Grid.Row>
                                </Grid>
                            </Container>
                        </Modal>
                    </Transition>
                </Responsive>



                <Responsive {...Responsive.onlyMobile}>
                    <Header color='red' size='large' textAlign='center'
                        style={{ marginTop: '5%' }}>
                        <Header.Content>
                            Lorem ipsum dolor
                    </Header.Content>
                    </Header>
                    <Header color='blue' size='medium' textAlign='center'
                        style={{
                            marginTop: '2%',
                            marginBottom: '5%'
                        }}>
                        Lorem ipsum dolor sit amet
                </Header>
                    <Button positive className='hvr-rectangle-in' style={{ marginBottom: '5%' }} primary basic size='large' onClick={this.handleOpen}>
                        Get started
                </Button>
                    <TransitionablePortal onClose={this.handleClose} open={this.state.open} transition={{ animation: 'scale', duration: 400 }}>
                        <Modal
                            open={this.state.open}
                            onClose={this.handleClose}
                            closeOnEscape={false}
                            closeOnRootNodeClick={false}
                            basic
                            size='fullscreen' style={{ marginTop: '40%' }}>
                            <Container fluid style={{ width: '50%' }}>
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
                                                <Button.Group>
                                                    <Button className='hvr-grow' size='large' basic positive onClick={this.handleClose} inverted>
                                                        <Icon name='checkmark' /> Submit
                                                </Button>
                                                    <Button.Or />
                                                    <Button className='hvr-shrink' size='large' basic negative onClick={this.handleClose} inverted>
                                                        <Icon name='delete' /> Close
                                                </Button>
                                                </Button.Group>
                                            </Segment>
                                        </Modal.Actions>
                                    </Grid.Row>
                                </Grid>
                            </Container>
                        </Modal>
                    </TransitionablePortal>
                </Responsive>
            </Container >
        );
    }
}
export default Contact;