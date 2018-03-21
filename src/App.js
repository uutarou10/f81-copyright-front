import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './store'
import Top from './screens/Top'
import Register from './screens/Register'
import Login from './screens/Login'
import Post from './screens/Post'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Link to="/">top</Link>
            <Link to="/register">register</Link>
            <Link to="/login">login</Link>
            <Link to="/post">post</Link>
            <hr />
            <Route exact path="/" component={Top} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/post" component={Post} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
