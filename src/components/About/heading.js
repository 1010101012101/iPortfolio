import React, { Component } from 'react';
import { Container, Divider, Segment, Header, Image } from 'semantic-ui-react'
class AboutHeading extends Component {
    render() {
        return (
            <Container fluid>
                <Header size='huge' color='red' style={{ fontSize: '30px', fontWeight: '900' }} >
                    <Header.Content>
                        About me
                    </Header.Content>
                    <Header.Subheader>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Header.Subheader>

                </Header>
                <Header size='large'>

                </Header>

            </Container>
        );

    }
}

export default AboutHeading;