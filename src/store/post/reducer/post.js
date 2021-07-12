import { SET_POST, ADD_POST, EDIT_POST, DELETE_POST } from "../action";

const intialState = {
  posts: [],
};

const postReducer = (state = intialState, action) => {
  console.log("state", state);
  console.log("action", action);
  debugger;
  console.log("post action dispatch");
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        posts: action.posts,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.posts],
      };
    case EDIT_POST:
      console.log("edit post reducers");
      console.log("edit state", state);
      debugger;
      console.log("edit action", action.posts);
      debugger;
      return {
        ...state,
        posts: state.posts.map((post) => {
          return post.id === action.posts.id ? action.posts : post;
        }),
      };
    case DELETE_POST:
      // console.log("delete post reducers");
      // console.log("delete state", state);
      // debugger;
      // console.log("delete action", action.posts);
      // debugger;
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.posts),
      };
    default:
      return state;
  }
};

export default postReducer;
