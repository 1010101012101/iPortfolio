import React, { Component } from 'react';
import { Responsive, Divider, Container, Header } from 'semantic-ui-react';

import Introduction from './Introduction';
import TypistMessage from './typistMessage';
class Heading extends Component {
    render() {
        const headerContent = 'My Skills';
        const subContent = `Let's learn more about my expertise!.`;

        const { mobile } = this.props;
        return (
            <Container fluid>
                <Introduction mobile={mobile} headerContent={headerContent} subContent={subContent} />
                <TypistMessage mobile={mobile} />
            </Container>
        );
    }
}

export default Heading;