import React, { Component } from 'react';
import { Responsive, Divider, Container, Header } from 'semantic-ui-react';
import Typist from 'react-typist';
class Heading extends Component {


    state = {
        message: ' ',
        typing: true
    };


    onTypingComplete = () => {
        let skills = ['C#', 'C++', 'JavaScript', 'HTML/CSS', 'ASP.NET Core', 'Node.js', 'React', 'Angular', 'ASP.NET MVC 5', 'Oracle', 'SQL Server', 'Entity Framework', 'PostgresSQL', 'WPF', 'MongoDB'];

        let newMessage = skills[Math.floor((Math.random() * skills.length))];

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
                <Responsive {...Responsive.onlyComputer}>
                    <Header color='red' size='huge' textAlign='center'
                        style={{ fontSize: '30px', fontWeight: '900' }}>
                        <Header.Content>
                            My Skills
                    </Header.Content>
                        <Header.Subheader>
                            Let's learn more about my expertise!.
                    </Header.Subheader>
                    </Header>


                    <Header color='blue' size='huge' textAlign='center'
                        style={{
                            marginTop: '7%',
                            marginBottom: '5%'
                        }}>
                        I have worked with
                    <Header.Content>
                            {typing ?
                                <Typist
                                    avgTypingSpeed={20}
                                    onTypingDone={this.onTypingComplete}>
                                    <Typist.Delay ms={250} />
                                    &nbsp;
                                    <span
                                        style={{ color: 'red', textDecoration: 'underline' }}>
                                        {message}
                                    </span>
                                    <Typist.Backspace count={message.length} delay={2000} />
                                    <Typist.Delay ms={500} />
                                </Typist> : ''}


                        </Header.Content>


                    </Header>
                </Responsive>

                <Responsive {...Responsive.onlyMobile}>
                    <Header color='red' size='large' textAlign='center'
                        style={{ marginTop: '5%' }}>
                        <Header.Content>
                            My Skills
                    </Header.Content>
                        <Header.Subheader>
                            Let's learn more about my expertise!.
                    </Header.Subheader>
                    </Header>


                    <Header color='blue' size='medium' textAlign='center'
                        style={{
                            marginTop: '2%',
                            marginBottom: '5%'
                        }}>
                        I have worked with
                    <Header.Content>
                            {typing ?
                                <Typist
                                    avgTypingSpeed={20}
                                    onTypingDone={this.onTypingComplete}>
                                    <Typist.Delay ms={250} />
                                    &nbsp;
                                    <span
                                        style={{ color: 'red', textDecoration: 'underline' }}>
                                        {message}
                                    </span>
                                    <Typist.Backspace count={message.length} delay={2000} />
                                    <Typist.Delay ms={500} />
                                </Typist> : ''}


                        </Header.Content>


                    </Header>
                </Responsive>
            </Container>
        );
    }
}

export default Heading;