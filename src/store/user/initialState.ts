import { IUserProfileState } from './../../interfaces/IUserProfileState';
export const userProfileInitialState: IUserProfileState = {
    id: -1,
    userName: '',
    email: '',
    isSubmitDisabled: true,
    password: '',
    resultMsg: '',
    passwordConfirm: ''
}