export const GET_POST = "GET_POST";
export const SET_POST = "SET_POST";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";

export const getPosts = () => {
  console.log("get POST action call");
  return {
    type: GET_POST,
  };
};

export const setPosts = (posts) => {
  console.log("set user action call");
  return {
    type: SET_POST,
    posts,
  };
};

export const addPosts = (posts) => {
  console.log("add post action call");
  return {
    type: ADD_POST,
    posts,
  };
};

export const deletePosts = (posts) => {
  console.log("delete post action call");
  return {
    type: DELETE_POST,
    posts,
  };
};