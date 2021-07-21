import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react'
import { MOBIE_WIDTH } from '../../constants/constants';
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import "./Nav.css";
const Nav: FC = () => {
    const { width } = useWindowDimensions();
    const getMobileMenu = () => {
        if (width <= MOBIE_WIDTH) {
            return <FontAwesomeIcon icon={faBars} size="lg" className="nav-mobile-menu" />
        }
    }
    return (
        <nav className="navigation">
            {getMobileMenu()}
            <strong>SuperForum</strong>
        </nav>
    )
}
export default Nav