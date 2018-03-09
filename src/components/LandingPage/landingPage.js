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
                    <Grid.Row textAlign='center'
                        style={{
                            marginTop: '15%',
                            fontWeight: 'bold',

                        }}>
                        <Segment basic padded='very' size='massive'>
                            <Header size='massive' textAlign='center' style={{ fontSize: '2.5em' }}>
                                Khang Tran
                            </Header>
                            <Segment basic textAlign='center' padded='very' size='huge'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </Segment>
                            <Segment textAlign='center' basic>
                                <Button basic secondary size='huge' >Learn more about me</Button>
                            </Segment>
                        </Segment>

                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center'
                            style={{
                                marginTop: '15%',
                                fontSize: '1.5em'
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