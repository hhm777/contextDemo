import {APP_SET_THEME} from "../action-types";

export const setTheme = (theme) => {
  return {
    type: APP_SET_THEME,
    theme
  }
}
