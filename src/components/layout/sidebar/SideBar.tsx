import React, { FC } from 'react'
import { useWindowDimensions } from '../../../hooks/useWindowDimensions';
import { ISideBar } from '../../../interfaces/ISideBar';
import SideBarMenus from './SideBarMenus';


const SideBar: FC<ISideBar> = (props) => {
    const { width } = useWindowDimensions();
    if (width <= 768) {
        return null;
    }
    return (
        <div className="sidebar">
            <SideBarMenus />
        </div>
    )
}
export default SideBar;