import { createSelector } from 'reselect';

import { RootState } from '../store';
import { UserState } from './user.reducer';

export const currentUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(currentUserReducer, user => user.currentUser);
