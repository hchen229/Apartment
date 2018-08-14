import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Features from './components/Features';
import Floor from './components/Floor';
import Leasing from './components/Leasing';
import Location from './components/Location';
import Price from './components/Price';
import Nav from './components/Nav';

class App extends React.Component {
 render() {
    return (
      <div>
        <Nav/>

        <Switch>
          <Route path="/" exact component={Features} />
          <Route path="/Floor" exact component={Floor} />
          <Route path="/Leasing" exact component={Leasing} />
          <Route path="/Location" exact component={Location} />
          <Route path="/Price" exact component={Price} />
        </Switch>

      </div>
    );
  }
}

export default App;
