import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

const Introduction = ({ header, subHeader }) => (
    <Header color='red' size='huge' textAlign='center'>
        <Header.Content>
            {header}
        </Header.Content>
        <Header.Subheader>
            {subHeader}
        </Header.Subheader>
    </Header>
);

export default Introduction;

Introduction.propTypes = {
    header: PropTypes.string,
    subHeader: PropTypes.string
};