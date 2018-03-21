import React, { Component } from 'react';
import { Responsive, Container, Grid, Segment, Header, Button, Icon } from 'semantic-ui-react';

class AboutContent extends Component {
    render() {
        const { content } = this.props;
        return (
            <Container text style={{ lineHeight: '220%' }}>
                <Responsive {...Responsive.onlyComputer}>
                    <Segment size='huge' basic >
                        {content}
                    </Segment>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Segment size='small' basic >
                        {content}
                    </Segment>
                </Responsive>

            </Container>

        );
    }
}

export default AboutContent;