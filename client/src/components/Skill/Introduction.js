import React from 'react';
import PropTypes from 'prop-types';
import {Header} from 'semantic-ui-react';
import styled from 'styled-components';

const HeaderLine = styled(Header)`
  margin-top: 5%;
`;

const Introduction = ({mobile, headerContent, subContent}) => (
    <HeaderLine color='red' size={mobile ? 'large' : 'huge'} textAlign='center'>
        <Header.Content>
            {headerContent}
        </Header.Content>
        <Header.Subheader>
            {subContent}
        </Header.Subheader>
    </HeaderLine>
);

export default Introduction;

Introduction.propTypes = {
    mobile: PropTypes.bool,
    headerContent: PropTypes.string,
    subContent: PropTypes.string
};