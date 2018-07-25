import React from 'react';
import PropTypes from 'prop-types';
import {Header} from 'semantic-ui-react';
import styled from 'styled-components';

const HeaderContent = styled(Header.Content)`
  margin-bottom: 2%;
`;

const SubHeader = styled(Header.Subheader)`
  margin-top: 2%;
  margin-bottom: 5%;
`;

const SkillGroupHeader = ({mobile, header, content}) => (
    <Header color='blue' size={mobile ? 'medium' : 'large'} textAlign='center'>
        <HeaderContent>{header}</HeaderContent>
        <SubHeader>{content}</SubHeader>
    </Header>
);

export default SkillGroupHeader;

SkillGroupHeader.propTypes = {
    mobile: PropTypes.bool,
    header: PropTypes.string,
    content: PropTypes.string
};