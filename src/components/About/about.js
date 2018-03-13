import React, { Component } from 'react';
import { TransitionablePortal, Button, Transition, Segment, Header, Container, Grid, Image } from 'semantic-ui-react';
import NavBar from '../NavBar/navBar';
import Heading from './heading';
import Content from './content';
class About extends Component {
    state = { headingVisibility: true, contentVisibility: false };
    toggleHeadingVisibility = () => {
        this.setState({ headingVisibility: !this.state.headingVisibility });
    }

    toggleContentVisibility = () => {
        this.setState({ contentVisibility: !this.state.contentVisibility });
    }

    render() {
        const { headingVisibility, contentVisibility } = this.state;
        return (
            <Container>
                <NavBar />
                <Grid centered style={{ marginTop: '5%' }}>
                    <Grid.Row stretched>
                        <Transition
                            onComplete={this.toggleHeadingVisibility}
                            visible={headingVisibility}
                            animation='horizontal flip'
                            duration={200}>
                            <Grid.Column width={6} verticalAlign='middle'
                                style={{ paddingRight: 0 }}>
                                <Heading />
                            </Grid.Column>
                        </Transition>
                        <Transition
                            unmountOnHide={true}
                            visible={!contentVisibility}
                            animation='slide right'
                            duration={500}>
                            <Grid.Column verticalAlign='middle' width={8}
                                style={{ paddingLeft: 0 }}>
                                <Content />
                            </Grid.Column>
                        </Transition>
                    </Grid.Row>

                </Grid>
            </Container>
        );
    }
}
export default About;