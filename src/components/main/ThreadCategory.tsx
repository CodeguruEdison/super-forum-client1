import React, { FC } from 'react'
import { catOptions } from '../../constants/constants';
import { IThreadCategory } from '../../interfaces/IThreadCategory'
import DropDown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
const ThreadCategory: FC<IThreadCategory> = (props) => {
    const { categoryName } = props;
    const defaultOption = catOptions[0];
    const handleCategoryChange = (args: Option) => {
        console.log(args);
    }
    return (
        <div className="thread-category-container">
            <strong>{categoryName}</strong>
            <DropDown className="thread-category-dropdown"
                options={catOptions}
                value={defaultOption}
                placeholder="Select a category"
                onChange={handleCategoryChange} />

        </div>
    )
}
export default ThreadCategory;
