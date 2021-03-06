import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Introduction from './Introduction';
import TypistMessage from './typistMessage';
const Heading = ({ mobile }) => {
    const headerContent = 'My Skills';
    const subContent = `Let's learn more about my expertise!.`;
    return (
        <Container fluid>
            <Introduction mobile={mobile} headerContent={headerContent} subContent={subContent} />
            <TypistMessage mobile={mobile} />
        </Container>
    );
}

export default Heading;