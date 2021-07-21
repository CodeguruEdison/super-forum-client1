import { IUserProfilePayload } from './../../interfaces/IUserProfilePayload';
import { action } from 'typesafe-actions';
import { UserProfileSetActionType } from './UserProfileActionType';

export const setUserProfile = (payload: IUserProfilePayload) => action(UserProfileSetActionType.USER_PROFILE_SET, payload);
export type UserProfileActions = ReturnType<typeof setUserProfile>;