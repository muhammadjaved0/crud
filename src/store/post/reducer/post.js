import { SET_POSTS,SET_POST,ADD_POST,EDIT_POST, DELETE_POST,SET_LOADING } from "../action";

const intialState = {
  posts: [],
  loadingPosts: false
};

const postReducer = (state = intialState, action) => {
  console.log("state", state);
  console.log("action", action);
  console.log("post action dispatch");
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    case SET_POST:
      return {
        ...state,
        posts: [...state.posts, action.post.posts],
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
          return post.id === action.post.id ? action.post : post;
        }),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.post),
      };
      case SET_LOADING:
      return {
        ...state,
        loadingPosts: action.active,
      };
    default:
      return state;
  }
};

export default postReducer;
