import React, { Component } from 'react';

import {
    Container,
    Image
} from 'semantic-ui-react';

const ProjectImage = ({ src }) => {
    return (
        <Container fluid>
            <Image src={src} />
        </Container>
    );
}

export default ProjectImage;