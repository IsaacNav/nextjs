import { logged, logOut } from 'constants/user'

/**
 *
 * @param {object} state
 */
export const loggedUser = (state) => ({
  type: logged,
  payload: state,
})

/**
 *
 * @param {object} state
 */
export const removeUser = (state) => ({
  type: logOut,
  payload: state,
})
