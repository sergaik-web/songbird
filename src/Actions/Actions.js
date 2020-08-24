const requests = () => {
  return {
    type: "REQUESTS",
  };
};

const setRandomBird = (bird) => {
  return {
    type: "SET_RANDOM_BIRD",
    bird: bird,
  };
};

const setWin = () => {
  return {
    type: "SET_WIN",
  };
};

const setPage = () => {
  return {
    type: "SET_PAGE",
  };
};

const setScore = (score) => {
  return {
    type: "SET_SCORE",
    score: score,
  };
};

const setSelect = (select) => {
  return {
    type: "SET_SELECT",
    select: select,
  };
};

const setEndGame = () => {
  return {
    type: "SET_END_GAME",
  };
};

const setNewGame = () => {
  return {
    type: "SET_NEW_GAME",
  };
};

export {
  requests,
  setRandomBird,
  setWin,
  setPage,
  setScore,
  setSelect,
  setEndGame,
  setNewGame,
};
