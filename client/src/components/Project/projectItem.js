import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Heading from './heading';
import Image from './projectImage';

class ProjectItem extends Component {
    render() {
        const { mobile, position, info } = this.props;
        const imageSrc = info.imageSrc;
        const headingElement = <Heading url={info.url} heading={info.projectName} subHeading={info.intro} content={info.description} />
        const imageElement = <Image src={imageSrc} />
        return (
            <Container fluid style={{ borderBottom: '2px solid #E0E0E0' }}>
                <Grid
                    container
                    style={{ marginTop: '5%' }}
                    verticalAlign='middle'
                    stackable>
                    <Grid.Row textAlign='center' style={{ marginBottom: '5%' }}>
                        <Grid.Column width={7}>
                            {mobile ?
                                imageElement
                                : position == 'left' ?
                                    headingElement : imageElement}
                        </Grid.Column>

                        <Grid.Column width={2}>
                        </Grid.Column>

                        <Grid.Column width={7}>
                            {mobile ?
                                headingElement
                                : position == 'left' ?
                                    imageElement : headingElement}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default ProjectItem;