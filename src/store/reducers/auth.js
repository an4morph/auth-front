const initailState = {
  login: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
}

export default (state = initailState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        login: {
          success: true,
          loading: false,
          failed: false,
          error: '',
        },
      }
    case 'LOGIN_LOADING':
      return {
        ...state,
        login: {
          success: false,
          loading: true,
          failed: false,
          error: '',
        },
      }
    case 'LOGIN_FAILED':
      return {
        ...state,
        login: {
          success: false,
          loading: false,
          failed: true,
          error: action.error,
        },
      }
    default:
      return state
  }
}
