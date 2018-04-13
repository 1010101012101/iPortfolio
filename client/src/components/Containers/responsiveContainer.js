import React from 'react';
import PropTypes from 'prop-types';
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
                <MobileNavBar />
                {children}
            </MobileContext.Provider>
        </Responsive>
    </React.Fragment>
);


export default ResponsiveContainer;

ResponsiveContainer.propTypes = {
    children: PropTypes.node
};