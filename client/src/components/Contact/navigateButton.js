import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
const NavigateButton = ({ handleClose }) => (
    <Button.Group>
        <Button className='hvr-grow' size='large' basic positive onClick={handleClose} inverted>
            <Icon name='checkmark' /> Submit
        </Button>
        <Button.Or />
        <Button className='hvr-shrink' size='large' basic negative onClick={handleClose} inverted>
            <Icon name='delete' /> Close
        </Button>
    </Button.Group>
);

export default NavigateButton;