import { faHeart, faReplyAll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react'
import { MOBIE_WIDTH } from '../../constants/constants';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { IThreadPointer } from '../../interfaces/IThreadPointer'

const ThreadPointsBar: FC<IThreadPointer> = (props) => {
    const {
        points,
        responseCount,
    } = props;
    const { width } = useWindowDimensions();
    if (width > MOBIE_WIDTH) {
        return (
            <div className="threadcard-points">
                <div className="threadcard-points-item">
                    {points}
                    <br />
                    <FontAwesomeIcon icon={faHeart} className="points-icon" />
                </div>
                <div className="threadcard-points-item">
                    {responseCount}
                    <br />
                    <FontAwesomeIcon icon={faReplyAll} className="points-icon" />
                </div>
            </div>
        )
    }
    return null;
}
export default ThreadPointsBar;
