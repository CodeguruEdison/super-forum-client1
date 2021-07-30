import React, { FC } from 'react'
import { getTimePastIfLessThanDay } from '../../../common/dates';
import { IUserNameAndTime } from '../../../interfaces/IUserNameAndTime'

export const UserNameAndTime: FC<IUserNameAndTime> = (props) => {
    const { userName, lastModifiedOn } = props;
    return (
        <span>
            <strong>{userName}</strong>
            <label style={{ marginLeft: '1em' }}>
                {lastModifiedOn ? getTimePastIfLessThanDay(lastModifiedOn) : ''}
            </label>
        </span>
    )
}
export default UserNameAndTime;