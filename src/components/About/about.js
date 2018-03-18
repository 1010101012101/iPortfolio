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

                        <Heading />


                        <Content />

                    </Grid.Row>

                </Grid>

            </Container >
        );
    }
}
export default About;