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

const dataClassBirds = [
  "otherBirds" ,
  "forestBirds",
  "predatorsBirds",
  "songBirds",
  "oceanBirds",
  "warmUp",
];

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


    case "SET_WIN":
      return {
        ...state,
        win: true,
      };

    case "SET_PAGE":
      return {
        ...state,
        classBirds: dataClassBirds[state.page],
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
        classBirds: dataClassBirds[0],
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
