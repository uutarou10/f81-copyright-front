import React, {Component} from 'react'
import {Button, Form} from 'semantic-ui-react'
import {requestPost} from '../../actions/postActions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Post extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      draftTitle: '',
    }
  }

  onSubmit() {
    this.props.requestPost(this.state.draftTitle)   
  }

  render() {
    return (
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
          type="submit"
          onClick={this.onSubmit}
        >Sent</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  requestPost
}, dispatch)

export default connect(null, mapDispatchToProps)(Post)