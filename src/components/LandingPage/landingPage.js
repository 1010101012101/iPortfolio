import React, { Component, PropTypes } from 'react';
import {
    Container,
    Grid
} from 'semantic-ui-react';
import Background from './background';
import Header from './mainHeader';
import NextButton from './nextPageButton';
import ReponsiveContainer from './responsiveContainer';
class LandingPage extends Component {
    render() {
        return (
            <ReponsiveContainer>
                <Background />
            </ReponsiveContainer>
        );
    }
}

export default LandingPage;