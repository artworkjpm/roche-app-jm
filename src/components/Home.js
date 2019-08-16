import React, { Component } from "react";
import TodoComponent from "./TodoComponent";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    openImage: false
  };

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
          <Link to={"/" + post.id} key={post.id}>
            <li>{post.title}</li>
          </Link>
        );
      })
    ) : (
      <div>No posts yet</div>
    );

    return (
      <div className="container">
        <div className="row">
          <div className="col" />
          <h4 className="center">Buscar Pacientes</h4>
          <p>Introduzca el ID del médico</p>

          <form onSubmit={this.handleSubmit}>
            <label htmlFor="idmedico">ID de médico</label>
            <input type="text" placeholder="ID de médico" />
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div className="row">
          <div className="col m6">
            {" "}
            <h4 className="center">Home</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo iusto tenetur distinctio commodi velit? Architecto hic dolores nobis, tempore natus ipsa saepe corrupti porro quas suscipit alias velit incidunt sunt.</p>
            <ul className="listx"> {postList}</ul>
          </div>
          <div className="col m6">
            <div className="center beforeImage">
              <p>Understand Redux:</p>
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
export default connect(mapStateToProps)(Home);
