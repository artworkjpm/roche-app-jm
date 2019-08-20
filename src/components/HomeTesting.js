import React, { Component } from "react";
import TodoComponent from "./TodoComponent";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class HomeTesting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openImage: false
    };
  }

  handleOpen = () => {
    this.setState(state => ({
      openImage: !state.openImage
    }));
  };

  render() {
    // console.log(this.props);
    //I use destructuring because posts is an array and destructuring is just nicer
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <li className="collection-item" key={post.id}>
            <Link to={"/" + post.id}>{post.title} </Link>
          </li>
        );
      })
    ) : (
      <div>No posts yet</div>
    );

    return (
      <div className="container">
        <div className="row">
          <div className="col m6">
            <ul className="collection"> {postList}</ul>
          </div>
          <div className="col m6">
            <div className="center beforeImage">
              <p>Click here to see this diagram bigger, Understanding Redux:</p>
              <img src="images/redux.JPG" alt="React explanation" width="150" onClick={this.handleOpen} className={this.state.openImage ? "enlargeImage" : ""} />
            </div>

            <TodoComponent />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.rootReducerPosts.posts
  };
};

//we use higher order functions to connect to the redux store
export default connect(mapStateToProps)(HomeTesting);
