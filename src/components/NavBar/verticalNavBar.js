import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

class VerticalNavBar extends Component {
  render() {

    return (
      <Menu compact icon='labeled' vertical>
        <Menu.Item onClick={() => scroll.scrollToTop()} name='gamepad'>
          <Icon name='gamepad' />
          Games
        </Menu.Item>

        <Menu.Item name='video camera'>
          <Icon name='video camera' />
          Channels
        </Menu.Item>

        <Menu.Item onClick={() => scroll.scrollToBottom()} name='video play' >
          <Icon name='video play' />
          Videos
        </Menu.Item>
      </Menu >
    )
  }
}

export default VerticalNavBar;