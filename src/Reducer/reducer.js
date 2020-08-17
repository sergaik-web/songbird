const initialState = {
  gameEnd: false,
  page: 0, //in work
  score:  0, // in work
  step: 0, //in work
  win: false, //in work
  bird: '', //in work
  classBirds: 'otherBirds', //in work
  select: '', // in work
  loaded: false //in work
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
      return {
        ...state,
        gameEnd: false,
        page: 0,
        score:  0,
        step: 0,
        win: false,
        bird: '',
        classBirds: actions.classBirds
      };

    case 'SET_STEP':
      return {
        ...state,
        step: state.step+1
      };

    case 'SET_WIN':
      return {
        ...state,
        win: true
      };

    case 'SET_PAGE':
      console.log(state.page);
      return {
        ...state,
        page: state.page + 1,
        win: false
      };

    case 'SET_SCORE':
      return {
        ...state,
        score: state.score+actions.score
      };

    case 'SET_SELECT':
      console.log(actions.select);
      return {
        ...state,
        select: actions.select
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;