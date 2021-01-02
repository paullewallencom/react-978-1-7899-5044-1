import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Main />
      </div>
    </Router>
  );
}

export default App;
