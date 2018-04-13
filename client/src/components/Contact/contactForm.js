import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Message, Segment } from 'semantic-ui-react';
import axios from 'axios';

import NavigateButton from './navigateButton';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            error: {
                value: false,
                type: ''
            },
            name: '',
            message: '',
            email: ''
        };

        this.serverUrl = 'http://localhost:5000/contact';

        this.success = {
            header: 'Action Succeeded',
            message: 'Thank you for reaching.. I will contact you ASAP!'
        };

        this.fail = {
            header: 'Action Forbidden',
            message: 'Please fill all the inputs below and make sure email is in right format!'
        };
        this.error = {
            header: 'Action Error',
            message: 'Sorry, please refresh the page and try again!'
        };
    }

    onSubmit = () => {
        if (this.state.name === '' || this.state.message === '' || this.state.email === '' || this.state.email.indexOf('@') === -1)
            this.setState({
                isShow: true,
                error: {
                    value: true,
                    type: 'invalid'
                }
            });
        else {
            this.setState({
                isShow: true,
                error: {
                    value: false,
                    type: ''
                }
            });

            axios.post(this.serverUrl, {
                email: this.state.email,
                message: this.state.message,
                name: this.state.name
            })
                .then(setInterval(this.props.handleClose, 3000))
                .catch(this.setState({
                    isShow: true,
                    error: {
                        value: true,
                        type: 'error'
                    }
                }));
        }

    }

    render() {
        const { handleClose } = this.props;
        const { error, isShow } = this.state;
        return (
            <Form error={error.value}
                success={!error.value}
                inverted>
                <Segment basic >
                    <Message
                        hidden={!isShow}
                        error={error.value} success={!error.value}
                        header={error.value ? error.type === 'invalid' ? this.fail.header : this.error.header : this.success.header}
                        content={error.value ? error.type === 'invalid' ? this.fail.message : this.error.message : this.success.message} />
                </Segment>
                <Segment basic >
                    <Form.Input value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                        required fluid placeholder="Name" />
                </Segment>
                <Segment basic >
                    <Form.Input value={this.state.email} onChange={e => this.setState({ email: e.target.value })}
                        fluid placeholder="Email" />
                </Segment>
                <Segment basic >
                    <Form.TextArea value={this.state.message} onChange={e => this.setState({ message: e.target.value })}
                        placeholder="Message" />
                </Segment>
                <Segment basic >
                    <NavigateButton handleClose={handleClose} handleSubmit={this.onSubmit} />
                </Segment>
            </Form>
        );
    }
}

export default ContactForm;

ContactForm.propTypes = {
    handleClose: PropTypes.func
};