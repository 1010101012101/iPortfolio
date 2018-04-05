import 'styling/semantic.less'

import React, { Component } from 'react';
import {
  Transition,
  Menu,
  Container
} from 'semantic-ui-react';
import { Element, animateScroll as scroll } from 'react-scroll'

import ReposiveContainer from './components/Containers/responsiveContainer';
import LandingPage from './components/LandingPage/landingPage';
import Skills from './components/Skill/skills';
import About from './components/About/about';
import ProjectList from './components/Project/projects';
import Contact from './components/Contact/contact';
import InView from './components/InView/inView';
import Footer from './components/Footer/footer';


class App extends Component {
  componentDidMount() {
    scroll.scrollTo(0, {
      duration: 1500,
      smooth: "easeInOutQuint"

    });
  }
  render() {
    return (
      <ReposiveContainer>
        <Container fluid style={{ display: 'table-cell', backgroundColor: '#f9f6f3' }}>
          <LandingPage name="landingPage" />
          <About name="aboutPage" />
          <Skills />
          <ProjectList name="projectPage" />
          <Contact name="contactPage" />
          <Footer />
        </Container>
      </ReposiveContainer>
    );
  }
}



export default App;