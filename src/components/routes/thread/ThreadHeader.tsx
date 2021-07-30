import React, { FC } from 'react'
import { IThreadHeader } from '../../../interfaces/IThreadHeader'
import UserNameAndTime from './UserNameAndTime';

const ThreadHeader: FC<IThreadHeader> = (props) => {
    const {
        userName,
        lastModifiedOn,
        title,
    } = props;
    return (
        <div className="thread-header-container">
            <h3>{title}</h3>
            <UserNameAndTime userName={userName} lastModifiedOn={lastModifiedOn} />
        </div>
    )
}
export default ThreadHeader;