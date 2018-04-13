import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import Typist from 'react-typist';
class TypistMessage extends Component {
    constructor(props) {
        super(props);
        this.skills = ['C#', 'C++', 'JavaScript', 'HTML/CSS', 'ASP.NET Core', 'Node.js', 'React', 'Angular', 'ASP.NET MVC 5', 'Oracle', 'SQL Server', 'Entity Framework', 'PostgresSQL', 'WPF', 'MongoDB'];
        this.headerMessage = 'I have worked with';
    }
    state = {
        message: ' ',
        typing: true
    };


    onTypingComplete = () => {
        const length = this.skills.length;
        let newMessage = this.skills[Math.floor((Math.random() * length))];
        while (newMessage === this.state.message)
            newMessage = this.skills[Math.floor((Math.random() * length))];

        this.setState({
            message: newMessage
        });
        this.setState({ typing: false }, () => {
            this.setState({ typing: true });
        });
    };
    render() {
        const { message, typing } = this.state;
        const { mobile } = this.props;
        return (
            <Header color='blue' size={mobile ? 'medium' : 'huge'} textAlign='center'
                style={{
                    marginTop: mobile ? '5%' : '7%',
                    marginBottom: '5%'
                }}>
                {this.headerMessage}
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

TypistMessage.propTypes = {
    mobile: PropTypes.bool
};