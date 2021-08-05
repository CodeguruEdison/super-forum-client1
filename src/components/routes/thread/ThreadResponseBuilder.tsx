import React, { FC, useEffect } from 'react'
import { IThreadResponseBuilder } from '../../../interfaces/IThreadResponseBuilder'
import { ThreadResponse } from './ThreadResponse';

const ThreadResponseBuilder: FC<IThreadResponseBuilder> = (props) => {
    const { threadItems } = props;
    return (
        <div className="thread-body-container">
            <strong style={{ marginBottom: '.75em' }}>Responses</strong>
            {
                threadItems && threadItems.map((item) => {
                    return (
                        <li key={`thr-${item.id}`}>
                            <ThreadResponse body={item.body} userName={item.userName}
                                lastModifiedOn={item.createdOn}
                                points={item.points}>
                            </ThreadResponse>
                        </li>
                    );
                })
            }
        </div>
    )
}
export default ThreadResponseBuilder;
