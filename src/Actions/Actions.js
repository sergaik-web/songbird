const requests = () => {
  return {
    type: 'REQUESTS'
  }
};

const setRandomBird = (bird) => {
  return {
    type: 'SET_RANDOM_BIRD',
    bird: bird
  }
};

export {requests, setRandomBird};