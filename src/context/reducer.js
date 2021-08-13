export const initState = {num1: 0, num2: 0, sum: 0};
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NUM1":
      return {
        ...state,
        num1: state.num1 + 1
      }
    case "ADD_NUM2":
      return {
        ...state,
        num2: state.num2 + 1
      }
    case "GET_SUM":
      return {
        ...state,
        sum: state.num1 + state.num2
      }
  }
}
