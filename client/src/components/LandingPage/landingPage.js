import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Background from './background';
import MainHeader from './mainHeader';
import MobileContext from '../Context/mobileContext';
class LandingPage extends Component {
    render() {
        return (
            <MobileContext.Consumer>
                {mobile =>
                    <Container fluid style={{ display: mobile ? 'inherit' : 'inline-block' }}>
                        <Background />
                        <MainHeader />
                    </Container>
                }
            </MobileContext.Consumer>
        );
    }
}

export default LandingPage;