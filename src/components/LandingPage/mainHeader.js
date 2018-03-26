import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    Grid,
    Container,
    Segment,
    Header,
    Image,
    Button,
    Icon,
    Transition
} from 'semantic-ui-react';


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
        const content = 'A curious, decisive, goal-oriented Web Developer who work hard every day to contribute and change the world.';
        const buttonHeader = 'Ready for more?!';
        const buttonIcon = 'chevron down';
        let { mobile } = this.props;
        return (
            <Container fluid style={{ display: 'inline-block', height: this.state.height + 5 + 'px', }} >
                <Grid container>
                    <Transition visible={this.state.visible} animation='fade down' duration={500}>
                        <Grid.Row textAlign='center'
                            style={{
                                marginTop: mobile ? '70%' : '30%',
                                fontWeight: 'bold',
                                height: mobile ? (this.state.height - 300) + 'px' : (this.state.height - 400) + 'px'
                            }}>
                            <Container textAlign='center'>
                                <Header inverted size='huge' style={{ fontSize: mobile ? '1.7em' : '3.5em' }}>
                                    {header}
                                    <Header.Subheader>
                                        <Button.Group size={mobile ? 'mini' : 'tiny'}>
                                            <Button as='a' href='https://www.linkedin.com/in/khangtranx/' target='_blank' className='hvr-float-shadow' color='linkedin'>
                                                <Icon link name='linkedin' /> LinkedIn
                                        </Button>
                                            <Button as='a' href='http://github.com/Khang-Tran' target='_blank' className='hvr-float-shadow' color='black'>
                                                <Icon name='github' /> Github
                                        </Button>
                                        </Button.Group>
                                    </Header.Subheader>
                                </Header>


                                <Container style={{ width: mobile ? '100%' : '70%' }}>
                                    <Header inverted textAlign='center'
                                        style={{
                                            fontSize: mobile ? '0.7em' : '1.5em',
                                            lineHeight: '200%'
                                        }} >
                                        {content}

                                    </Header>
                                </Container>
                            </Container>
                        </Grid.Row>
                    </Transition>
                    <Transition visible={this.state.visible} animation='fly up' duration={1000}>
                        <Grid.Row>
                            <Grid.Column textAlign='center'
                                style={{
                                    fontSize: mobile ? '0.5em' : '1.5em'
                                }}>
                                <Container textAlign='center' >

                                    {mobile ?
                                        <Icon inverted size='big' onClick={this.onScrollToIntro} name={buttonIcon} />
                                        :
                                        <Button onClick={this.onScrollToIntro} size='large' inverted basic animated='vertical' style={{ width: '15%' }}>

                                            <Button.Content hidden>
                                                {buttonHeader}
                                            </Button.Content>

                                            <Button.Content visible>
                                                <Icon size='large' name={buttonIcon} />
                                            </Button.Content>
                                        </Button>
                                    }
                                </Container>
                            </Grid.Column>
                        </Grid.Row>
                    </Transition>
                </Grid>

            </Container >
        );
    }
}

export default MainHeader;