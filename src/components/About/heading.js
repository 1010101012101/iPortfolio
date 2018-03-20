import React, { Component } from 'react';
import { Container, Divider, Segment, Header, Image } from 'semantic-ui-react'
class AboutHeading extends Component {
    render() {
        const { header, subheader } = this.props;
        return (
            <Container fluid>
                <Header size='huge' color='red' style={{ fontSize: '30px', fontWeight: '900' }} >
                    <Header.Content>
                        {header}
                    </Header.Content>
                    <Header.Subheader>
                        {subheader}
                    </Header.Subheader>

                </Header>
                <Header size='large'>

                </Header>

            </Container>
        );

    }
}

export default AboutHeading;