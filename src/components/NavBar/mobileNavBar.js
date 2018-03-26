import React, { Component } from 'react';

import {
    Button,
    Menu,
    Container,
    Icon,
    Image
} from 'semantic-ui-react';
import { animateScroll as scroll } from 'react-scroll';


class MobileNavBar extends Component {
    render() {
        return (
            <Sidebar as={Menu} animation='slide along' width='thin' inverted vertical visible={sidebarOpened}>
                <Menu.Item header onClick={() => scroll.scrollToTop()} >HOME</Menu.Item>
                <Menu.Item header onClick={() => scroll.scrollToBottom()}>CONTACT</Menu.Item>
                <Menu.Item header href="src/assets/resume.pdf">RESUME</Menu.Item>
            </Sidebar>
        );
    }
}

export default MobileNavBar;