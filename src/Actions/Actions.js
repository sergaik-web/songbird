const requests = () => {
  return {
    type: 'REQUESTS'
  }
};

const setSelectClassBirds = (classBirds) => {
  return {
    type: 'SET_SELECT_CLASS_BIRDS',
    classBirds: classBirds
  }
};

const setRandomBird = (bird) => {
  return {
    type: 'SET_RANDOM_BIRD',
    bird: bird
  }
};

const setStep = () => {
  return {
    type: 'SET_STEP',
  }
};

const setWin = () => {
  return {
    type: 'SET_WIN',
  }
};

const setPage = () => {
  return {
    type: 'SET_PAGE'
  }
};

const setScore = (score) => {
  return {
    type: 'SET_SCORE',
    score: score
  }
};


export {requests, setRandomBird, setSelectClassBirds, setStep, setWin, setPage, setScore};