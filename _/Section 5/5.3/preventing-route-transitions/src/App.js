import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PostForm from './components/PostForm';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Add Post</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
        <Route path="/" exact component={PostForm} />
        <Route path="/about" render={() => <h3>About</h3>} />
        <Route path="/contact" render={() => <h3>Contact</h3>} />
        <Route path="/posts" render={() => <h3>Posts List</h3>} />
      </div>
    </Router>
  );
}

export default App;
