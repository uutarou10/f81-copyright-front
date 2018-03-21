import React, {Component} from 'react'
import {connect} from 'react-redux'
import { header } from '../../utils/header'

class Post extends Component {
  constructor(props) {
    super(props)
  }

  

  render() {
    return (
<<<<<<< Updated upstream
      <div>
        <h2>{this.props.post.title}</h2>
        <img src={this.props.post.image_path} />
=======
      <div className="fullDiv" >
        { header(this.props.user.email) }
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
>>>>>>> Stashed changes
      </div>
    )
  }
}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, null)(Post)