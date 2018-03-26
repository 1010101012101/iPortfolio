import React, { Component } from 'react';
import {
    Responsive,
    Container,
    Header,
    Icon,
    Grid
} from 'semantic-ui-react';
import SkillItem from './SkillItem';
class SkillGroup extends Component {
    renderItems = (skillsItem) =>
        skillsItem.map((item, index) => (
            <Grid.Column key={index}>
                <SkillItem header={item.name} icon={item.icon} />
            </Grid.Column>
        ));
    render() {
        const { skills, header, content } = this.props;
        const firstRowItems = this.renderItems(skills.slice(0, Math.round(skills.length / 2)));
        const secondRowItems = this.renderItems(skills.slice(Math.round(skills.length / 2), skills.length));
        return (
            <Container fluid>
                <Responsive {...Responsive.onlyComputer}>
                    <Header color='blue' size='large' textAlign='center'>
                        <Header.Content style={{ marginBottom: '2%' }}>
                            {this.props.header}
                        </Header.Content>
                        <Header.Subheader style={{ marginTop: '2%', marginBottom: '5%' }}>
                            {this.props.content}
                        </Header.Subheader>
                    </Header>
                    <Container>
                        <Grid columns={3} textAlign='center'>
                            <Grid.Row>
                                {firstRowItems}
                            </Grid.Row>

                            <Grid.Row>
                                {secondRowItems}
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Responsive>


                <Responsive {...Responsive.onlyMobile}>
                    <Header color='blue' size='medium' textAlign='center'>
                        <Header.Content style={{ marginBottom: '2%' }}>
                            {this.props.header}
                        </Header.Content>
                        <Header.Subheader style={{ marginTop: '2%', marginBottom: '5%' }}>
                            {this.props.content}
                        </Header.Subheader>
                    </Header>
                    <Container>
                        <Grid columns={3} textAlign='center'>
                            <Grid.Row>
                                {firstRowItems}
                            </Grid.Row>

                            <Grid.Row>
                                {secondRowItems}
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Responsive>
            </Container>
        );
    }
}

export default SkillGroup;