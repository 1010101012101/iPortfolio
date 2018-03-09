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
import NavBar from '../NavBar/navBar'
class LandingPage extends Component {
    render() {
        return (
            <div className={styles.mainBackground}>
                <NavBar />
                <Grid container verticalAlign='middle' columns={1}>
                    <Grid.Row textAlign='center' style={{ marginTop: '5%' }}>
                        <Segment padded='very' size='massive'>
                            <Segment textAlign='center' padded='very' size='massive'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </Segment>
                            <Segment textAlign='center' padded='very' size='massive'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </Segment>
                        </Segment>

                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center'
                            style={{
                                marginTop: '10em',
                                fontSize: '1em'
                            }}
                        >
                            <Segment basic size='large'>
                                Ready for more?!

                            </Segment>
                            <Icon size='large' name="chevron down" />


                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </div >
        );
    }
}

export default LandingPage;