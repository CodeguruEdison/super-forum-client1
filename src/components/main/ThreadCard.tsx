import { faEye, faHeart, faReplyAll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { MOBIE_WIDTH } from '../../constants/constants';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { IThreadCardProps } from '../../interfaces/IThreadCardProps';
import Thread from '../../models/Thread';
import ThreadPointsInline from '../points/ThreadPointsInline';

const ThreadCard: FC<IThreadCardProps> = (props) => {
    const { thread } = props;
    const history = useHistory();
    const { width } = useWindowDimensions();
    const handleClickThread = (e: React.MouseEvent<HTMLDivElement>) => {
        history.push(`/thread/${thread.id}`);
    }
    const getPoints = (thread: Thread, width: number) => {
        if (width <= 768) {
            return (
                <ThreadPointsInline points={thread?.points || 0} />
            )
        }
        return null;
    }
    const getResponses = (thread: Thread, width: number) => {
        if (width <= 768) {
            return (
                <label style={{
                    marginRight: '.5em'
                }}
                >
                    {thread?.threadItems?.length}
                    <FontAwesomeIcon
                        icon={faHeart}
                        className="points-icon"
                        style={{
                            marginLeft: ".25em",
                            marginTop: "-.25em",
                        }}
                    ></FontAwesomeIcon>

                </label>
            )
        }
        return null;
    }
    const getPointsNonMobile = () => {
        if (width > MOBIE_WIDTH) {
            return (
                <div className="threadcard-points">
                    <div className="threadcard-points-item">
                        {thread.points || 0}
                        <br />
                        <FontAwesomeIcon icon={faHeart} className="points-icon" />
                    </div>
                    <div className="threadcard-points-item" style={{ marginBottom: ".75em" }}>
                        {thread?.threadItems?.length}
                        <br />
                        <FontAwesomeIcon icon={faReplyAll} className="points-icon" />
                    </div>
                </div>
            )
        }
        return null;
    }

    return (
        <section className="panel threadcard-container">
            <div className="threadcard-txt-container">
                <div className="content-header">
                    <Link to={`/categorythreads/${thread.category.id}`} className="link-txt">
                        <strong>{thread.category.name}</strong>
                    </Link>
                    <span className="username-header" style={{ marginLeft: '.5em' }}>
                        {thread?.userName}
                    </span>
                </div>
                <div className="questions">
                    <div onClick={handleClickThread} data-thread-id={thread.id}
                        style={{ marginBottom: '.4em' }}>
                        <strong>{thread?.title}</strong>
                    </div>
                    <div className="threadcard-body" onClick={handleClickThread} data-thread-id={thread.id}>
                        <div>
                            {thread.body}
                        </div>
                    </div>
                    {/* <!-- threadcard-footer--> */}
                    <div className="threadcard-footer">
                        <span style={{ marginRight: '.5em' }}>
                            <label>
                                {thread.views}
                                <FontAwesomeIcon icon={faEye} className="icon-lg" />
                            </label>
                        </span>
                        <span>
                            {getPoints(thread, width)}
                            {getResponses(thread, width)}
                        </span>

                    </div>
                </div>
            </div>
            {getPointsNonMobile()}
        </section>
    )
}
export default ThreadCard;