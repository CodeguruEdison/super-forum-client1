import { Dispatch } from "react";
import { UserProfileSetActionType } from "../store/user/UserProfileActionType";
export const allowSubmit = (
    dispatch: Dispatch<any>,
    msg: string,
    setDisabled: boolean
) => {
    //dispatch({ type: "isSubmitDisabled", payload: setDisabled });
    //  dispatch({ payload: msg, type: "resultMsg" });
    dispatch({
        type: UserProfileSetActionType.USER_PROFILE_SET,
        payload: {
            'resultMsg': msg,
            'isSubmitDisabled': setDisabled
        }
    });
}