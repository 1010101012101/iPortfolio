import React, { Component } from 'react';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

import NavBarItems from './navBarItems';
class MobileNavBar extends Component {
    state = { sidebarOpened: false };

    handlePusherClick = () => {
        const { sidebarOpened } = this.state;

        if (sidebarOpened)
            this.setState({ sidebarOpened: false });
    }

    handleToggle = () =>
        this.setState({ sidebarOpened: !this.state.sidebarOpened });

    render() {
        const { sidebarOpened } = this.state;
        return (
            <Sidebar.Pushable style={{ padding: '5px 0 0 5px', position: 'absolute', zIndex: 2, width: '100%' }}>
                <Sidebar as={Menu} animation='overlay' width='thin' inverted vertical visible={sidebarOpened}>
                    <NavBarItems />
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} >
                    <Menu.Item onClick={this.handleToggle}>
                        <Icon size='large' inverted name='sidebar' />
                    </Menu.Item>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}

export default MobileNavBar;