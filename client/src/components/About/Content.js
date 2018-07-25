import React from 'react';
import {Container, Icon, Segment} from 'semantic-ui-react';
import {animateScroll as scroll} from 'react-scroll';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Paragraph from './Paragraph';
import MobileContext from '../Context/mobileContext';

const Header = styled(Container)`
  font-size: ${props => props.mobile ? '1em' : '3em'};
  font-weight: 900;
  text-align: center;
`;

const Wrapper = styled(Container)`
    line-height: ${props => props.mobile ? '190%' : '220%'};
`;

const Content = ({header, paragraphs}) => {
    const renderParagraphs = (paragraphs, mobile) =>
        paragraphs
            .slice(0, paragraphs.length - 1)
            .map((content, index) =>
                <Paragraph key={index} mobile={mobile} content={content}/>);

    const renderEmailIcon = (paragraphs) =>
        <Container>
            {paragraphs[paragraphs.length - 1]}
            &nbsp;<Icon size='large' name='mail' link onClick={() => scroll.scrollToBottom()}/>.
        </Container>;
    return (
        <MobileContext.Consumer>
            {mobile =>
                <Wrapper text>
                    <Header>{header}</Header>
                    <Segment size={mobile ? 'small' : 'big'} basic>
                        {renderParagraphs(paragraphs, mobile)}
                        {renderEmailIcon(paragraphs)}
                    </Segment>
                </Wrapper>
            }
        </MobileContext.Consumer>
    );
};

Content.propTypes = {
    header: PropTypes.string.isRequired,
    paragraphs: PropTypes.array.isRequired
};


export default Content;