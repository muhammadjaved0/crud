export const GET_POSTS = "GET_POSTS";
export const SET_POSTS = "SET_POSTS";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";
export const SET_POST = "SET_POST";
export const SET_LOADING = "SET_LOADING";
export const  UPDATE_POST= "UPDATE_POST";
export const  REMOVE_POST= "REMOVE_POST";


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

export const updatePost = (post) => {
  console.log("post"  , post)
  debugger
  console.log("Edit post action call");
  return {
    type: UPDATE_POST,
    post,
  };
};



export const editPost = (post) => {
  console.log("post"  , post)
  debugger
  console.log("Edit post action call");
  return {
    type: EDIT_POST,
    post,
  };
};

// export const updatePost = (post) => {
//   console.log("add post action call" , post);
//   return {
//     type: UPDATE_POST,
//     post,
//   };
// };


export const deletePost = (post) => {
  console.log("delete post action call");
  return {
    type: DELETE_POST,
    post,
  };
};
export const setRemovePost = (post) => {
  console.log("delete post action call");
  return {
    type: REMOVE_POST,
    post,
  };
};

export const setPostsLoader = (active) => {
  console.log("delete post action call");
  return {
    type: SET_LOADING,
    active,
  };
};

