import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Container, Grid, Transition } from 'semantic-ui-react';

import MobileContext from '../Context/mobileContext';
import Greeting from './greeting';
import Introduction from './introduction';
import NextPageButton from './nextPageButton';
class MainHeader extends Component {
    state = {
        height: 0,
        scrollTo: 0,
        visible: false
    }

    updateDimensions = () => {
        this.setState({
            height: window.innerHeight,
            scrollTo: window.innerHeight
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions();
        this.setState({ visible: true })
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
        const header = 'Hi, I\'m Khang';
        const linkedinLink = 'https://www.linkedin.com/in/khangtranx/';
        const githubLink = 'http://github.com/Khang-Tran';
        const content = 'A curious, decisive, goal-oriented Web Developer who work hard every day to contribute and change the world.';
        const buttonHeader = 'Ready for more?!';
        const buttonIcon = 'chevron down';
        return (
            <MobileContext.Consumer>
                {mobile =>
                    <Container fluid style={{ height: this.state.height + 5 + 'px', }} >
                        <Grid container>
                            <Transition visible={this.state.visible} animation='fade down' duration={500}>
                                <Grid.Row textAlign='center'
                                    style={{
                                        marginTop: mobile ? '70%' : '30%',
                                        fontWeight: 'bold',
                                        height: mobile ? (this.state.height - 300) + 'px' : (this.state.height - 400) + 'px'
                                    }}>
                                    <Container textAlign='center'>
                                        <Greeting mobile={mobile} header={header} linkedinLink={linkedinLink} githubLink={githubLink} />
                                        <Introduction mobile={mobile} content={content} />
                                    </Container>
                                </Grid.Row>
                            </Transition>
                            <Transition visible={this.state.visible} animation='fly up' duration={1000}>
                                <Grid.Row>
                                    <Grid.Column textAlign='center'
                                        style={{
                                            fontSize: mobile ? '0.5em' : '1.5em'
                                        }}>
                                        <NextPageButton scroll={this.onScrollToIntro} mobile={mobile} header={buttonHeader} icon={buttonIcon} />
                                    </Grid.Column>
                                </Grid.Row>
                            </Transition>
                        </Grid>
                    </Container>
                }
            </MobileContext.Consumer>
        );
    }
}

export default MainHeader;