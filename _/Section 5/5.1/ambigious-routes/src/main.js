import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import Navbar from './components/Navbar';
import Compnay from './components/Compnay';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/company" component={Compnay} />
            <Route path="/:user" component={User} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
