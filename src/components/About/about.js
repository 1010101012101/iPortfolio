import React, { Component } from 'react';
import { Divider, Container, Grid } from 'semantic-ui-react';
import NavBar from '../NavBar/navBar';
import Heading from './heading';
import Content from './content';
class About extends Component {
    // state = { header: true, content: false }
    // componentWillReceiveProps() {
    //     let { visible } = this.props;

    //     this.setState({
    //         header: visible,
    //         content: !visible
    //     });
    // }
    // toggle = () => {
    //     this.setState({ header: true });
    // }
    render() {
        const header = 'About me';
        const subHeader = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit';
        const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        return (
            <Container fluid style={{ borderBottom: '2px solid #E0E0E0' }}>
                <Grid centered style={{ marginTop: '10%', marginBottom: '10%' }}>
                    <Grid.Row stretched>
                        <Heading header={header} subHeader={subHeader} />
                        <Content content={paragraph} />
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}
export default About;