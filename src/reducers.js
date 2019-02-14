export function change(state = {}, action) {
  switch (action.type) {
    case "CHANGE_FIRST":
      return {
        ...state,
        first: action.text
      };
    case "CHANGE_SECOND":
      return {
        ...state,
        second: action.text
      };
    default:
      return state;
  }
}
