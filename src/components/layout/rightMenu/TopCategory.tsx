import { cleanup } from '@testing-library/react';
import React, { FC, useEffect, useState } from 'react'
import { isJsxElement, JsxEmit } from 'typescript';
import { ITopCategory } from '../../../interfaces/ITopCategory'

export const TopCategory: FC<ITopCategory> = (props) => {
    const { topCategories } = props;
    const [threads, setThreads] = useState<JSX.Element | undefined>();
    useEffect(() => {
        if (topCategories?.length > 0) {
            const newThreadedElements = topCategories.map(top =>
                <li key={top.threadId}>
                    <span className="clickable-span">
                        {top.title}
                    </span>
                </li>
            );
            setThreads(<ul className="topcat-threads">
                {newThreadedElements}
            </ul>);
        }
    }, [topCategories])
    return (
        <div className="topcat-item-container">
            <div>
                <strong>{topCategories[0].category}</strong>
            </div>
            {threads}
        </div>
    )
}
export default TopCategory;