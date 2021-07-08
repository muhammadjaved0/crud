export const GET_POST = "GET_POST";
export const SET_POST = "SET_POST";

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
