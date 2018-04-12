import React, { Component } from "react";
import { Message, Form, Segment } from "semantic-ui-react";
import axios from 'axios';
import NavigateButton from "./navigateButton";

class ContactForm extends Component {
	state = { isShow: false, error: false, name: '', message: '', email: '' };

	onSubmit = () => {
		if (this.state.name === '' || this.state.message === '' || this.state.email === '' || this.state.email.indexOf('@') === -1)
			this.setState({ isShow: true, error: true });



		let postRequest = axios.post('http://localhost:5000/contact',
			{
				email: this.state.email,
				message: this.state.message,
				name: this.state.name
			});
		console.log(postMessage);

		postMessage.then(g => alert('abc'))
			.catch(err => alert(err));
	}

	render() {
		const { handleClose } = this.props;
		const { error, isShow } = this.state;
		return (
			<Form error={error} success={!error} inverted action="http://localhost:5000/contact" method="POST">
				<Segment basic>
					<Message
						hidden={!isShow}
						error
						header='Action Forbidden'
						content='Please fill all the inputs below and make sure email is in right format!'
					/>
				</Segment>
				<Segment basic>
					<Form.Input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} required fluid placeholder="Name" />
				</Segment>
				<Segment basic>
					<Form.Input value={this.state.email} onChange={e => this.setState({ email: e.target.value })} fluid placeholder="Email" />
				</Segment>
				<Segment basic>
					<Form.TextArea value={this.state.message} onChange={e => this.setState({ message: e.target.value })} placeholder="Message" />
				</Segment>
				<Segment basic>
					<NavigateButton handleClose={handleClose} handleSubmit={this.onSubmit} />
				</Segment>
			</Form>
		);
	}
}

export default ContactForm;
