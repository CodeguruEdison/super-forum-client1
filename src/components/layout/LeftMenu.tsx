import React, { FC, useCallback, useEffect, useState } from 'react'


import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { ILeftMenu } from '../../interfaces/ILeftMenu'
import { getCategories } from '../../services/DataService';
import "./LeftMenu.css";
const LeftMenu: FC<ILeftMenu> = (props) => {
    const { width } = useWindowDimensions();
    const [categories, setCategories] = useState<JSX.Element>(<div>Left Menu</div>);
    const getCategoriesfromApi = useCallback(
        async () => {
            let categories = await getCategories();
            if (categories.length > 0) {
                const cats = categories.map((cat) => {
                    return <li key={cat.id}>{cat.name}</li>
                })
                setCategories(<ul className="category">{cats}</ul>)
            }
        },
        [],
    )
    useEffect(() => {
        getCategoriesfromApi()

    }, [getCategoriesfromApi])

    return (
        <div className="leftmenu">{categories}</div>
    )
}
export default LeftMenu;
