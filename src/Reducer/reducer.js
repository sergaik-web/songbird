const initialState = {
  gameEnd: false,
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
      console.log(actions.bird);
      return {
        ...state,
        bird: actions.bird
      };

    case 'SET_SELECT_CLASS_BIRDS':
      return {
        ...state,
        classBirds: actions.classBirds
      };

    case 'SET_STEP':
      return {
        ...state,
        step: state.step+1
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;