import React, { Component } from 'react';

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