import React, {Component} from 'react'
import {Button, Form} from 'semantic-ui-react'
import {requestPost} from '../../actions/postActions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { requestLogout } from "../../actions/userActions";
// import style
import '../../styles/main.css'
import { styles } from "../../styles/style";


class Post extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.logout = this.logout.bind(this)
    this.state = {
      draftTitle: '',
    }
  }

  onSubmit() {
    this.props.requestPost(this.state.draftTitle)   
  }

  logout() {
    console.log(this.props.requestLogout)
    this.props.requestLogout()
  }

  render() {
    return (
      <div className="fullDiv" >
        <div className="header" >
          <div className="logout" >
            <Button onClick={() => this.logout()} >ログアウト</Button>
          </div>
        </div>
        <div className="postImageDiv center">
          <img className="postImage" src={require("../../images/postImage.png")} />
        </div>
        <div className="postDiv" >
          <p>Logined as {this.props.user.email || 'guest'}</p>
          <Form>
            <Form.Field>
              <label>Title</label>
              <input
                type="text"
                placeholder="your photo title"
                onChange={e => this.setState({draftTitle: e.target.value})}
              />
            </Form.Field>
            <Form.Field>
              <label>File</label> 
              <input type="file" name="photo" />
            </Form.Field>
            <Button
              style={styles.button}
              type="submit"
              onClick={this.onSubmit}
            >送信</Button>
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  requestPost,
  requestLogout
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post)