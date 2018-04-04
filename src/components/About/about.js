import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

import Heading from './heading';
import Content from './content';
import MobileContext from '../Context/mobileContext';
class About extends Component {

    render() {
        const header = 'About me';
        const subHeader = `Let's get to know more about me!.`;
        return (
            <MobileContext.Consumer>
                {mobile =>
                    <Container fluid style={{ borderBottom: '2px solid #E0E0E0' }}>
                        <Grid style={{ marginTop: '5%', marginBottom: '10%' }}>
                            <Grid.Row centered stretched>
                                <Heading mobile={mobile} header={header} subHeader={subHeader} />
                            </Grid.Row>
                            <Grid.Row>
                                <Content />
                            </Grid.Row>
                        </Grid>
                    </Container>
                }
            </MobileContext.Consumer>
        );
    }
}
export default About;