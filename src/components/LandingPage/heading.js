import React, { Component } from 'react';
import { Transition, Grid, Segment, Header, Button, Icon } from 'semantic-ui-react';
class HomepageHeading extends Component {
    state = { visible: true };
    toggleVisibility = () => { this.setState({ visible: !this.state.visible }) };
    render() {
        const { visible } = this.state;
        return (
            <Grid container columns={1}>
                <Grid.Row textAlign='center'
                    style={{
                        marginTop: '15%',
                        fontWeight: 'bold'
                    }}>
                    <Segment basic padded='very' size='massive'>
                        <Header inverted size='huge' textAlign='center' style={{ fontSize: '2.5em' }}>
                            Khang Tran
                            </Header>
                        <Segment basic textAlign='center' padded='very' size='huge'>
                            <Header inverted size='medium' textAlign='center' >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Header>
                        </Segment>
                    </Segment>

                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'
                        style={{
                            marginTop: '5%',
                            fontSize: '1.5em'
                        }}>
                        <Button size='large' inverted basic animated='vertical' style={{ width: '20%' }}>
                            <Button.Content hidden>
                                Ready for more?!
                            </Button.Content>
                            <Button.Content visible>
                                <Icon size='large' name='chevron down' />
                            </Button.Content>
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid >
        );
    }
}

export default HomepageHeading;