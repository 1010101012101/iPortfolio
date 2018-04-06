import React, { Component } from 'react';

import { Segment, Container } from 'semantic-ui-react';

import Content from './content';
import ProjectItemIntroduction from './projectItemIntroduction';
import NavigateButton from './navigateButton';

const Heading = ({ heading, subHeading, content, url }) => {
    return (
        <Container fluid>
            <Segment basic>
                <ProjectItemIntroduction heading={heading} subHeading={subHeading} />
                <Content content={content} />
                <NavigateButton url={url} />
            </Segment>
        </Container>
    );
}

export default Heading;