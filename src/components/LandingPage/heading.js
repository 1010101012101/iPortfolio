import React, { Component } from 'react';
import {
    Grid,
    Segment,
    Header,
    Button,
    Icon
} from 'semantic-ui-react';
const HomepageHeading = () => (
    <Grid container columns={1}>
        <Grid.Row textAlign='center'
            style={{
                marginTop: '20%',
                fontWeight: 'bold'
            }}>
            <Segment basic padded='very' size='massive'>
                <Header inverted size='massive' textAlign='center' style={{ fontSize: '2.5em' }}>
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
                    marginTop: '12%',
                    fontSize: '1.5em'
                }}>
                <Segment basic size='medium'>
                    <Header inverted size='small'>
                        Ready for more?!
                                    </Header>
                    <Icon inverted size='large' name='chevron down' />
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default HomepageHeading;