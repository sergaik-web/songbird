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

export {requests, setRandomBird, setSelectClassBirds};