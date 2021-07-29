import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState } from 'react'
import ReactModal from 'react-modal';
import { MOBIE_WIDTH } from '../../constants/constants';
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import "./Nav.css";
import SideBarMenus from './sidebar/SideBarMenus';
const Nav: FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { width } = useWindowDimensions();
    const getMobileMenu = () => {
        if (width <= MOBIE_WIDTH) {
            return <FontAwesomeIcon icon={faBars} size="lg" className="nav-mobile-menu" onClick={onClickToggle} />
        }
    }
    const onClickToggle = () => {
        setShowMenu(!showMenu);
    }
    const onRequestClose = (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => {
        setShowMenu(false)
    }
    return (
        <>
            <ReactModal className="modal-menu" isOpen={showMenu} onRequestClose={onRequestClose} shouldCloseOnOverlayClick={true}>
                <SideBarMenus></SideBarMenus>
            </ReactModal>
            <nav>
                {getMobileMenu()}
                <strong>SuperForum</strong>
            </nav>
        </>
    )
}
export default Nav