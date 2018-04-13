import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

const SkillGroupHeader = ({ mobile, header, content }) => (
    <Header color='blue' size={mobile ? 'medium' : 'large'} textAlign='center'>
        <Header.Content style={{ marginBottom: '2%' }}>
            {header}
        </Header.Content>
        <Header.Subheader style={{ marginTop: '2%', marginBottom: '5%' }}>
            {content}
        </Header.Subheader>
    </Header>
);

export default SkillGroupHeader;

SkillGroupHeader.propTypes = {
    mobile: PropTypes.bool,
    header: PropTypes.string,
    content: PropTypes.string
};