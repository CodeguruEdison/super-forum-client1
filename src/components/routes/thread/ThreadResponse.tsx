import React, { FC } from 'react'
import { IThreadResponse } from '../../../interfaces/IThreadResponse'
import RichEditor from "../../editor/RichEditor";
import UserNameAndTime from "./UserNameAndTime";
export const ThreadResponse: FC<IThreadResponse> = (props) => {
    const {
        body,
        userName,
        lastModifiedOn,
        points,
    } = props;
    return (
        <div>
            <div>
                <UserNameAndTime userName={userName} lastModifiedOn={lastModifiedOn} />
                <span style={{ marginLeft: "1em" }}>
                    {/* <ThreadPointsInline points={points || 0} /> */}
                </span>
            </div>
            <div className="thread-body-editor">
                <RichEditor existingBody={body} />
            </div>
        </div>
    )
}
