import React from 'react';
import {Container, Grid} from 'semantic-ui-react';
import styled from 'styled-components';

import Heading from './Heading';
import Content from './Content';
import MobileContext from '../Context/mobileContext';
import Text from '../../commons/Text';

const Wrapper = styled(Container)`
  border-bottom: 2px solid #E0E0E0;
  margin-top: 5%;
`;


const AboutPage = () => {
    const {header, subHeader, contentHeader, contentParagraphs} = Text.About;
    return (
        <MobileContext.Consumer>
            {mobile =>
                <Wrapper fluid>
                    <Grid>
                        <Grid.Row centered stretched>
                            <Heading mobile={mobile} header={header} subHeader={subHeader}/>
                        </Grid.Row>
                        <Grid.Row>
                            <Content header={contentHeader} paragraphs={contentParagraphs}/>
                        </Grid.Row>
                    </Grid>
                </Wrapper>
            }
        </MobileContext.Consumer>
    );
};
export default AboutPage;