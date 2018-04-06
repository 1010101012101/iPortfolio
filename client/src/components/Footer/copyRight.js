import React, { Component } from 'react';
import { Image, Header } from 'semantic-ui-react';

const CopyRight = ({ scroll, logoImage, mobile }) => (
    <Header textAlign='center'>
        <Image href="#" style={{ marginBottom: mobile ? '1%' : '5%' }} src={logoImage} size={mobile ? 'medium' : 'huge'} onClick={scroll} />

        <Header.Subheader>
            Handmade by me - Khang Tran &copy; 2018
        </Header.Subheader>
    </Header>
);

export default CopyRight;