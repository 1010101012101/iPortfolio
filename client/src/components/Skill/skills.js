import React, {Component} from 'react';
import {Container, Grid} from 'semantic-ui-react';
import styled from 'styled-components';

import Text from '../../commons/Text';
import SkillGroup from './skillGroup';
import Heading from './heading';
import MobileContext from '../Context/mobileContext';

const Wrapper = styled(Container)`
  margin-top: 10%;
  border-bottom: 2px solid #E0E0E0;
`;

const SkillBoxes = styled(Grid)`
  margin-bottom: 10%;
`;

class Skills extends Component {
    render() {
        const {header, subHeader, skillHeaders, skillContents, skillNames, headerMessage, languages, frameworks, others} = Text.Skill;
        const skills = [languages, frameworks, others];

        const renderSkillGroups = mobile => skills.map((value, index) =>
            <Grid.Column key={index}>
                <SkillGroup
                    skills={skills[index]}
                    header={skillHeaders[index]}
                    content={skillContents[index]}
                    mobile={mobile}/>
            </Grid.Column>);
        return (
            <MobileContext.Consumer>
                {mobile =>
                    <Wrapper fluid>
                        <Heading skills={skillNames} headerMessage={headerMessage} header={header} subHeader={subHeader}
                                 mobile={mobile}/>
                        <SkillBoxes centered stackable divided columns={3}>
                            {renderSkillGroups(mobile)}
                        </SkillBoxes>
                    </Wrapper>
                }
            </MobileContext.Consumer>
        );
    }
}

export default Skills;