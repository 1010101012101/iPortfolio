import React, { Component } from 'react';

import {
    Segment,
    Container,
    Header,
    Divider,
    Button
} from 'semantic-ui-react';

const Heading = ({ heading, subHeading, content, url }) => {
    return (
        <Container fluid>
            <Segment basic>
                <Header color='red' size='large' textAlign='center'>
                    <Header.Content>
                        {heading}
                    </Header.Content>
                    <Divider />
                    <Header.Subheader>
                        Build tools: {subHeading}
                    </Header.Subheader>
                </Header>
                <Segment textAlign='left' basic size='large' style={{ fontWeight: '300', lineHeight: '130%' }}>
                    {content}
                </Segment>
                <Button as='a' href={url} target='_blank' className="hvr-ripple-out" basic size='large' primary style={{ marginTop: '5%' }}>
                    View more..
                </Button>
            </Segment>
        </Container>
    );
}

export default Heading;