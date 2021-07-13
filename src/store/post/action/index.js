export const GET_POSTS = "GET_POSTS";
export const SET_POSTS = "SET_POSTS";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";
export const SET_POST = "SET_POST";
export const SET_LOADING = "SET_LOADING";
export const UPDATE_POST = "UPDATE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const getPosts = () => {
  return {
    type: GET_POSTS,
  };
};

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts,
  };
};

export const addPost = (post) => {
  return {
    type: ADD_POST,
    post,
  };
};

export const setPost = (post) => {
  return {
    type: SET_POST,
    post,
  };
};

export const updatePost = (post) => {
  return {
    type: UPDATE_POST,
    post,
  };
};

export const editPost = (post) => {
  return {
    type: EDIT_POST,
    post,
  };
};

export const deletePost = (post) => {
  return {
    type: DELETE_POST,
    post,
  };
};
export const setRemovePost = (post) => {
  return {
    type: REMOVE_POST,
    post,
  };
};

export const setPostsLoader = (active) => {
  return {
    type: SET_LOADING,
    active,
  };
};
