import React, {Component} from 'react'
import {connect} from 'react-redux'

class Post extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <img src={this.props.post.image_path} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, null)(Post)