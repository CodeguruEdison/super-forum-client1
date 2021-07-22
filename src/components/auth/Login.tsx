import React, { FC, useReducer } from 'react'
import ReactModal from 'react-modal';
import { ILogin } from '../../interfaces/IRegistration';
import { IUserProfileState } from '../../interfaces/IUserProfileState';
import { UserProfileReducer } from '../../store/user/Reducer';

export const Login: FC<ILogin> = (props) => {
    const { isOpen, onClickToggle } = props;
    const initialState: IUserProfileState = {
        id: -1,
        userName: "t",
        password: "",
        email: "",
        passwordConfirm: "",
        resultMsg: "",
        isSubmitDisabled: true,
    }
    const [{ userName, password, resultMsg, isSubmitDisabled }, dispatch] = useReducer(UserProfileReducer, initialState);
    const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {

    }
    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {

    }
    return (
        <ReactModal className="modal-new" isOpen={isOpen} onRequestClose={onClickToggle} shouldCloseOnEsc={true}>
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
                
                </div>
            </form>
        </ReactModal>
    )
}
