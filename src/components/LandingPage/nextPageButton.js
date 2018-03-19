import React, { Component } from 'react';

import { Container, Button, Icon } from 'semantic-ui-react';

class NextPage extends Component {
    state = { visible: true };
    toggleVisibility = () => { this.setState({ visible: !this.state.visible }) };
    render() {
        const { header, icon } = this.props;
        return (
            <Container style={{ position: 'absolute', bottom: 0 }}>
                <Button size='large' inverted basic animated='vertical' style={{ width: '15%' }}>
                    <Button.Content hidden>
                        {header}
                    </Button.Content>

                    <Button.Content visible>
                        <Icon size='large' name={icon} />
                    </Button.Content>
                </Button>
            </Container>
        );
    }
}

export default NextPage;