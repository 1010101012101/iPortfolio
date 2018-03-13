import React, { Component } from 'react';
import {
    Segment,
    Header,
    Image
} from 'semantic-ui-react'
class AboutHeading extends Component {
    render() {
        return (
            <Segment piled size='large'>
                <Header>
                    <Header.Content style={{
                        textDecoration: 'underline',
                        marginBottom: '5%'
                    }}>
                        About me
                </Header.Content>
                </Header>
                <Image avatar size='small' bordered src='https://img00.deviantart.net/2100/i/2015/108/5/5/tony_stark__iron_man_by_mannaz11-d70u4p8.jpg' circular
                    style={{ marginBottom: '50%' }} />

            </Segment>
        );
    }
}

export default AboutHeading;