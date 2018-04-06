import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
const SocialButton = ({ icon, url, color }) => (
    <Button icon={icon}
        circular as='a'
        href={url}
        target='_blank'
        className='hvr-wobble-vertical'
        color={color}>
    </Button>
);

export default SocialButton;