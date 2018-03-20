import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    Grid,
    Container,
    Segment,
    Header,
    Button,
    Icon
} from 'semantic-ui-react'

import NextButton from './nextPageButton';
class MainHeader extends Component {
    state = {
        height: 0,
        scrollTo: 0
    }

    updateDimensions = () => {
        this.setState({
            height: window.innerHeight + 'px',
            scrollTo: window.innerHeight
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    onScrollToIntro = () => {
        scroll.scrollTo(this.state.scrollTo, {
            smooth: 'easeInOutQuint',
            delay: 0,
            duration: 1500
        });
    }
    render() {
        const header = 'Khang Tran';
        const content = 'Lorem ipsum dolor sit amet, cum modus insolens ut, nam detraxit cotidieque et, duo modo facete intellegat cu. Explicari complectitur cu pro, suavitate assueverit ne eam. Per in sint mentitum tincidunt.';
        const buttonHeader = 'Ready for more?!';
        const buttonIcon = 'chevron down';
        return (
            <Container fluid style={{ height: this.state.height }} >
                <Grid container>
                    <Grid.Row textAlign='center'
                        style={{
                            marginTop: '10%',
                            fontWeight: 'bold'
                        }}>
                        <Segment textAlign='center' basic padded='very' size='massive'>
                            <Header inverted size='huge' style={{ fontSize: '2.5em' }}>
                                {header}
                            </Header>

                            <Header.Subheader>
                                <Button.Group size='tiny'>
                                    <Button className='hvr-float' color='linkedin'>
                                        <Icon name='linkedin' /> LinkedIn
                        </Button>
                                    <Button className='hvr-float' color='black'>
                                        <Icon name='github' /> Github
                        </Button>
                                </Button.Group>
                            </Header.Subheader>

                            <Segment basic textAlign='center' padded='very' size='huge'>
                                <Header inverted size='medium' textAlign='center' >
                                    {content}
                                </Header>
                            </Segment>
                        </Segment>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center'
                            style={{
                                marginTop: '5%',
                                fontSize: '1.5em'
                            }}>
                            <Container style={{ position: 'absolute', bottom: 0 }}>
                                <Button onClick={this.onScrollToIntro} size='large' inverted basic animated='vertical' style={{ width: '15%' }}>
                                    <Button.Content hidden>
                                        {buttonHeader}
                                    </Button.Content>

                                    <Button.Content visible>
                                        <Icon size='large' name={buttonIcon} />
                                    </Button.Content>
                                </Button>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Container>
        );
    }
}

export default MainHeader;