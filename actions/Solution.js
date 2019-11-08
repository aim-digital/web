const CREATE = '@fox-zero/web/Solution/CREATE';
const CREATE_SUCCESS = '@fox-zero/web/Solution/CREATE_SUCCESS';
const CREATE_FAIL = '@fox-zero/web/Solution/CREATE_FAIL';

const initialState = {
  error: null
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

export default (state = initialState, action = {}) => {
  switch (action.type) {
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