export const initialDefaultState = {
  data: null,
  status: null,
  error: null
};

export const initAppState = {
  ...initialDefaultState,
  data: {
    isLoggedIn: null,
    isReady: null
  }
};
