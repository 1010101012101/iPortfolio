import React, { Component } from 'react';
import {Form, Segment} from 'semantic-ui-react';
const ContactForm = () => (
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
);

export default ContactForm;