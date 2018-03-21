import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getPost} from '../../actions/postActions'

class Post extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.id)
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

const mapDispatchToProps = dispatch => bindActionCreators({
  getPost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post)