import 'styling/semantic.less'

import React, { Component } from 'react';

import NavBar from './components/NavBar/navBar';
import LandingPage from './components/LandingPage/landingPage';
import Skill from './components/Skill/skill';
import About from './components/About/about';
import ProjectList from './components/Project/projectList';
import Contact from './components/Contact/contact';
import { Container } from 'semantic-ui-react';
import InView from './components/InView/inView';
import Footer from './components/Footer/footer';

class App extends Component {
  render() {
    return (
      <Container fluid style={{ backgroundColor: '#F5F5F5' }}>
        <NavBar />
        <LandingPage />
        <InView>
          {({ isInView }) =>
            <About visible={isInView} />
          }
        </InView>
        <Skill />
        <ProjectList />
        <Contact />
        <Footer />
      </Container>
    );
  }
}



export default App;