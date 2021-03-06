import React, { FC } from 'react'
import { IHome } from '../../interfaces/IHome'
import LeftMenu from '../layout/LeftMenu'
import Main from '../layout/Main'
import Nav from '../layout/Nav'
import RightMenu from '../layout/rightMenu/RightMenu'
import SideBar from '../layout/sidebar/SideBar'
import "./Home.css";
export const Home: FC<IHome> = (props) => {
    return (
        <div className="screen-root-container home-container">
            <div className="navigation">
                <Nav />
            </div>
            <SideBar />
            <LeftMenu />
            <Main />
            <RightMenu />
        </div>
    )
}
