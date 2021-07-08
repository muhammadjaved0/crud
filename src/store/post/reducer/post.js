import { SET_POST } from "../action";

const intialState = {
  posts: [],
};

const postReducer = (state = intialState, action) => {
  console.log("user action dispatch");
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
}; 

export default postReducer;
