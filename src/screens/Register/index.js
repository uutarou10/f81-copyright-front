import React, {Component} from 'react'
import {Button, Form} from 'semantic-ui-react'
import {connect} from 'react-redux'

class Register extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      draftEmail: '',
      draftPassword: '',
      draftPasswordConfirmation: ''
    }
  }

  onSubmit() {
    console.log(this.state)
  }

  render() {
    return(
      <div>
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
          <Form.Field>
            <label>Password(confirm)</label>
            <input
              type="password"
              placeholder="input your password again"
              value={this.state.draftPasswordConfirmation}
              onChange={(e) => this.setState({draftPasswordConfirmation: e.target.value})}
            />
          </Form.Field>
          <Button type="submit" onClick={this.onSubmit}>Register</Button>
        </Form>
      </div>
    )
  }
}

export default Register