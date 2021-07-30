import React, { FC, useEffect, useState } from 'react'
import { useWindowDimensions } from '../../../hooks/useWindowDimensions';
import { IRightMenu } from '../../../interfaces/IRightMenu';
import { groupBy } from 'lodash';
import { getTopCategories } from '../../../services/DataService';
import TopCategory from './TopCategory';
const RightMenu: FC<IRightMenu> = () => {
    const { width } = useWindowDimensions();
    const [topCatagories, setTopCategories] = useState<Array<JSX.Element> | undefined>();
    useEffect(() => {
        (async () => {
            const topCategories = await getTopCategories();
            const topCatThreads = groupBy(topCategories, "category");
            const topElements = [];
            for (let key in topCatThreads) {
                const currentTop = topCatThreads[key];
                topElements.push(<TopCategory key={key} topCategories={currentTop}></TopCategory>)
            }
            setTopCategories(topElements);
        })();
    }, [])
    if (width <= 768) {
        return null;
    }
    return (
        <div className="rightmenu rightmenu-container">{topCatagories}</div>
    )
}
export default RightMenu;

