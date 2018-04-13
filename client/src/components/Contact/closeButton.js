import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

const CloseButton = ({ handleClose }) => (
    <Button onClick={handleClose} size='large' icon circular basic inverted floated='right' style={{ margin: '2%' }}>
        <Icon name='x' />
    </Button>
);

export default CloseButton;

CloseButton.propTypes = {
    handleClose: PropTypes.func
};