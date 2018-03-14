import React, { Component } from 'react';
import { TransitionablePortal, Button, Transition, Segment, Header, Container, Grid, Image } from 'semantic-ui-react';
import NavBar from '../NavBar/navBar';
import Heading from './heading';
import Content from './content';
class About extends Component {
    state = { header: true, content: false }
    componentWillReceiveProps() {
        let { visible } = this.props;

        this.setState({
            header: visible,
            content: !visible
        });
    }
    toggle = () => {
        this.setState({ header: true });
    }
    render() {
        let { header, content } = this.state;



        return (
            <Container fluid>
                <Grid centered style={{ marginTop: '13%' }}>
                    <Grid.Row stretched>
                        <Transition
                            visible={header}
                            animation='horizontal flip'
                            duration={200}
                            onComplete={this.toggle}>
                            <Grid.Column width={6} verticalAlign='middle'
                                style={{ paddingRight: 0 }}>
                                <Heading />
                            </Grid.Column>
                        </Transition>
                        <Transition
                            unmountOnHide={true}
                            visible={content}
                            animation='slide right'
                            duration={500}>
                            <Grid.Column verticalAlign='middle' width={8}
                                style={{ paddingLeft: 0 }}>
                                <Content />
                            </Grid.Column>
                        </Transition>
                    </Grid.Row>

                </Grid>

            </Container >
        );
    }
}
export default About;