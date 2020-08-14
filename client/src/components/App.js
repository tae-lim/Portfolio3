import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import Home from './Home';

const App = () => {

  return (
    <Router>
      <div className="main-container">
        <Sidebar />
        <Route exact path="/"><Home /></Route>
      </div>
    </Router>
  )
}

export default App;