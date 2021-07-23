import React, { FC } from 'react'
import { IMainHeaderProps } from '../../interfaces/IMainHeader'
import "./MainHeader.css";
const MainHeader: FC<IMainHeaderProps> = (props) => {
    const { category } = props;
    return (
        <div className="main-header">
            <div className="title-bar" style={{ marginBottom: ".25em", paddingBottom: "0" }}>
                <strong>{category?.name || "Placeholder"}</strong>
            </div>
        </div>
    )
}
export default MainHeader