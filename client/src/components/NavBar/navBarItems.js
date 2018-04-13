import React from 'react';
import { Menu } from 'semantic-ui-react';
import { animateScroll as scroll } from 'react-scroll';


const NavBarItems = () => (
    <React.Fragment>
        <Menu.Item header onClick={() => scroll.scrollToTop()} >HOME</Menu.Item>
        <Menu.Item header href="src/assets/resume.pdf" download="resume.pdf">RESUME</Menu.Item>
        <Menu.Item header onClick={() => scroll.scrollToBottom()}>CONTACT</Menu.Item>
    </React.Fragment>
);

export default NavBarItems;