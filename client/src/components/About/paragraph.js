import React, { Component } from 'react';

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