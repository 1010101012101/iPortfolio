import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

const Greeting = ({ header, mobile }) => (
    <Header color='red' size={mobile ? 'large' : 'huge'} textAlign='center'
        style={{ marginTop: '5%' }}>
        <Header.Content>
            {header}
        </Header.Content>
    </Header>
);

export default Greeting;

Greeting.propTypes = {
    header: PropTypes.string,
    mobile: PropTypes.bool
};