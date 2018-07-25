import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Header} from 'semantic-ui-react';

import Typist from 'react-typist';

class TypistMessage extends Component {
    state = {
        message: ' ',
        typing: true
    };


    onTypingComplete = () => {
        const {skills} = this.props;
        const length = skills.length;
        let newMessage = skills[Math.floor((Math.random() * length))];
        while (newMessage === this.state.message)
            newMessage = skills[Math.floor((Math.random() * length))];

        this.setState({
            message: newMessage
        });
        this.setState({typing: false}, () => {
            this.setState({typing: true});
        });
    };

    render() {
        const {message, typing} = this.state;
        const {mobile, headerMessage} = this.props;
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
                            <Typist.Delay ms={250}/>
                            &nbsp;
                            <span
                                style={{color: 'red', textDecoration: 'underline'}}>
                                {message}
                            </span>
                            <Typist.Backspace count={message.length} delay={2000}/>
                            <Typist.Delay ms={500}/>
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