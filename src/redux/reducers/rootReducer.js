const initState = {
  posts: [{ id: 1, title: "xxx", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi molestiae possimus cupiditate laborum natus consectetur, exercitationem deserunt saepe in animi voluptas numquam non. Sint nam impedit voluptatum at fuga quia?" }, { id: 2, title: "yyy", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi molestiae possimus cupiditate laborum natus consectetur, exercitationem deserunt saepe in animi voluptas numquam non. Sint nam impedit voluptatum at fuga quia?" }, { id: 3, title: "zzz", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi molestiae possimus cupiditate laborum natus consectetur, exercitationem deserunt saepe in animi voluptas numquam non. Sint nam impedit voluptatum at fuga quia?" }]
};

const rootReducer = (state = initState, action) => {
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

export default rootReducer;
