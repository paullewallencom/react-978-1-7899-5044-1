import React from 'react';
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link> | <Link to="/form">Form</Link>
  </nav>
);

const Home = () => <h1>Home</h1>;
class Form extends React.Component {
  state = { isBlocking: false };

  handleInput = () => {
    this.setState({ isBlocking: true });
  };

  render() {
    return (
      <div>
        <h1>Form</h1>

        <form>
          <Prompt
            when={this.state.isBlocking}
            message="Lose unsaved changes?"
          />

          <input onInput={this.handleInput} />
        </form>
      </div>
    );
  }
}

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" component={Home} />
      <Route exact path="/form" component={Form} />
    </div>
  </Router>
);

export default App;
