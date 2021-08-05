import React, { FC } from 'react'
import { IThreadPointsInline } from '../../interfaces/IThreadPointsInline'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ThreadPointsInline.css";
import {
    faHeart,
    faChevronDown,
    faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import "./ThreadPointsInline.css";
import { IThreadPointer } from '../../interfaces/IThreadPointer';
const ThreadPointsInline: FC<IThreadPointer> = (props) => {
    const {
        points,
        responseCount,
    } = props;
    return (
        <>
            <label style={{
                marginRight: '.75em'
                , marginTop: '0.25em'
            }}>
                {points || 0}
                <FontAwesomeIcon
                    icon={faHeart}
                    className="points-icon"
                    style={{ marginLeft: '.2em' }}
                ></FontAwesomeIcon>
            </label>
        </>
    )
}
export default ThreadPointsInline;