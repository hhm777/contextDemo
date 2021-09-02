import * as types from "../action-types";
const initState = {
  theme: "white"
};
const app = (state = initState, action) =>{
  switch (action.type) {
    case types.APP_SET_THEME:
      return {
        ...state,
        theme: action.theme
      };
    default:
      return state;
  }
}
export default app;
