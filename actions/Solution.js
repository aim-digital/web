const CREATE = '@fox-zero/web/Solution/CREATE';
const CREATE_SUCCESS = '@fox-zero/web/Solution/CREATE_SUCCESS';
const CREATE_FAIL = '@fox-zero/web/Solution/CREATE_FAIL';

const OPEN = '@fox-zero/web/Solution/OPEN';
const OPEN_SUCCESS = '@fox-zero/web/Solution/OPEN_SUCCESS';
const OPEN_FAIL = '@fox-zero/web/Solution/OPEN_FAIL';

const CLOSE = '@fox-zero/web/Solution/CLOSE';
const CLOSE_SUCCESS = '@fox-zero/web/Solution/CLOSE_SUCCESS';
const CLOSE_FAIL = '@fox-zero/web/Solution/CLOSE_FAIL';

const initialState = {
  error: null,
  current: null
};

export function create(data) {
  return {
    types: [CREATE, CREATE_SUCCESS, CREATE_FAIL],
    promise: (client) => client
        .post('/@boilerplatejs/core/Contact/create', { data })
        .then(async () => {
            await client.post('/@fox-zero/web/Solution/create', { data });
            return data;
        })
  };
}

export function open(solution) {
  return {
    types: [OPEN, OPEN_SUCCESS, OPEN_FAIL],
    promise: () => Promise.resolve(solution)
  };
}

export function close() {
  return {
    types: [CLOSE, CLOSE_SUCCESS, CLOSE_FAIL],
    promise: () => Promise.resolve()
  };
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_SUCCESS:
      return {
        ...state,
        current: action.result,
        error: null,
      };
    case CLOSE_SUCCESS:
      return {
        ...state,
        current: null,
        error: null,
      };
    case CREATE:
      return state;
    case CREATE_SUCCESS:
      return {
        ...state,
        ...action.result,
        error: null,
      };
    case CREATE_FAIL:
      return typeof action.error === 'string' ? {
        ...state,
        error: action.error
      } : state;
    default:
      return state;
  }
}