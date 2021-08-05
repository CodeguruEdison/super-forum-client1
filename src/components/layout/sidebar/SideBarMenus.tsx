import { faRegistered, faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IApplicationState } from "../../../interfaces/IApplicationState";
import { UserProfileSetActionType } from "../../../store/user/UserProfileActionType";
import { Login } from "../../auth/Login";
import Registration from "../../auth/Registration";
import "./SidebarMenus.css";
const SideBarMenus: FC = () => {
    const user = useSelector((state: IApplicationState) => state.user);
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch({
    //         type: UserProfileSetActionType.USER_PROFILE_SET,
    //         payload: {
    //             id: 1,
    //             userName: "testUser"
    //         },
    //     })
    //     return () => {
    //         //cleanup
    //     }
    // }, [dispatch])
    const handleOnClickRegister = () => {
        setShowRegister(!showRegister);
    }
    const handleLogin = () => {
        setShowLogin(!showLogin)
    }
    return (<>
        <ul>
            <li>
                <FontAwesomeIcon icon={faUser} />
                <span className="menu-name">{user?.userName}</span>
            </li>
            <li>
                <FontAwesomeIcon icon={faRegistered} />
                <span className="menu-name" onClick={handleOnClickRegister}>register</span>
                <Registration
                    isOpen={showRegister}
                    onClickToggle={handleOnClickRegister}
                />
            </li>


            <li>
                <FontAwesomeIcon icon={faSignInAlt} />
                <span className="menu-name" onClick={handleLogin}>login</span>
                <Login
                    isOpen={showLogin}
                    onClickToggle={handleLogin}
                />
            </li>
        </ul>
    </>)
}
export default SideBarMenus;