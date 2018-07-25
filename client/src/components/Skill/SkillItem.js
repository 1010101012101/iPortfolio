import React from 'react';
import PropTypes from 'prop-types';
import {Container, Header} from 'semantic-ui-react';
import styled from 'styled-components';

const Icon = styled.i`
  font-size: ${props => props.mobile ? '4em' : '5em'};;
`;
const SkillItem = ({header, icon, mobile}) => (
    <Container fluid>
        <Header size={mobile ? 'small' : 'tiny'} icon>
            <Icon className={icon} mobile={mobile}/>
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