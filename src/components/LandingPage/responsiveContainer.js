import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';
import DesktopContainer from './desktopContainer';
import MobileContainer from './mobileContainer';

const ResponsiveContainer = ({ children }) => (
    <Container fluid>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </Container>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

export default ResponsiveContainer;
