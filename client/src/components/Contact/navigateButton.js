import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

const NavigateButton = ({ handleClose, handleSubmit }) => (
    <Button.Group>
        <Button type='button' className='hvr-grow' size='large' basic positive onClick={handleSubmit} inverted>
            <Icon name='checkmark' /> Submit
        </Button>
        <Button.Or />
        <Button type='button' className='hvr-shrink' size='large' basic negative onClick={handleClose} inverted>
            <Icon name='delete' /> Close
        </Button>
    </Button.Group>
);

export default NavigateButton;

NavigateButton.propTypes = {
    handleClose: PropTypes.func,
    handleSubmit: PropTypes.func
};