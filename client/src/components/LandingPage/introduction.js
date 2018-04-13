import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header } from 'semantic-ui-react';

const Introduction = ({ mobile, content }) => (
    <Container style={{ width: mobile ? '100%' : '70%' }}>
        <Header inverted textAlign='center'
            style={{
                fontSize: mobile ? '0.7em' : '1.5em',
                lineHeight: '200%'
            }}>
            {content}
        </Header>
    </Container>
);

export default Introduction;

Introduction.propTypes = {
    mobile: PropTypes.bool,
    content: PropTypes.string
};