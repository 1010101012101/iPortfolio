import React, { Component } from 'react';

import {
    Button,
    Menu,
    Container,
    Icon,
    Image
} from 'semantic-ui-react';
import * as styles from './navBar.less';
class NavBar extends Component {
    render() {
        return (
            <Menu borderless
                fixed='top'
                size='massive'

                secondary
                pointing fluid
                style={{ position: 'relative' }}>
                <Menu.Menu position='right'>
                    <Menu.Item header href='/resume'>RESUME</Menu.Item>
                    <Menu.Item header href='/project'>PROJECT</Menu.Item>
                    <Menu.Item header href='/skill'>SKILL</Menu.Item>
                    <Menu.Item header href='/about'>ABOUT</Menu.Item>
                </Menu.Menu>
            </Menu>

        );
    }
}

export default NavBar;