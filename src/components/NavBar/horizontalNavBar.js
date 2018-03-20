import React, { Component } from 'react';

import {
    Button,
    Menu,
    Container,
    Icon,
    Image
} from 'semantic-ui-react';
import * as styles from './navBar.less';
import { Link, animateScroll as scroll } from 'react-scroll';
class HorizontalNavBar extends Component {
    render() {
        return (
            <Menu borderless
                fixed='top'
                size='massive'
                secondary
                pointing
                fluid
                style={{ position: 'relative', position: 'sticky', backgroundColor: 'white' }}>
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

export default HorizontalNavBar;