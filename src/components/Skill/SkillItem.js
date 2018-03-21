import React, { Component } from 'react';
import {
    Responsive,
    Container,
    Header,
    Icon
} from 'semantic-ui-react';

class SkillItem extends Component {
    render() {
        const { header, icon } = this.props;

        return (
            <Container fluid>
                <Responsive {...Responsive.onlyComputer}>
                    <Header size='small' icon>
                        <Icon name={this.props.icon} />
                        <Header.Content>
                            {this.props.header}
                        </Header.Content>
                    </Header>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Header size='tiny' icon>
                        <Icon name={this.props.icon} />
                        <Header.Content>
                            {this.props.header}
                        </Header.Content>
                    </Header>
                </Responsive>
            </Container>
        );
    }
}

export default SkillItem;