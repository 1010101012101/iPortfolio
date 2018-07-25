import React from 'react';
import PropTypes from 'prop-types';
import {Container} from 'semantic-ui-react';

import Introduction from './Introduction';
import TypistMessage from './typistMessage';

const Heading = ({header, subHeader, skills, headerMessage, mobile}) => {
    return (
        <Container fluid>
            <Introduction mobile={mobile} headerContent={header} subContent={subHeader}/>
            <TypistMessage mobile={mobile} skills={skills} headerMessage={headerMessage}/>
        </Container>
    );
};

export default Heading;

Heading.propTypes = {
    mobile: PropTypes.bool
};