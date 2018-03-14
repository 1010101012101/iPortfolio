import React from 'react';
import LandingPage from '../LandingPage/landingPage';
import About from '../About/about';
import Contact from '../Contact/contact';
import Project from '../Project/project';
import Resume from '../Resume/resume';
import Skill from '../Skill/skill';
import { Switch, Route } from 'react-router-dom';

const Router = () =>
    <Switch>
        <Route exact path='/' component={LandingPage}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/project' component={Project}></Route>
        <Route exact path='/resume' component={Resume}></Route>
        <Route exact path='/skill' component={Skill}></Route>
    </Switch>


export default Router;