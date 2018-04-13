import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image } from 'semantic-ui-react';

const ProjectImage = ({ src }) => {
    return (
        <Container fluid>
            <Image size='massive' src={src[Object.keys(src)[0]]} />
        </Container>
    );
};

export default ProjectImage;

ProjectImage.propTypes = {
    src: PropTypes.object
};