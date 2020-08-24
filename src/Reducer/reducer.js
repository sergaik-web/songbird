const initialState = {
  gameEnd: false, //in work
  page: 1, //in work
  score: 0, // in work
  win: false, //in work
  bird: "", //in work
  classBirds: "otherBirds", //in work
  select: "", // in work
  loaded: false, //in work
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "REQUESTS":
      return {
        ...state,
        loaded: true,
      };

    case "SET_RANDOM_BIRD":
      return {
        ...state,
        bird: actions.bird,
      };

    case "SET_SELECT_CLASS_BIRDS":
      return {
        ...state,
        select: "",
        gameEnd: false,
        page: 1,
        score: 0,
        step: 0,
        win: false,
        bird: "",
        classBirds: actions.classBirds,
      };

    case "SET_WIN":
      return {
        ...state,
        win: true,
      };

    case "SET_PAGE":
      return {
        ...state,
        page: state.page + 1,
        win: false,
        select: "",
      };

    case "SET_SCORE":
      return {
        ...state,
        score: state.score + actions.score,
      };

    case "SET_SELECT":
      return {
        ...state,
        select: actions.select,
      };

    case "SET_END_GAME":
      return {
        ...state,
        gameEnd: true,
      };

    case "SET_NEW_GAME":
      return {
        ...state,
        gameEnd: false, //in work
        page: 1, //in work
        score: 0, // in work
        step: 0, //in work
        win: false, //in work
        bird: "", //in work
        select: "", // in work
        loaded: false, //in work
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
