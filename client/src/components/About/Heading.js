import React from 'react';
import PropTypes from 'prop-types';
import {Header} from 'semantic-ui-react';

const Heading = ({mobile, header, subHeader}) => (
    <Header size={mobile ? 'large' : 'huge'} color='red'>
        <Header.Content>
            {header}
        </Header.Content>
        <Header.Subheader>
            {subHeader}
        </Header.Subheader>
    </Header>
);

export default Heading;

Heading.propTypes = {
    mobile: PropTypes.bool,
    header: PropTypes.string,
    subHeader: PropTypes.string
};