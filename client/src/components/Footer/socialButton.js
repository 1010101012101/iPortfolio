import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const SocialButton = ({ info }) => (
    <Button icon={info.icon}
        circular as='a'
        href={info.url}
        target='_blank'
        className='hvr-wobble-vertical'
        color={info.color}>
    </Button>
);

export default SocialButton;

SocialButton.propTypes = {
    info: PropTypes.shape({
        icon: PropTypes.string,
        url: PropTypes.string,
        color: PropTypes.string
    })
};