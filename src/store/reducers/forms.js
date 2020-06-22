const initailState = {
  login: {
    username: '',
    password: '',
  },
  signin: {
    lastname: '',
    firstname: '',
    username: '',
    password: '',
  },
}

export default (state = initailState, action) => {
  switch (action.type) {
    case 'CHANGE_FIELD':
      return {
        ...state,
        [action.formName]: {
          ...state[action.formName],
          [action.fieldName]: action.value,
        },
      }
    default:
      return state
  }
}
