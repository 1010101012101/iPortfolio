import React, { Component } from 'react';

import { Container, Image } from 'semantic-ui-react';

const ProjectImage = ({ src }) => {
    return (
        <Container fluid>
            <Image size='massive' src={src[Object.keys(src)[0]]} />
        </Container>
    );
}

export default ProjectImage;