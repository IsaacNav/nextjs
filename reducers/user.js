import { logged, logOut } from 'constants/user'

const defaultUser = null

/**
 *
 * @param {object} state
 * @param {object} action
 */
const userReducer = (state = defaultUser, action) => {
  const { type, payload } = action
  switch (type) {
    case logged:
      return { ...payload }
    case logOut:
      return { ...payload }
    default:
      return state
  }
}

export const getUserState = (state) => state.userReducer

export default userReducer
