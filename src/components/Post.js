import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePostAction } from "../redux/actions/postActions";

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    //redirect to home page after deleting post
    this.props.history.push("/about");
  };
  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  //we need to get the url id (/number) and match it to id of the data
  //we can obtain href url from the props.match
  let urlId = parseInt(ownProps.match.params.post_id);
  //we have to return an object in order to use the data
  //we have to
  return {
    post: state.rootReducerPosts.posts.find(post => post.id === urlId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePostAction(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
