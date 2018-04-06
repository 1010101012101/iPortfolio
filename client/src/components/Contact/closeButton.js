import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
const CloseButton = ({ mobile, handleClose }) => (
    <Button onClick={handleClose} size='large' icon circular basic inverted floated='right' style={{ margin: '2%' }}>
        <Icon name='x' />
    </Button>
);

export default CloseButton;