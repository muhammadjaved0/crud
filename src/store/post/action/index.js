export const GET_POSTS = "GET_POSTS";
export const SET_POSTS = "SET_POSTS";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";
export const SET_POST = "SET_POST";
export const SET_LOADING = "SET_LOADING";


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

export const addPost = (post) => {
  console.log("add post action call" , post);
  return {
    type: ADD_POST,
    post,
  };
};

export const setPost = (post) => {
  console.log("add post action call" , post);
  return {
    type: SET_POST,
    post,
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

export const setPostsLoader = (active) => {
  console.log("delete post action call");
  return {
    type: SET_LOADING,
    active,
  };
};

