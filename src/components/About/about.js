import React, { Component } from 'react';
import { Divider, Container, Grid } from 'semantic-ui-react';
import NavBar from '../NavBar/navBar';
import Heading from './heading';
import Content from './content';
class About extends Component {
    state = { header: true, content: false }
    componentWillReceiveProps() {
        let { visible } = this.props;

        this.setState({
            header: visible,
            content: !visible
        });
    }
    toggle = () => {
        this.setState({ header: true });
    }
    render() {
        return (
            <Container fluid style={{ borderBottom: '2px solid #E0E0E0' }}>
                <Grid centered style={{ marginTop: '10%', marginBottom: '10%' }}>
                    <Grid.Row stretched>
                        <Heading />
                        <Content />
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}
export default About;