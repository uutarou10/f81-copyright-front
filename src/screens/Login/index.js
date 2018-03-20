import React, {Component} from 'react'
import {Button, Form} from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {requestLogin} from '../../actions/userActions'

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
      <Form>
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
        <Button type="submit" onClick={this.onSubmit}>Login</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({requestLogin},dispatch)

export default connect(null, mapDispatchToProps)(Login)