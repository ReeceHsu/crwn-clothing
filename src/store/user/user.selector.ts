import { createSelector } from 'reselect';
import { UserState } from './user.reducer';

export const currentUserReducer = (state): UserState => state.user.currentUser;

export const selectCurrentUser = createSelector(currentUserReducer, currentUser => currentUser.currentUser);
