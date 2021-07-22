import React, { FC, useReducer, useState } from 'react'
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import { allowSubmit } from '../../common/Helpers';
import { isPasswordValid } from '../../common/validators/PasswordValidator';
import { IPasswordTestResult } from '../../interfaces/IPasswordTestResult';
import { IRegistration } from '../../interfaces/IRegistration';
import { IUserProfileState } from '../../interfaces/IUserProfileState';
import { UserProfileReducer } from '../../store/user/Reducer';
import { UserProfileSetActionType } from '../../store/user/UserProfileActionType';
import "./Registration.css";
const Registration: FC<IRegistration> = (props) => {
    const { isOpen, onClickToggle } = props;
    const [isRegisterDisabled, setRegisterDisabled] = useState<boolean>(true);
    const initialState: IUserProfileState = {
        id: 1,
        userName: "test",
        password: "",
        email: "admin@dzhaven.com",
        passwordConfirm: "",
        resultMsg: "",
        isSubmitDisabled: true,
    }
    //const dispatch = useDispatch();
    const [{ resultMsg, userName, email, password, passwordConfirm }, dispatch] = useReducer(UserProfileReducer, initialState);
    const onClickCancel = (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => {
        onClickToggle(e);
    }



    const passwordsSame = (passwordVal: string, passwordConfirmVal: string) => {
        if (passwordVal !== passwordConfirmVal) {
            allowSubmit(dispatch, "Passwords do not match", true);
            return false;
        } else {
            allowSubmit(dispatch, "", false);
            return true;
        }
    }


    const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: UserProfileSetActionType.USER_PROFILE_SET, payload: { [name]: e.target.value } });
        switch (name) {
            case "email":
                if (!e.target.value) {
                    allowSubmit(dispatch, "Email cannotbe empty", true);
                }
                else {
                    allowSubmit(dispatch, "", false);

                }
                break;
            case "passwordConfirm":
                passwordsSame(password, e.target.value);
                break;
            case "password":
                const passwordCheck: IPasswordTestResult = isPasswordValid(e.target.value);
                if (!passwordCheck.isValid) {
                    allowSubmit(dispatch, passwordCheck.message, true);
                    return;
                }
                passwordsSame(passwordConfirm, e.target.value);
                break;
            case "userName":
                if (!e.target.value) {
                    //allowRegister({ msg: "Username cannotbe empty", disabled: true });
                    allowSubmit(dispatch, "Username cannotbe empty", true);
                }
                else {
                    //allowRegister({ msg: "", disabled: false });
                    allowSubmit(dispatch, "", false);
                }
                break;
        }

    }
    const handleRegister = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        onClickToggle(e);
    }
    return (
        <ReactModal className="modal-menu" isOpen={isOpen} onRequestClose={onClickToggle}>
            <form>
                <div className="reg-inputs">
                    <div>
                        <label>username</label>
                        <input type="text" value={userName} onChange={handleChange('userName')} />
                    </div>
                    <div>
                        <label>email</label>
                        <input type="text" value={email} onChange={handleChange('email')} />
                    </div>
                    <div>
                        <label>password</label>
                        <input type="password" value={password} placeholder="Password" onChange={handleChange('password')} />
                    </div>
                    <div>
                        <label>password confirmation</label>
                        <input type="password" value={passwordConfirm} placeholder="Password confirmation" onChange={handleChange('passwordConfirm')} />
                    </div>

                    <div className="reg-buttons">
                        <button
                            style={{ marginLeft: ".5em" }}
                            className="action-btn"
                            disabled={isRegisterDisabled}
                            onClick={handleRegister}
                        >
                            Register
                        </button>
                        <button style={{ marginLeft: ".5em" }}
                            className="cancel-btn"
                            onClick={onClickCancel}>
                            Close
                        </button>
                    </div>

                    <span className="reg-btn-right">
                        <strong>{resultMsg}</strong>
                    </span>
                </div>

            </form>
        </ReactModal >
    )
}
export default Registration;