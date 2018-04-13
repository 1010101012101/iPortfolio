import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';

import Heading from './heading';
import Image from './projectImage';

class ProjectItem extends Component {
    componentWillMount() {
        const { info } = this.props;

        this.headingElement = <Heading url={info.url} heading={info.projectName} subHeading={info.intro} content={info.description} />;
        this.imageElement = <Image src={info.imageSrc} />;
    }
    render() {
        const { position, mobile } = this.props;
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
                                this.imageElement
                                : position == 'left' ?
                                    this.headingElement : this.imageElement}
                        </Grid.Column>

                        <Grid.Column width={2}>
                        </Grid.Column>

                        <Grid.Column width={7}>
                            {mobile ?
                                this.headingElement
                                : position == 'left' ?
                                    this.imageElement : this.headingElement}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default ProjectItem;

ProjectItem.propTypes = {
    info: PropTypes.shape({
        projectName: PropTypes.string,
        intro: PropTypes.string,
        description: PropTypes.string,
        imageSrc: PropTypes.object,
        url: PropTypes.string
    }),
    position: PropTypes.oneOf(['left', 'right']),
    mobile: PropTypes.bool
};