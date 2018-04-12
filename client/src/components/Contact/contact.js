import React, { Component } from 'react';
import { Container, Grid, TransitionablePortal, Segment, Button } from 'semantic-ui-react';
import MobileContext from '../Context/mobileContext';
import Greeting from './greeting';
import Introduction from './introduction';
import StartedButton from './startedButton';
import FormHeader from './formHeader';
import ContactForm from './contactForm';
import NavigateButton from './navigateButton';
import CloseButton from './closeButton';
class Contact extends Component {
    state = { open: false, complete: false };

    handleOpen = () => this.setState({ open: true });
    handleClose = () => this.setState({ open: false });
    onComplete = () => { console.log('abc'); this.setState({ complete: true }) };
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
                                {!this.state.complete ?
                                    <Container style={{ width: '50%', marginTop: '10%' }}>
                                        <FormHeader />
                                        <Grid textAlign='center' style={{ marginTop: '7%' }}>
                                            <Grid.Row verticalAlign='middle'>
                                                <Grid.Column>
                                                    <ContactForm onComplete={this.onComplete} handleClose={this.handleClose} />
                                                </Grid.Column>
                                            </Grid.Row>

                                        </Grid>
                                    </Container> :
                                    <Container>
                                        <Button>abcxyz</Button>
                                    </Container>
                                }
                            </Segment>

                        </TransitionablePortal>
                    </Container>
                }
            </MobileContext.Consumer>
        );
    }
}
export default Contact;