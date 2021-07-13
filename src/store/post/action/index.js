export const GET_POSTS = "GET_POSTS";
export const SET_POSTS = "SET_POSTS";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";

export const getPosts = () => {
  console.log("get POST action call");
  return {
    type: GET_POSTS,
  };
};

export const setPosts = (posts) => {
  console.log("set user action call");
  return {
    type: SET_POSTS,
    posts,
  };
};

export const addPost = (posts) => {
  console.log("add post action call" , posts);
  return {
    type: ADD_POST,
    posts,
  };
};

export const editPost = (posts) => {
  console.log("post"  , posts)
  debugger
  console.log("Edit post action call");
  return {
    type: EDIT_POST,
    posts,
  };
};

export const deletePost = (posts) => {
  console.log("delete post action call");
  return {
    type: DELETE_POST,
    posts,
  };
};
