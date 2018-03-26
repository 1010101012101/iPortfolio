import React, { Component } from 'react';
import {
    Responsive,
    Container,
    Header,
    Icon,
    Image
} from 'semantic-ui-react';

class SkillItem extends Component {
    render() {
        const { header, icon } = this.props;

        return (
            <Container fluid>
                <Responsive {...Responsive.onlyComputer}>
                    <Header size='small' icon>
                        <i className={icon} style={{ fontSize: '5em' }}></i>
                        <Header.Content>
                            {this.props.header}
                        </Header.Content>
                    </Header>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Header size='tiny' icon>
                        <i className={icon} style={{ fontSize: '4em' }}></i>
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