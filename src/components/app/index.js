import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Home from '../home';
import About from '../about';
import Header from '../Header';
import Mentor from '../Mentor/Mentor';
import Volunteer from '../Volunteer/Volunteer';
import Donate from '../Donate/Donate';


const App = () => (
  <div>
    <Header />
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/mentoring" component={Mentor} />
      <Route exact path="/volunteer" component={Volunteer} />
      <Route exact path="/donate" component={Donate} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
);

export default App;
