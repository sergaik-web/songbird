const initialState = {
  gameEnd: false,
  id: 0,
  page: 0,
  random:  4,
  score:  0,
  select: false,
  step: 0,
  win: false,
  bird: '',
  loaded: false
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "REQUESTS":
      return {
        ...state,
        loaded: true
      };

    case 'SET_RANDOM_BIRD':
      return {
        ...state,
        bird: actions.bird
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;