import React, { Component } from 'react';
import { Container, Grid, TransitionablePortal, Segment } from 'semantic-ui-react';
import MobileContext from '../Context/mobileContext';
import Greeting from './greeting';
import Introduction from './introduction';
import StartedButton from './startedButton';
import FormHeader from './formHeader';
import ContactForm from './contactForm';
import NavigateButton from './navigateButton';
import CloseButton from './closeButton';
class Contact extends Component {
    state = { open: false };

    handleOpen = () => this.setState({ open: true });
    handleClose = () => this.setState({ open: false });
    render() {
        const header = 'Contact me';
        const content = ' Wanna talk to me? click on the button right below';
        return (
            <MobileContext.Consumer>
                {mobile =>
                    <Container fluid textAlign='center' style={{ borderBottom: '2px solid #E0E0E0' }}>
                        <Greeting header={header} mobile={mobile} />
                        <Introduction content={content} mobile={mobile} />
                        <StartedButton handleOpen={this.handleOpen} />
                        <TransitionablePortal onClose={this.handleClose} open={this.state.open} transition={{ animation: 'scale', duration: 500 }} >
                            <Segment style={{ backgroundColor: '#424242', position: 'fixed', top: '0%', height: '100%', width: '100%' }}>
                                <CloseButton handleClose={this.handleClose} />
                                <Container style={{ width: '50%', marginTop: '10%' }}>
                                    <FormHeader />
                                    <Grid textAlign='center' style={{ marginTop: '15%' }}>
                                        <Grid.Row verticalAlign='middle'>
                                            <Grid.Column>
                                                <ContactForm />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row textAlign='center'>
                                            <Segment basic padded='very'>
                                                <NavigateButton handleClose={this.handleClose} />
                                            </Segment>
                                        </Grid.Row>
                                    </Grid>
                                </Container>
                            </Segment>

                        </TransitionablePortal>
                    </Container>
                }
            </MobileContext.Consumer>
        );
    }
}
export default Contact;