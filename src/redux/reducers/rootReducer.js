import { combineReducers } from "redux";

import "../../data/data.json";
import posts from "../../data/postsData.json";
import pacients from "../../data/data.json";

const initStatePacients = { pacients };
console.log(initStatePacients);

const initState = { posts };
const test = () => {
  return {
    test: "test"
  };
};

const rootReducerPosts = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    //don't alter original array, create new array using filter
    let newPosts = state.posts.filter(post => {
      //this will only return a post if the ids DO NOT MATCH, in our case they will match, so it will not return a post, therefore remove it from the dom
      return action.id !== post.id;
    });
    return {
      //use spread operator first to get the original state properties
      ...state,
      //update the posts array
      posts: newPosts
    };
  }
  return state;
};

export default combineReducers({
  rootReducerPosts
});
