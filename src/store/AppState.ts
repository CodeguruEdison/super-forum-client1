import { IApplicationState } from './../interfaces/IApplicationState';
import { combineReducers } from "redux";
import { UserProfileReducer } from './user/Reducer';
export const rootReducer = combineReducers<IApplicationState>({
    userProfile: UserProfileReducer
});
//export type AppState = ReturnType<typeof rootReducer>