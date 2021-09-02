import * as types from "../action-types";
const initState = {
  username: "",
  password: "",
  remember: false,
  token: ""
};
const user = (state = initState, action) =>{
  switch (action.type) {
    case types.USER_SET_USER:
      return {
        ...state,
        ...action.user
      };
    case types.USER_CLEAR_USER:
      return {
        ...initState
      };
    default:
      return state;
  }
}
export default user;
