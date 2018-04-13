import React from 'react';
import { Menu, Image } from 'semantic-ui-react';

import NavBarItems from './navBarItems';
import logoImage from '../../assets/logo.png';

const DesktopNavBar = () => (
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
            <NavBarItems />
        </Menu.Menu>
    </Menu>
);

export default DesktopNavBar;