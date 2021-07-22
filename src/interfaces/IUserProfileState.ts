import { IUser } from './IUser';

export interface IUserProfileState {
    //user: IUser
    id: number,
    userName: string,
    password: string,
    email: string,
    passwordConfirm: string,
    resultMsg: string,
    isSubmitDisabled: boolean
}