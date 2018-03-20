import React, { Component } from 'react';
import { Container, Grid, Segment, Header, Button, Icon } from 'semantic-ui-react';

class AboutContent extends Component {
    render() {
        const { content } = this.props;
        return (
            <Container style={{ width: '50%', lineHeight: '30px', fontSize: '18px' }}>
                <Segment size='huge' basic >
                    {content}
                </Segment>
            </Container>

        );
    }
}

export default AboutContent;