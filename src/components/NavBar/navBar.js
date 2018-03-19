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
        const imageSrc = 'https://cdn.dribbble.com/users/1727437/screenshots/3937394/letter_c_1x.jpg';
        return (
            <Menu borderless
                fixed='top'
                size='massive'
                secondary
                pointing
                fluid
                style={{ position: 'relative', position: 'sticky', backgroundColor: 'white' }}>
                <Menu.Item position='left'>
                    <Image src={imageSrc} size='tiny' style={{ position: 'relative' }} circular />
                </Menu.Item>
                <Menu.Menu position='right' style={{ fontWeight: '900' }}>
                    <Menu.Item header href='/'>HOME</Menu.Item>
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