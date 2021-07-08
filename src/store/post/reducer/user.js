import { SET_USER } from "../action";

const intialState = {
  users: [],
};

const userReducer = (state = intialState, action) => {
  console.log("user action dispatch");
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

export default userReducer;
