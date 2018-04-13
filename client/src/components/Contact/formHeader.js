import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

const ContactFormHeader = ({ header, subHeader }) => (
    <Header size='huge' inverted textAlign='center'>
        <Header.Content style={{ marginBottom: '5%' }}>
            {header}
        </Header.Content>
        <Header.Subheader>
            {subHeader}
        </Header.Subheader>
    </Header>
);

export default ContactFormHeader;

ContactFormHeader.propTypes = {
    header: PropTypes.string,
    subHeader: PropTypes.string
};