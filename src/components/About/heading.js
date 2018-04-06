import React, { Component } from 'react';
import { Responsive, Container, Divider, Segment, Header, Image } from 'semantic-ui-react'

const Heading = ({ mobile, header, subHeader }) => (
    <Header size={mobile ? 'large' : 'huge'} color='red'>
        <Header.Content>
            {header}
        </Header.Content>
        <Header.Subheader>
            {subHeader}
        </Header.Subheader>

    </Header>

);


export default Heading;