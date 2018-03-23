import React, { Component } from 'react';

import {
    Button,
    Menu,
    Container,
    Icon,
    Image
} from 'semantic-ui-react';
import { Link, animateScroll as scroll } from 'react-scroll';

import logoImage from '../../assets/logo.png';


class DesktopNavBar extends Component {
    render() {
        return (
            <Menu borderless
                fixed='top'
                size='massive'
                secondary
                pointing
                fluid
                style={{ position: 'absolute', backgroundColor: 'white' }}>
                <Menu.Item position='left' style={{ position: 'relative' }}>
                    <Image src={logoImage} size='tiny' />
                </Menu.Item>
                <Menu.Menu position='right' style={{ fontWeight: '900' }}>
                    <Menu.Item header onClick={() => scroll.scrollToTop()} >
                        HOME
                    </Menu.Item>
                    <Menu.Item header href='/resume'>RESUME</Menu.Item>
                    <Menu.Item header onClick={() => scroll.scrollToBottom()}>CONTACT</Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default DesktopNavBar;