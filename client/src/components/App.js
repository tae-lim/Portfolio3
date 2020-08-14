import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from './Sidebar';

const App = () => {

  return (
    <Router>
      <div className="main-container">
        <Sidebar />
        <h1>hello</h1>
      </div>
    </Router>
  )
}

export default App;