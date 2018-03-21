import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
import { Link, animateScroll as scroll } from 'react-scroll';
import MainHeading from './mainHeader';
export default class MobileContainer extends Component {
    state = {}

    handlePusherClick = () => {
        const { sidebarOpened } = this.state

        if (sidebarOpened) this.setState({ sidebarOpened: false })
    }

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive {...Responsive.onlyMobile}>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation='slide along' width='thin' inverted vertical visible={sidebarOpened}>
                        <Menu.Item header onClick={() => scroll.scrollToTop()} >HOME</Menu.Item>
                        <Menu.Item header href='/resume'>RESUME</Menu.Item>
                        <Menu.Item header onClick={() => scroll.scrollToBottom()}>CONTACT</Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} >
                        <Menu.Item onClick={this.handleToggle} style={{ padding: '5px 0 0 5px', position: 'absolute', zIndex: 1 }}>
                            <Icon size='large' inverted name='sidebar' />
                        </Menu.Item>
                        {children}
                        <MainHeading mobile />

                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

