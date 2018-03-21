import React, { Component } from 'react';
import {
    Responsive,
    Transition,
    Container,
    Header,
    Divider,
    Grid
} from 'semantic-ui-react';
import InView from '../InView/inView';
import Heading from './heading';
import Image from './projectImage';

class ProjectItem extends Component {
    render() {
        const { position } = this.props;
        const heading = {
            headingName: 'ProjectName',
            subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            content: 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam incididunt ut labore et dolore magna aliqua. Ut enim a'
        }
        const imageSrc = 'https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/0eaa14d11e8930f5?w=400&h=400';
        const headingElement = <Heading heading={heading.headingName} subHeading={heading.subHeading} content={heading.content} />
        const imageElement = <Image src={imageSrc} />
        return (
            <Container fluid style={{ borderBottom: '2px solid #E0E0E0' }}>
                <Responsive {...Responsive.onlyComputer}>
                    <Grid
                        container
                        style={{ marginTop: '5%' }}
                        verticalAlign='middle'>
                        <Grid.Row textAlign='center' style={{ marginBottom: '5%' }}>
                            <Grid.Column width={7} textAlign='center'>
                                {position == 'left' ? headingElement : imageElement}
                            </Grid.Column>

                            <Grid.Column width={2}>

                            </Grid.Column>

                            <Grid.Column width={7}>
                                {position == 'left' ? imageElement : headingElement}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Responsive>

                <Responsive {...Responsive.onlyMobile}>
                    <Grid
                        container
                        style={{ marginTop: '5%' }}
                        verticalAlign='middle'
                        stackable>
                        <Grid.Row textAlign='center' style={{ marginBottom: '5%' }}>
                            <Grid.Column width={7} textAlign='center'>
                                {imageElement}
                            </Grid.Column>

                            <Grid.Column width={2}>

                            </Grid.Column>

                            <Grid.Column width={7}>
                                {headingElement}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Responsive>

            </Container>
        );
    }
}

export default ProjectItem;