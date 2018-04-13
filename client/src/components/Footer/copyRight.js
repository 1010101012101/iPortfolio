import React from 'react';
import PropTypes from 'prop-types';
import { Image, Header } from 'semantic-ui-react';

const CopyRight = ({ subHeader, scroll, logoImage, mobile }) => (
    <Header textAlign='center'>
        <Image href="#" style={{ marginBottom: mobile ? '1%' : '5%' }} src={logoImage} size={mobile ? 'medium' : 'huge'} onClick={scroll} />

        <Header.Subheader>
            {subHeader}
        </Header.Subheader>
    </Header>
);

export default CopyRight;

CopyRight.propTypes = {
    scroll: PropTypes.func,
    logoImage: PropTypes.string,
    mobile: PropTypes.bool,
    subHeader: PropTypes.string
};