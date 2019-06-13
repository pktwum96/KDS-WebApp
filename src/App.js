import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './LandingPage';
import About from './About';
import Gallery from './Gallery';
import Achievements from './Achievements';
import Members from './Members';
import Contact from './Contact';
import Default from './Default';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/home' component={LandingPage}/>
        <Route path='/about' component={About}/>
        <Route path='/gallery' component={Gallery}/>
        <Route path='/achievements' component={Achievements}/>
        <Route path='/members' component={Members}/>
        <Route exact path='/contact' component={Contact}/>
        <Route component={Default}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
