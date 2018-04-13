import React, { Component } from 'react';
import { Container, Grid, TransitionablePortal, Segment } from 'semantic-ui-react';

import MobileContext from '../Context/mobileContext';
import Greeting from './greeting';
import Introduction from './introduction';
import StartedButton from './startedButton';
import FormHeader from './formHeader';
import ContactForm from './contactForm';
import CloseButton from './closeButton';
class Contact extends Component {
    constructor() {
        super();
        this.state = { open: false };
        this.header = 'Contact me';
        this.content = ' Wanna talk to me? click on the button right below';
        this.formHeader = 'After all, communication is everything, right?';
        this.formSubheader = `Just a few questions and I'll get in touch with you ASAP.`;
    }

    handleOpen = () => this.setState({ open: true });
    handleClose = () => this.setState({ open: false });

    render() {
        return (
            <MobileContext.Consumer>
                {mobile =>
                    <Container fluid textAlign='center' style={{ borderBottom: '2px solid #E0E0E0' }}>
                        <Greeting header={this.header} mobile={mobile} />
                        <Introduction content={this.content} mobile={mobile} />
                        <StartedButton handleOpen={this.handleOpen} />
                        <TransitionablePortal onClose={this.handleClose} open={this.state.open} transition={{ animation: 'scale', duration: 500 }} >
                            <Segment style={{ backgroundColor: '#424242', position: 'fixed', top: '0%', height: '100%', width: '100%' }}>
                                <CloseButton handleClose={this.handleClose} />
                                <Container style={{ width: '50%', marginTop: '10%' }}>
                                    <FormHeader header={this.formHeader} subHeader={this.formSubheader} />
                                    <Grid textAlign='center' style={{ marginTop: '7%' }}>
                                        <Grid.Row verticalAlign='middle'>
                                            <Grid.Column>
                                                <ContactForm handleClose={this.handleClose} />
                                            </Grid.Column>
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