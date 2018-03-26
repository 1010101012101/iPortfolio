import React, { Component } from 'react';
import {
    Image,
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
            <Container fluid textAlign='center' style={{ borderBottom: '2px solid #E0E0E0' }}>
                <Responsive {...Responsive.onlyComputer}>
                    <Header color='red' size='huge' textAlign='center'>
                        <Header.Content>
                            Contact me
                    </Header.Content>
                    </Header>
                    <Header color='blue' size='large' textAlign='center'
                        style={{
                            marginTop: '2%',
                            marginBottom: '5%'
                        }}>
                        Wanna talk to me? Just click on the button right below
                        <Icon name='angle double down' />
                    </Header>
                    <Button positive className='hvr-rectangle-in' style={{ marginBottom: '5%' }} primary basic size='massive' onClick={this.handleOpen}>
                        Get started
                </Button>
                    {/* NOTE: maybe modal get called to close before transition get called so the there is no close animation */}
                    <TransitionablePortal onClose={this.handleClose} open={this.state.open} transition={{ animation: 'scale', duration: 500 }} >
                        <Container fluid style={{ backgroundColor: 'black', position: 'fixed', top: '0%', height: '100%', zIndex: 1000 }}>
                            <Button onClick={this.handleClose} size='large' icon circular basic inverted floated='right' style={{ margin: '2%' }}>
                                <Icon name='x' />
                            </Button>
                            <Container style={{ width: '50%', marginTop: '10%' }}>

                                <Header size='huge' inverted textAlign='center'>

                                    <Header.Content style={{ marginBottom: '5%' }}>
                                        After all, communication is everything,&nbsp;right?
                                    </Header.Content>
                                    <Header.Subheader>
                                        Just a few questions and I'll get in touch with you ASAP.
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
                        </Container>

                    </TransitionablePortal>
                </Responsive>



                <Responsive {...Responsive.onlyMobile}>
                    <Header color='red' size='large' textAlign='center'
                        style={{ marginTop: '5%' }}>
                        <Header.Content>
                            Contact me
                    </Header.Content>
                    </Header>
                    <Header color='blue' size='small' textAlign='center'
                        style={{
                            marginTop: '2%',
                            marginBottom: '5%'
                        }}>
                        Wanna talk to me? click on the button right below
                        <Icon name='angle double down' />
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
                                    <Header.Content style={{ marginBottom: '5%' }}>
                                        After all, communication is everything,&nbsp;right?
                                    </Header.Content>
                                    <Header.Subheader>
                                        Just a few questions and I'll get in touch with you ASAP.
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