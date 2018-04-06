// import 'styling/semantic.less'

// import React, { Component } from 'react';
// import { Container } from 'semantic-ui-react';
// import { Element, animateScroll as scroll } from 'react-scroll'

// import ReposiveContainer from './components/Containers/responsiveContainer';
// import LandingPage from './components/LandingPage/landingPage';
// import Skills from './components/Skill/skills';
// import About from './components/About/about';
// import ProjectList from './components/Project/projects';
// import Contact from './components/Contact/contact';
// import InView from './components/InView/inView';
// import Footer from './components/Footer/footer';


// class App extends Component {
//   componentDidMount() {
//     scroll.scrollTo(0, {
//       duration: 1500,
//       smooth: "easeInOutQuint"

//     });
//   }
//   render() {
//     return (
//       <ReposiveContainer>
//         <Container fluid style={{ backgroundColor: '#f9f6f3', display: 'inherit' }}>
//           <LandingPage name="landingPage" />
//           <About name="aboutPage" />
//           <Skills />
//           <ProjectList name="projectPage" />
//           <Contact name="contactPage" />
//           <Footer />
//         </Container>
//       </ReposiveContainer>
//     );
//   }
// }



// export default App;

import React, { Component } from 'react';



class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi();
  }

  callApi = () => {
    const response = fetch('/api/hello').then(g => console.log(g));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;