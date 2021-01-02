import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';

// importComponent is a function that returns a promise for a component
function asyncComponent(importComponent) {
  console.log(importComponent);
  return class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Component: null
      };
    }

    async componentDidMount() {
      const { default: Component } = await importComponent();
      console.log(Component);
      this.setState({
        Component: Component
      });
    }

    render() {
      const { Component } = this.state;
      return Component ? <Component {...this.props} /> : null;
    }
  };
}

const Foo = asyncComponent(() => import('./components/Foo'));
const Bar = asyncComponent(() => import('./components/Bar'));

const App = () => (
  <Router>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/foo">Foo</Link>
    </li>
    <li>
      {' '}
      <Link to="/bar">Bar</Link>
    </li>

    <Route path="/" exact component={Home} />
    <Route path="/foo" component={Foo} />
    <Route path="/bar" component={Bar} />
  </Router>
);

export default App;
