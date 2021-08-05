import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IThread } from '../../../interfaces/IThread'
import ThreadModel from '../../../models/Thread';
import { getThreadById } from '../../../services/DataService';
import Nav from '../../layout/Nav';
import ThreadCategory from '../../main/ThreadCategory';
import ThreadTitle from '../../main/ThreadTitle';
import ThreadPointsBar from '../../points/ThreadPointsBar';
import "./Thread.css";
import ThreadBody from './ThreadBody';
import ThreadHeader from './ThreadHeader';
import ThreadResponseBuilder from './ThreadResponseBuilder';
const Thread: FC<IThread> = (props) => {
    const [thread, setThread] = useState<ThreadModel | undefined>();
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        (async () => {
            if (id && +id > 0) {
                const threadResponse = await getThreadById(id);
                setThread(threadResponse);
            }
        })();
    }, [id])
    return (
        <div className="screen-root-container">
            <div className="screen-nav-container">
                <Nav />
            </div>
            <div className="thread-content-container">
                <div className="thread-content-post-container">
                    <ThreadHeader userName={thread?.userName}
                        lastModifiedOn={thread ? thread?.lastModifiedOn : new Date()}
                        title={thread?.title} >
                    </ThreadHeader>
                    <ThreadCategory categoryName={thread?.category?.name} />
                    <ThreadTitle title={thread?.title} />
                    <ThreadBody body={thread?.body} />
                </div>
                <div className="thread-content-points-container">
                    <ThreadPointsBar
                        points={thread?.points || 0}
                        responseCount={
                            thread && thread.threadItems && thread.threadItems.length
                        }
                    />
                </div>
                <hr className="thread-section-divider" />
                <ThreadResponseBuilder threadItems={thread?.threadItems}></ThreadResponseBuilder>

            </div>
        </div>
    )
}
export default Thread;