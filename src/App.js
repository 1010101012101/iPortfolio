import 'styling/semantic.less'

import React, { Component } from 'react';

import Router from './components/Router/router';
import NavBar from './components/NavBar/navBar';
import LandingPage from './components/LandingPage/landingPage';
import Skill from './components/Skill/skill';
import About from './components/About/about';
import Project from './components/Project/project';
import Contact from './components/Contact/contact';
import { Container } from 'semantic-ui-react';
import InView from './components/InView/inView';
import Footer from './components/Footer/footer';
class App extends Component {
  render() {
    return (
      <Container fluid>
        <NavBar />
        <LandingPage />
        <InView>
          {({ isInView }) =>
            <About visible={isInView} />
          }
        </InView>
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </Container>
    );
  }
}



export default App;