import React, { Component } from 'react';
import { Divider, Container, Header } from 'semantic-ui-react';
import Typist from 'react-typist';
class Heading extends Component {


    state = {
        message: 'this is random message',
        typing: true
    };


    onTypingComplete = () => {
        var skills = ['C#', 'C++', 'Javascript', 'ASP.NET', 'ASP.NET Core', 'Node.js', 'React', 'Angular'];

        var newMessage = skills[Math.floor(Math.random() * skills.length)];

        this.setState({
            message: newMessage
        });
        this.setState({ typing: false }, () => {
            this.setState({ typing: true })
        });
    }
    render() {
        const { message, typing } = this.state;

        return (
            <Container fluid>
                <Header color='red' size='huge' textAlign='center'
                    style={{ marginTop: '5%' }}>
                    <Header.Content>
                        My Skills
                        <Divider />
                    </Header.Content>
                </Header>

                <Header color='blue' as='h2' textAlign='center'
                    style={{
                        marginTop: '2%',
                        marginBottom: '5%'
                    }}>
                    Lorem ipsum dolor&nbsp;
                    <Header.Content>
                        {typing ?
                            <Typist
                                avgTypingSpeed={20}
                                onTypingDone={this.onTypingComplete}>
                                <Typist.Delay ms={250} />
                                <span
                                    style={{ color: 'red', textDecoration: 'underline' }}>
                                    {message}
                                </span>
                                <Typist.Backspace count={message.length} delay={2000} />
                                <Typist.Delay ms={500} />
                            </Typist> : ''}


                    </Header.Content>


                </Header>
            </Container>
        );
    }
}

export default Heading;