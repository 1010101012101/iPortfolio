import React from 'react';
import PropTypes from 'prop-types';
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
};

export default Heading;

Heading.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string
};