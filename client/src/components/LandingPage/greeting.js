import React from 'react';
import PropTypes from 'prop-types';
import { Header, Button, Icon } from 'semantic-ui-react';


const Greeting = ({ mobile, header, linkedinLink, githubLink }) => (
    <Header inverted size='huge' style={{ fontSize: mobile ? '1.7em' : '3.5em' }}>
        {header}
        <Header.Subheader>
            <Button.Group size={mobile ? 'mini' : 'tiny'}>
                <Button as='a' href={linkedinLink} target='_blank' className='hvr-float-shadow' color='linkedin'>
                    <Icon link name='linkedin' /> LinkedIn
                </Button>
                <Button as='a' href={githubLink} target='_blank' className='hvr-float-shadow' color='black'>
                    <Icon name='github' /> Github
                </Button>
            </Button.Group>
        </Header.Subheader>
    </Header>
);

export default Greeting;

Greeting.propTypes = {
    mobile: PropTypes.bool,
    header: PropTypes.string,
    linkedinLink: PropTypes.string,
    githubLink: PropTypes.string
};