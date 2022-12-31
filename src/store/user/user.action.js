import { USER_ACTION_TYPES } from './user.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCurrentUser = user => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
	createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = user => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = error => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpStart = (email, passwod, displayName) =>
	createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, passwod, displayName });

export const signUpSuccess = ({ user, addtionalDetails }) =>
	createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, addtionalDetails });

export const signUpFailed = error => createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);
