import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Top from './screens/Top'
import Register from './screens/Register'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">top</Link>
          <Link to="/register">register</Link>
          <hr />
          <Route exact path="/" component={Top} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
