import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header } from 'semantic-ui-react';

const SkillItem = ({ header, icon, mobile }) => (
    <Container fluid>
        <Header size={mobile ? 'small' : 'tiny'} icon>
            <i className={icon} style={{ fontSize: mobile ? '4em' : '5em' }}></i>
            <Header.Content>
                {header}
            </Header.Content>
        </Header>
    </Container>
);


export default SkillItem;

SkillItem.propTypes = {
    header: PropTypes.string,
    icon: PropTypes.string,
    mobile: PropTypes.bool
};