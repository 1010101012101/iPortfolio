import React, { Component } from 'react';

import {
    Segment,
    Container,
    Header,
    Divider,
    Button
} from 'semantic-ui-react';
const Heading = ({ heading, subHeading, content }) => {
    return (
        <Container fluid>
            <Segment basic>
                <Header color='red' size='large' textAlign='center'>
                    <Header.Content>
                        {heading}
                    </Header.Content>
                    <Divider />
                    <Header.Subheader>
                        {subHeading}
                    </Header.Subheader>
                </Header>
                <Segment basic size='large'>
                    {content}
                </Segment>
                <Button className="hvr-ripple-out" basic size='large' primary style={{ marginTop: '5%', border: 'none' }}>
                    View more..
                </Button>
            </Segment>
        </Container>
    );
}

export default Heading;