import React, { Component, PropTypes } from 'react';
import {
    Container,
    Grid
} from 'semantic-ui-react';
import * as styles from './landingPage.less'
import NavBar from '../NavBar/navBar';
import Background from './background';
import Header from './mainHeader';
import NextButton from './nextPageButton';
class LandingPage extends Component {
    static propType = {};
    render() {
        const header = 'Khang Tran';
        const content = 'Lorem ipsum dolor sit amet, cum modus insolens ut, nam detraxit cotidieque et, duo modo facete intellegat cu. Explicari complectitur cu pro, suavitate assueverit ne eam. Per in sint mentitum tincidunt.';
        const buttonHeader = 'Ready for more?!';
        const buttonIcon = 'chevron down';
        return (
            <Container fluid>
                <Background />
                <Grid container>
                    <Grid.Row textAlign='center'
                        style={{
                            marginTop: '15%',
                            fontWeight: 'bold'
                        }}>
                        <Header header={header} content={content} />
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center'
                            style={{
                                marginTop: '10%',
                                fontSize: '1.5em'
                            }}>
                            <NextButton header={buttonHeader} icon={buttonIcon} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default LandingPage;