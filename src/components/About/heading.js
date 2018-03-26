import React, { Component } from 'react';
import { Responsive, Container, Divider, Segment, Header, Image } from 'semantic-ui-react'
class AboutHeading extends Component {
    render() {
        const { header } = this.props;
        return (
            <Container fluid>
                <Responsive {...Responsive.onlyComputer}>
                    <Header size='huge' color='red' style={{ fontSize: '30px', fontWeight: '900' }} >
                        <Header.Content>
                            {header}
                        </Header.Content>
                        <Header.Subheader>
                            <p>Let's get to know more about me!.</p>
                        </Header.Subheader>

                    </Header>

                </Responsive>

                <Responsive {...Responsive.onlyMobile}>
                    <Header size='large' color='red' style={{ fontWeight: '900' }} >
                        <Header.Content>
                            {header}
                        </Header.Content>
                        <Header.Subheader>
                            <p>Let's get to know more about me!.</p>
                        </Header.Subheader>

                    </Header>

                </Responsive>
            </Container>
        );

    }
}

export default AboutHeading;