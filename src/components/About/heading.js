import React, { Component } from 'react';
import { Divider, Segment, Header, Image } from 'semantic-ui-react'
class AboutHeading extends Component {
    render() {
        return (
            <Segment inverted piled size='large' style={{
                backgroundColor: '#80d6ff'
            }}>
                <Header color='red' >
                    <Header.Content>
                        About me
                    <Divider inverted style={{ backgroundColor: '#f44336' }} />
                    </Header.Content>
                </Header>
                <Image avatar size='small' bordered src='https://img00.deviantart.net/2100/i/2015/108/5/5/tony_stark__iron_man_by_mannaz11-d70u4p8.jpg' circular
                    style={{ marginBottom: '50%' }} />

            </Segment >
        );
    }
}

export default AboutHeading;