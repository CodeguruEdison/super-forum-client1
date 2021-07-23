import React, { FC, useReducer } from 'react'
import ReactModal from 'react-modal';
import { allowSubmit } from '../../common/Helpers';
import { ILogin } from '../../interfaces/IRegistration';
import { IUserProfileState } from '../../interfaces/IUserProfileState';
import { UserProfileReducer } from '../../store/user/Reducer';
import { UserProfileSetActionType } from '../../store/user/UserProfileActionType';

export const Login: FC<ILogin> = (props) => {
    const { isOpen, onClickToggle } = props;
    const initialState: IUserProfileState = {
        id: -1,
        userName: "",
        password: "",
        email: "",
        passwordConfirm: "",
        resultMsg: "",
        isSubmitDisabled: true,
    }
    const [{ userName, password, resultMsg, isSubmitDisabled }, dispatch] = useReducer(UserProfileReducer, initialState);
    const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: UserProfileSetActionType.USER_PROFILE_SET, payload: { userName: e.target.value } });
        if (!e.target.value) {
            allowSubmit(dispatch, "Username cannot be empty", true);
        }
        else {
            allowSubmit(dispatch, "", false);
        }
    }
    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: UserProfileSetActionType.USER_PROFILE_SET, payload: { password: e.target.value } });
        if (!e.target.value) {
            allowSubmit(dispatch, "Password can not be empty", true);
        }
        else {
            allowSubmit(dispatch, "", false);
        }
    }
    const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        onClickToggle(e);
    }
    const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClickToggle(e);
    }
    return (
        <ReactModal className="modal-menu" isOpen={isOpen} onRequestClose={onClickToggle} shouldCloseOnEsc={true}>
            <form>
                <div className="reg-inputs">
                    <div>
                        <label>username</label>
                        <input type="text" value={userName} onChange={onChangeUserName} />
                    </div>
                    <div>
                        <label>password</label>
                        <input type="password" placeholder="password" value={password} onChange={onChangePassword} />
                    </div>
                </div>
                <div className="form-buttons form-buttons-sm">
                    <div className="form-btn-left">
                        <button style={{ marginLeft: ".5em" }} className="action-btn"
                            disabled={isSubmitDisabled} onClick={handleLogin}>Login</button>
                        <button style={{ marginLeft: ".5em" }} className="cancel-btn"
                            onClick={handleCancel}>Close</button>
                    </div>
                    <span className="form-btn-left">
                        <strong>{resultMsg}</strong>
                    </span>
                </div>
            </form>
        </ReactModal>
    )
}
