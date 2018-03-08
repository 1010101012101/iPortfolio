import React, { Component } from 'react';

import {
    Button,
    Menu,
    Container
} from 'semantic-ui-react';
class NavBar extends Component {
    render() {
        return (
            <Menu
                fixed='top'
                inverted={true}
                size='large'>
                <Container>
                    <Menu.Menu inverted position='right'>
                        <Menu.Item as='a' active>Home</Menu.Item>
                        <Menu.Item as='a'>Work</Menu.Item>
                        <Menu.Item as='a'>Company</Menu.Item>
                        <Menu.Item as='a'>Careers</Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>

        );
    }
}

export default NavBar;