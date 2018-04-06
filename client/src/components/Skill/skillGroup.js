import React, { Component } from 'react';
import {
    Responsive,
    Container,
    Header,
    Icon,
    Grid
} from 'semantic-ui-react';
import SkillItem from './SkillItem';
import SkillGroupHeader from './skillGroupHeader';
import SkillGroupTable from './skillGroupTable';
class SkillGroup extends Component {
    renderItems = skillsItem =>
        skillsItem.map((item, index) => (
            <Grid.Column key={index}>
                <SkillItem mobile={this.props.mobile} header={item.name} icon={item.icon} />
            </Grid.Column>
        ));
    render() {
        const { skills, header, content, mobile } = this.props;
        const firstRowItems = this.renderItems(skills.slice(0, Math.round(skills.length / 2)));
        const secondRowItems = this.renderItems(skills.slice(Math.round(skills.length / 2), skills.length));

        let itemRows = [];
        itemRows.push(firstRowItems, secondRowItems);
        return (
            <Container fluid>
                <SkillGroupHeader mobile={mobile} content={content} header={header} />
                <SkillGroupTable itemRows={itemRows} />
            </Container>
        );
    }
}

export default SkillGroup;