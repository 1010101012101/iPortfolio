import React from 'react';
import PropTypes from 'prop-types';
import { Container, Divider } from 'semantic-ui-react';

const Paragraph = ({ mobile, content }) => (
    <React.Fragment>
        <Container>
            {content}
        </Container>
        {!mobile && <Divider hidden />}
    </React.Fragment>
);

export default Paragraph;

Paragraph.propTypes = {
    mobile: PropTypes.bool,
    content: PropTypes.string
};