import React, { Component } from 'react';
import {
    Container,
    Segment,
    Menu,
    Grid,
    Icon,
    Image,
    Header,
    Button
} from 'semantic-ui-react';
import * as styles from './landingPage.less'
import NavBar from '../NavBar/navBar';
import Background from './background';
import Heading from './heading';
class LandingPage extends Component {
    render() {
        return (
            <Container fluid>
                <NavBar />
                <Background />
                <Heading />
            </Container >
        );
    }
}

export default LandingPage;