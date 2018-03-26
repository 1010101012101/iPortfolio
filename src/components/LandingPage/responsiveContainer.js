import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container } from 'semantic-ui-react';
import DesktopContainer from './desktopContainer';
import MobileContainer from './mobileContainer';

const ResponsiveContainer = ({ children }) => (
    //
    <React.Fragment>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer style={{ display: 'table-row-group' }}>{children}</MobileContainer>
    </React.Fragment>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

export default ResponsiveContainer;
