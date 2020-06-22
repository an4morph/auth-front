export const changeField = (formName, fieldName, value) => ({
  type: 'CHANGE_FIELD',
  formName,
  fieldName,
  value,
})

const endpoint = 'http://localhost:5432'

const errorHandler = (error) => (error.response ? error.response.data : error.message)

export const loginAction = (data) => (dispatch) => {
  dispatch({ type: 'LOGIN_LOADING' })
  fetch(`${endpoint}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) throw response.status
      return response.json()
    })
    .then((res) => {
      dispatch({ type: 'LOGIN_SUCCESS' })
    })
    .catch((err) => {
      if (err === 403)dispatch({ type: 'LOGIN_FAILED', error: 'неверно' })
    })
}
