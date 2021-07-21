import { IUserProfileState } from './../../interfaces/IUserProfileState';
import { IUserProfilePayload } from "../../interfaces/IUserProfilePayload";
import { Reducer } from "redux";
import { UserProfileActions } from './UserProfileActions';
import { userProfileInitialState } from './initialState';
import { UserProfileSetActionType } from './UserProfileActionType';
import produce from 'immer';
export const UserProfileReducer: Reducer<IUserProfileState | undefined, UserProfileActions> = (state = userProfileInitialState, action) => {
    switch (action.type) {
        case UserProfileSetActionType.USER_PROFILE_SET: {
            return updateUser(state, action.payload);
        }
        default:
            return state;
    }
}
const updateUser = (state: IUserProfileState, payload: IUserProfilePayload) => {
    const nextState = produce(state, draft => {
        draft.id = payload.id;
        draft.userName = payload.userName;
    })
    return nextState;
}
