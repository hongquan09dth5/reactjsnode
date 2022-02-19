const ASYNC_START = "ASYNC_START";
const ASYNC_FINISH = "ASYNC_FINISH";
const ASYNC_ERROR = "ASYNC_ERROR";

export const asyncStart = () => {
  return {
    type: ASYNC_START
  };
};

export const asyncFinish = () => {
  return {
    type: ASYNC_FINISH
  };
};

export const asyncError = (error) => {
  return {
    type: ASYNC_ERROR,
    payload: error,
  };
};

const defaultState = {
  loading: false,
  error: null,
};

const asyncReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ASYNC_START:
      return { ...state, loading: true, error: null };
    case ASYNC_FINISH:
      return { ...state, loading: false };
    case ASYNC_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default asyncReducer;