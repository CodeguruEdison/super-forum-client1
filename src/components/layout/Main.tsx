import React, { FC } from 'react'
import { IMain } from '../../interfaces/IMenu'

export const Main: FC<IMain> = () => {
    const test = true;
    if (test) throw new Error("Main fail");
    return (
        <main className="content">Main</main>
    )
}
export default Main;
