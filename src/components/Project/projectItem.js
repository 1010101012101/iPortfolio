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
        const { position, info } = this.props;
        const imageSrc = info.imageSrc;
        const headingElement = <Heading url={info.url} heading={info.projectName} subHeading={info.intro} content={info.description} />
        const imageElement = <Image src={imageSrc} />
        return (
            <Container fluid style={{ borderBottom: '2px solid #E0E0E0' }}>
                <Responsive {...Responsive.onlyComputer}>
                    <Grid
                        container
                        style={{ marginTop: '5%' }}
                        verticalAlign='middle'>
                        <Grid.Row textAlign='center' style={{ marginBottom: '5%' }}>
                            <Grid.Column width={7}>
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