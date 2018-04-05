import React, { Component } from 'react'
import { Responsive } from 'semantic-ui-react';

import MobileContext from '../Context/mobileContext';
import DesktopNavBar from '../NavBar/desktopNavBar';
import MobileNavBar from '../NavBar/mobileNavBar';

const ResponsiveContainer = ({ children }) => (
    <React.Fragment>
        <Responsive {...Responsive.onlyComputer}>
            <MobileContext.Provider value={false}>
                <DesktopNavBar />
                {children}
            </MobileContext.Provider>
        </Responsive>

        <Responsive {...Responsive.onlyMobile} style={{ display: 'table-cell' }}>
            <MobileContext.Provider value={true}>
                {children}
            </MobileContext.Provider>
            <MobileNavBar />
        </Responsive>
    </React.Fragment>
)


export default ResponsiveContainer;
