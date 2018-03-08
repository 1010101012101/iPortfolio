import React, { Component } from 'react';
import {
    Segment,
    Menu
} from 'semantic-ui-react';
import * as styles from './landingPage.less'
import NavBar from '../NavBar/navBar'
import Heading from '../LandingPage/heading';
class LandingPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Segment className={styles.slider} inverted textAlign='center' vertical>
                    <Heading />
                </Segment>
            </div>

        );
    }
}

export default LandingPage;