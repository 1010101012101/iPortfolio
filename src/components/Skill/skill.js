import React, { Component } from 'react';
import {
    Container,
    Header,
    Icon
} from 'semantic-ui-react';

class Skill extends Component {
    render() {
        const { header, icon } = this.props;

        return (
            <Container fluid>
                <Header size='small' icon>
                    <Icon name={this.props.icon} />
                    <Header.Content>
                        {this.props.header}
                    </Header.Content>
                </Header>
            </Container>
        );
    }
}

export default Skill;