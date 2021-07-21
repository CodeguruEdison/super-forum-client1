import { IUserProfilePayload } from "./IUserProfilePayload";

export interface IUserProfileAction {
    type: string;
    payload: IUserProfilePayload | null;
}