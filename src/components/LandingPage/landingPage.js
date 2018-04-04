import React, { Component, PropTypes } from 'react';
import {
    Container,
    Grid
} from 'semantic-ui-react';
import Background from './background';
import Header from './mainHeader';
import NextButton from './nextPageButton';
import MainHeader from './mainHeader'
class LandingPage extends Component {
    render() {
        return (
            <Container fluid>
                <Background />
                <MainHeader />
            </Container>
        );
    }
}

export default LandingPage;