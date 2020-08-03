const initialState = {
  gameEnd: false,
  id: 0,
  page: 0,
  random:  4,
  score:  0,
  select: false,
  step: 0,
  win: false
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "SCROLL_PAGE":
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;