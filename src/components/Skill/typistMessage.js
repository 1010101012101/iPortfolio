import React, { Component } from 'react';


import { Header } from 'semantic-ui-react';

import Typist from 'react-typist';
class TypistMessage extends Component {
    state = {
        message: ' ',
        typing: true
    };


    onTypingComplete = () => {
        const skills = ['C#', 'C++', 'JavaScript', 'HTML/CSS', 'ASP.NET Core', 'Node.js', 'React', 'Angular', 'ASP.NET MVC 5', 'Oracle', 'SQL Server', 'Entity Framework', 'PostgresSQL', 'WPF', 'MongoDB'];

        let newMessage = skills[Math.floor((Math.random() * skills.length))];

        this.setState({
            message: newMessage
        });
        this.setState({ typing: false }, () => {
            this.setState({ typing: true })
        });
    };

    render() {
        const { message, typing } = this.state;
        const headerMessage = 'I have worked with';
        const { mobile } = this.props;
        return (
            <Header color='blue' size={mobile ? 'medium' : 'huge'} textAlign='center'
                style={{
                    marginTop: mobile ? '5%' : '7%',
                    marginBottom: '5%'
                }}>
                {headerMessage}
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
        );
    }
}

export default TypistMessage;