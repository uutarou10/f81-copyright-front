import React, {Component} from 'react'
import {Button, Form} from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {requestLogin} from '../../actions/userActions'

// import style
import '../../styles/main.css'
import { styles } from "../../styles/style";

class Login extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      draftEmail: '',
      draftPassword: ''
    }
  }

  onSubmit(e) {
    console.log(this.state)
    this.props.requestLogin(this.state.draftEmail, this.state.draftPassword)
  }

  render() {
    return (
      <div className="fullDiv" >
        <div className="imageBox registerImage" />
        <div className="formDiv" >
          <Form>
          <div className="top1">
          <Form.Field>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="mail@example.com"
              value={this.state.draftEmail}
              onChange={(e) => this.setState({draftEmail: e.target.value})}
              />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              placeholder="input your password"
              value={this.state.draftPassword}
              onChange={(e) => this.setState({draftPassword: e.target.value})}
              />
          </Form.Field>
          </div>
          <div className="top2" >
            <Button style={styles.button} type="submit" onClick={this.onSubmit}>ログイン</Button>
            <Button style={styles.button} onClick={() => linkTo('/')}>TOP</Button>
          </div>
          </Form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({requestLogin},dispatch)

function linkTo(path) {
  window.location.href = path
}

export default connect(null, mapDispatchToProps)(Login)