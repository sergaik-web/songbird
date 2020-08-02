const initialState = {
  scroll: 0,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "SCROLL_PAGE":
      return {
        ...state,
        scroll: actions.scroll,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;