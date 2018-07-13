const START = '@vitruvian-tech/machete-bundle/Progress/START';
const START_SUCCESS = '@vitruvian-tech/machete-bundle/Progress/START_SUCCESS';
const STOP = '@vitruvian-tech/machete-bundle/Progress/STOP';
const STOP_SUCCESS = '@vitruvian-tech/machete-bundle/Progress/STOP_SUCCESS';
const UPDATE = '@vitruvian-tech/machete-bundle/Progress/UPDATE';
const UPDATE_SUCCESS = '@vitruvian-tech/machete-bundle/Progress/UPDATE_SUCCESS';

const progress = {
  loading: false,
  status: 0
};

export function start() {
  return {
    types: [START, START_SUCCESS],
    promise: () => Promise.resolve({ status: 0, loading: true })
  };
}

export function stop() {
  return {
    types: [STOP, STOP_SUCCESS],
    promise: () => Promise.resolve({ loading: false })
  };
}

export function update(status) {
  return {
    types: [UPDATE, UPDATE_SUCCESS],
    promise: () => Promise.resolve({ status })
  };
}

export default (state = progress, action = {}) => {
  return [START_SUCCESS, STOP_SUCCESS, UPDATE_SUCCESS].indexOf(action.type) > -1 ? { ...Object.assign(progress, action.result) } : state;
};
