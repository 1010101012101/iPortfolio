import React, { Component } from 'react';
import {
    Container,
    Button
} from 'semantic-ui-react';
class Contact extends Component {
    render() {
        return (
            <Container>
                <Button size='huge' circular color='linkedin' icon='linkedin' />
                <Button size='huge' circular color='google plus' icon='google plus' />
            </Container>
        );
    }
}
export default Contact;