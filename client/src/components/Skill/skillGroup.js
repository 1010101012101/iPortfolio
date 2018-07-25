import React, {Component} from 'react';
import {Container, Grid} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import SkillItem from './SkillItem';
import SkillGroupHeader from './skillGroupHeader';
import SkillGroupTable from './skillGroupTable';

class SkillGroup extends Component {
    renderItems = skillsItem =>
        skillsItem.map((item, index) => (
            <Grid.Column key={index}>
                <SkillItem mobile={this.props.mobile} header={item.name} icon={item.icon}/>
            </Grid.Column>
        ));

    componentWillMount() {
        const {skills} = this.props;
        const firstRowItems = this.renderItems(skills.slice(0, Math.round(skills.length / 2)));
        const secondRowItems = this.renderItems(skills.slice(Math.round(skills.length / 2), skills.length));

        this.itemRows = [firstRowItems, secondRowItems];
    };

    render() {
        const {header, content, mobile} = this.props;

        return (
            <Container fluid>
                <SkillGroupHeader mobile={mobile} content={content} header={header}/>
                <SkillGroupTable itemRows={this.itemRows}/>
            </Container>
        );
    }
}

export default SkillGroup;

SkillGroup.propTypes = {
    header: PropTypes.string,
    content: PropTypes.string,
    mobile: PropTypes.bool,
    skills: PropTypes.array
};