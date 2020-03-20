const CHECK = '@fox-zero/web/Verification/CHECK';
const CHECK_SUCCESS = '@fox-zero/web/Verification/CHECK_SUCCESS';
const CHECK_FAIL = '@fox-zero/web/Verification/CHECK_FAIL';

const initialState = {
  status: null,
  error: null
};

export function check(token, action) {
  return {
    types: [CHECK, CHECK_SUCCESS, CHECK_FAIL],
    promise: client => client.get(`/@fox-zero/web/Verification/check?token=${token}`).then(status => {
      if (status.action !== action) {
        let e = new Error(`Action checksum does not match bot verification challenge.`);
        e.name = 'Verification';
        e.code = 412;
        throw e;
      }

      return status;
    })
  };
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHECK_SUCCESS:
      return {
        status: action.result,
        error: null
      };
    case CHECK_FAIL:
      return {
        status: null,
        error: action.error
      };
    default:
      return state;
  }
}