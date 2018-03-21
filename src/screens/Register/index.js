import React, {Component} from 'react'
import {Button, Form} from 'semantic-ui-react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setUser, requestRegisterUser}  from '../../actions/userActions'

// import style
import '../../styles/main.css'
import { styles } from "../../styles/style";


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
    this.props.requestRegisterUser(
      this.state.draftEmail,
      this.state.draftPassword,
      this.state.draftPasswordConfirmation
    )
  }

  render() {
    return(
      <div className="fullDiv" >
        <div className="imageBox registerImage" />
          <div className="formDiv" >
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
            <Button style={styles.button} type="submit" onClick={this.onSubmit}>登録する</Button>
          </Form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  setUser,
  requestRegisterUser
}, dispatch))

export default connect(null, mapDispatchToProps)(Register) 