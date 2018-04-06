import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
const StartedButton = ({ handleOpen }) => (
    <Button positive className='hvr-rectangle-in' style={{ marginBottom: '5%' }} primary basic size='massive' onClick={handleOpen}>
        Get started
    </Button>
);

export default StartedButton;