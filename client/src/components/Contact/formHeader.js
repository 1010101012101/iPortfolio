import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
const ContactFormHeader = () => (
    <Header size='huge' inverted textAlign='center'>
        <Header.Content style={{ marginBottom: '5%' }}>
            After all, communication is everything,&nbsp;right?
        </Header.Content>
        <Header.Subheader>
            Just a few questions and I'll get in touch with you ASAP.
        </Header.Subheader>
    </Header>
);

export default ContactFormHeader;