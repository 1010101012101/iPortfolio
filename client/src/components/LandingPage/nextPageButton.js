import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button, Icon } from 'semantic-ui-react';

const NextPageButton = ({ mobile, header, icon, scroll }) => (
    <Container textAlign='center' >
        {mobile ?
            <Icon inverted size='big' onClick={scroll} name={icon} />
            : <Button onClick={scroll} size='large' inverted basic animated='vertical' style={{ width: '15%' }}>

                <Button.Content hidden>
                    {header}
                </Button.Content>

                <Button.Content visible>
                    <Icon size='large' name={icon} />
                </Button.Content>
            </Button>
        }
    </Container>
);

export default NextPageButton;

NextPageButton.propTypes = {
    mobile: PropTypes.bool,
    header: PropTypes.string,
    icon: PropTypes.string,
    scroll: PropTypes.func
};