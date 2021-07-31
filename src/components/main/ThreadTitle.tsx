import React, { FC, InputHTMLAttributes } from 'react'
import { IThreadTitle } from '../../interfaces/IThreadTitle'

const ThreadTitle: FC<IThreadTitle> = (props) => {
    const { title } = props;
    const handleTitleOnchance = (e: InputHTMLAttributes<HTMLInputElement>) => {

    }
    return (
        <div className="thread-title-container">
            <strong>Title</strong>
            <div className="field">
                <input type="text" value={title || ''} placeholder='Title' onChange={handleTitleOnchance}></input>
            </div>

        </div>
    )
}
export default ThreadTitle;