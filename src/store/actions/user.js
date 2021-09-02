import {USER_SET_USER, USER_CLEAR_USER} from "../action-types";

export const setUser = (user) => {
  return {
    type: USER_SET_USER,
    user
  }
}
export const clearUser = () => {
  return {
    type: USER_CLEAR_USER
  }
}
