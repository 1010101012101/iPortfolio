import React from 'react';
import { Segment, Container, Header, Button, Icon } from 'semantic-ui-react';

const Heading = () => (
  <Container text>
    <Header
      as='h1'
      content='Lorem ipsum'
      inverted
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
      }}
    />
    <Header
      as='h2'
      content='Lorem ipsum dolor sit amet.'
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    />
    <Container style={{ marginTop: '17em' }}>
      Ready for more?!
      <br />
      <Icon name='chevron down' size='large' inverted />
    </Container>

  </Container >
)

export default Heading;