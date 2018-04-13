import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { animateScroll as scroll } from 'react-scroll';

import MobileContext from '../Context/mobileContext';
import CopyRight from './copyRight';
import SocialButton from './socialButton';
import logoImage from '../../assets/logo.png';
class Footer extends Component {
    constructor() {
        super();
        this.footerSubHeader = `Handmade by me - Khang Tran &copy; 2018`;

        this.socialButtons = [
            {
                icon: 'facebook',
                url: `https://www.facebook.com/khangishere`,
                color: 'facebook'
            },
            {
                icon: 'mail',
                url: `mailto:cktran16x2@gmail.com`,
                color: 'google plus'
            },
            {
                icon: 'linkedin',
                url: `https://www.linkedin.com/in/khangtranx/`,
                color: 'linkedin'
            },
            {
                icon: 'github',
                url: `http://github.com/Khang-Tran`,
                color: 'black'
            }
        ];
    }
    scrollToTop = () => scroll.scrollToTop();
    render() {
        return (
            <MobileContext.Consumer>
                {mobile =>
                    <Container fluid >
                        <Grid textAlign='center' style={{ backgroundColor: '#ff7961' }}>
                            <Grid.Row>
                                <CopyRight mobile={mobile} logoImage={logoImage} scroll={this.scrollToTop} />
                            </Grid.Row>
                            <Grid.Row>
                                {this.socialButtons.map((buttonInfo, index) =>
                                    <SocialButton
                                        key={index}
                                        info={buttonInfo} />)}
                            </Grid.Row>
                        </Grid>
                    </Container>}
            </MobileContext.Consumer>
        );
    }
}

export default Footer;