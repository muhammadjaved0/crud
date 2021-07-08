export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";

export const getUser = () => {
  console.log("get user action call");
  return {
    type: GET_USER,
  };
};

export const setUser = (users) => {
  console.log("set user action call");
  return {
    type: SET_USER,
    users,
  };
};
