import React, { Component } from 'react';
import { TransitionablePortal, Button, Transition, Segment, Header, Container, Grid, Image } from 'semantic-ui-react';
import NavBar from '../NavBar/navBar';
import Heading from './heading';
import Content from './content';
class About extends Component {
    state = { visible1: true, visible2: false };
    toggleVisibility = () => {
        this.setState({ visible1: !this.state.visible1 });
        this.setState({ visible2: !this.state.visible2 });

    }

    render() {
        const { visible1, visible2 } = this.state;
        return (
            < Container >
                <Button onClick={this.toggleVisibility} />

                <NavBar />
                <Grid centered style={{ marginTop: '5%' }}>

                    <Grid.Row stretched>
                        <Transition onComplete={() => this.setState({ visible1: true })} visible={visible1} animation='horizontal flip' duration={200}>

                            {/* <Transition onClose={() => this.setState({ open: !this.state.open })} open={open} transition={{ animation, duration }}> */}
                            <Grid.Column width={6} verticalAlign='middle' style={{ paddingRight: 0 }}>
                                <Heading />
                            </Grid.Column>
                            {/* </Transition> */}
                        </Transition>

                        <Transition unmountOnHide={true} visible={!visible2} animation='slide right' duration={500}>
                            <Grid.Column verticalAlign='middle' width={8} style={{ paddingLeft: 0 }}>
                                <Content />
                            </Grid.Column>
                        </Transition>
                    </Grid.Row>

                </Grid>;
            </Container >


        );
    }
}
export default About;