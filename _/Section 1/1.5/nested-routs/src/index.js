import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { HomeView } from './views/Home';
import { CatalogView, ProductView } from './views/Catalog';
import { ProfileView } from './views/Profile';
import { NavBar } from './shared/NavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={HomeView} />
          <Route path="/catalog" component={CatalogView} />
          <Route path="/product/:id" component={ProductView} />
          <Route path="/profile" component={ProfileView} />
          <Route path="/about" component={() => <div>About</div>} />
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
