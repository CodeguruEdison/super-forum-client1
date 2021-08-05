import React, { FC } from 'react'
import { IThreadBody } from '../../../interfaces/IThreadBody'
import RichEditor from '../../editor/RichEditor';

const ThreadBody: FC<IThreadBody> = (props) => {
    const { body } = props;
    return (
        <div className="thread-body-container">
            <strong>Body</strong>
            <div className="thread-body-editor">
                <RichEditor existingBody={body} />
            </div>
        </div>
    )
}
export default ThreadBody;