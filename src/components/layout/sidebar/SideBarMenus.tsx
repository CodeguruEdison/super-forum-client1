import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IApplicationState } from "../../../interfaces/IApplicationState";
import { UserProfileSetActionType } from "../../../store/user/UserProfileActionType";
import "./SideBarMenus.css";
const SideBarMenus: FC = () => {
    const user = useSelector((state: IApplicationState) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: UserProfileSetActionType.USER_PROFILE_SET,
            payload: {
                id: 1,
                userName: "testUser"
            },
        })
        return () => {
            //cleanup
        }
    }, [dispatch])
    return (<>
        <ul>
            <FontAwesomeIcon icon={faUser} />
            <span className="menu-name">{user?.userName}</span>
        </ul>
    </>)
}
export default SideBarMenus;