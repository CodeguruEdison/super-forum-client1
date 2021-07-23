import React, { FC } from 'react'
import { IHome } from '../../interfaces/IHome'
import LeftMenu from '../layout/LeftMenu'
import Main from '../layout/Main'
import Nav from '../layout/Nav'
import RightMenu from '../layout/RightMenu'
import SideBar from '../layout/sidebar/SideBar'
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
