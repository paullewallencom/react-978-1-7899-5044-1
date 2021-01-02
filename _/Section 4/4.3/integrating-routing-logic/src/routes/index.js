import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import NavBar from '../components/Navbar';
import Counter from '../components/Counter';
import Contact from '../components/Contact';
import About from '../components/About';
import NotMatch from '../components/NoMatch';

export const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route component={NotMatch} />
    </Switch>
  </div>
);
