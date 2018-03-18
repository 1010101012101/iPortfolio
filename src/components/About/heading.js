import React, { Component } from 'react';
import { Container, Divider, Segment, Header, Image } from 'semantic-ui-react'
class AboutHeading extends Component {
    render() {
        return (

            <Container>
                <Header size='huge' color='red' >
                    <Header.Content>
                        About me
                    <Divider inverted style={{ backgroundColor: '#f44336' }} />
                    </Header.Content>
                </Header>
                <Header size='large'>

                </Header>

            </Container>
        );

    }
}

export default AboutHeading;