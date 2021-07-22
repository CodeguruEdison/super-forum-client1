import { IUserProfileState } from './../../interfaces/IUserProfileState';
import { IUserProfilePayload } from "../../interfaces/IUserProfilePayload";
import { Reducer } from "redux";
import { UserProfileActions } from './UserProfileActions';
import { userProfileInitialState } from './initialState';
import { UserProfileSetActionType } from './UserProfileActionType';
import produce from 'immer';

export const UserProfileReducer: Reducer<IUserProfileState, UserProfileActions> = (state = userProfileInitialState, action) => {
    switch (action.type) {
        case UserProfileSetActionType.USER_PROFILE_SET: {
            const newState = {
                ...state
                , ...action.payload
            };
            return newState;

        }
        default:
            return state;
    }
}
const updateUser = (state: IUserProfileState, payload: IUserProfilePayload) => {

    const nextState = produce(state, draft => {
        //{...draft,payload}
        //if(payload.)
        // (Object.keys(payload) as (keyof IUserProfileState)[]).forEach(key => {
        //     //  {...draft,...payload}
        //     // draft[key] = payload[key] as any;
        //     //if(draft.has)
        // });
        /*(Object.keys(payload).forEach(key => {
            if(draft.)     
        });*/
        //draft.id = payload.id as number;
        //draft.userName = payload.userName as string;
        //return { ...draft, ...payload }
        // draft.userName = "I";
    })
    return nextState;
}
