import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IThread } from '../../../interfaces/IThread'
import ThreadModel from '../../../models/Thread';
import { getThreadById } from '../../../services/DataService';
import Nav from '../../layout/Nav';
import ThreadCategory from '../../main/ThreadCategory';
import ThreadTitle from '../../main/ThreadTitle';
import "./Thread.css";
import ThreadHeader from './ThreadHeader';
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
                    {/* <ThreadBody  /> */}
                </div>
            </div>
        </div>
    )
}
export default Thread;