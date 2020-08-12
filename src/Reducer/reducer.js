const initialState = {
  gameEnd: false,
  id: 0,
  page: 0,
  score:  0,
  select: '', //in work
  step: 0,
  win: false,
  bird: '', //in work
  classBirds: 'otherBirds', //in work
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

    case 'SET_SELECT_CLASS_BIRDS':
      console.log(state.classBirds);
      return {
        ...state,
        classBirds: actions.classBirds
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;