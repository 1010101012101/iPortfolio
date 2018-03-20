import React, { Component, PropTypes } from 'react';
import {
    Container,
    Grid
} from 'semantic-ui-react';
import NavBar from '../NavBar/navBar';
import Background from './background';
import Header from './mainHeader';
import NextButton from './nextPageButton';
class LandingPage extends Component {
    render() {

        return (
            <Container fluid>
                <NavBar />

                <Background />
                <Header />
            </Container>
        );
    }
}

export default LandingPage;