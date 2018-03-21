import 'styling/semantic.less'

import React, { Component } from 'react';
import {
  Transition,
  Menu,
  Container
} from 'semantic-ui-react';
import LandingPage from './components/LandingPage/landingPage';
import Skill from './components/Skill/skill';
import About from './components/About/about';
import ProjectList from './components/Project/projectList';
import Contact from './components/Contact/contact';
import InView from './components/InView/inView';
import Footer from './components/Footer/footer';
import './App.less'
import { Element, animateScroll as scroll } from 'react-scroll'

class App extends Component {
  componentDidMount() {
    scroll.scrollTo(0, {
      duration: 1500,
      smooth: "easeInOutQuint"

    });
  }
  render() {
    return (
      <Container fluid style={{display: 'table-cell', backgroundColor: '#f9f6f3' }}>
        <LandingPage name="landingPage" />

        <About name="aboutPage" />
        <Skill />
        <ProjectList name="projectPage" />
        <Contact name="contactPage" />
        <Footer />
      </Container>
    );
  }
}



export default App;