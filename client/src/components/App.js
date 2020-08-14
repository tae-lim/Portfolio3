import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "@babel/polyfill";

import Sidebar from './Sidebar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';

const App = () => {

  React.useEffect(() => {
    injectScript('https://www.goat1000.com/tagcanvas.js');
  });

  const injectScript = url => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
  }

  return (
    <Router>
      <div className="main-container">
        <Sidebar />
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/skills" component={Skills}></Route>
        <Route path="/work" component={Work}></Route>
        <Route path="/contact" component={Contact}></Route>
      </div>
    </Router>
  )
}

export default App;