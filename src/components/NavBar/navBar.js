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
            <Menu
                fixed='top'
                size='massive'
                text
                secondary
                pointing>
                <Menu.Menu position='right'>
                    <Menu.Item href='/resume'>Resume</Menu.Item>
                    <Menu.Item href='/project'>Project</Menu.Item>
                    <Menu.Item href='/skill'>Skill</Menu.Item>
                    <Menu.Item href='/about'>About</Menu.Item>
                </Menu.Menu>
            </ Menu>

        );
    }
}

export default NavBar;