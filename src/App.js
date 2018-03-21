import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {history} from './router'

import store from './store'
import Top from './screens/Top'
import Register from './screens/Register'
import Login from './screens/Login'
import PostForm from './screens/PostForm'
import Post from './screens/Post'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Link to="/">top</Link>
            <Link to="/register">register</Link>
            <Link to="/login">login</Link>
            <Link to="/posts">post</Link>
            <hr />
            <Route exact path="/" component={Top} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route exact path="/posts" component={PostForm} />
            <Route path="/posts/:id" component={Post} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
