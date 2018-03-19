import React, { Component } from 'react';

import {
    Container,
    Segment,
    Header,
    Button,
    Icon
} from 'semantic-ui-react'
const MainHeader = ({ header, content }) => {
    return (
        <Container >
            <Segment textAlign='center' basic padded='very' size='massive'>
                <Header inverted size='huge' style={{ fontSize: '2.5em' }}>
                    {header}
                </Header>

                <Header.Subheader>
                    <Button.Group size='tiny'>
                        <Button color='linkedin'>
                            <Icon name='linkedin' /> LinkedIn
                        </Button>
                        <Button color='black'>
                            <Icon name='github' /> Github
                        </Button>
                    </Button.Group>
                </Header.Subheader>

                <Segment basic textAlign='center' padded='very' size='huge'>
                    <Header inverted size='medium' textAlign='center' >
                        {content}
                    </Header>
                </Segment>
            </Segment>
        </Container>
    );
}

export default MainHeader;